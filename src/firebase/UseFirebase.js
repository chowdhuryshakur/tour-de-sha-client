import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from './initializeAuthentication';

initializeAuthentication();

const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true)
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
      });
  }

  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .finally(() => setLoading(false))
  }

  //reg and login with email and password
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        setUser(user)
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        setError('');
        setUser(user);
      })
      .catch(error => {
        setError(error.message);
      })
  }
  // observe whether user auth state changed or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, [])

  return {
    user,
    loading,
    signInUsingGoogle,
    logOut,
    processLogin,
    registerNewUser,
    error
  }
}

export default UseFirebase;