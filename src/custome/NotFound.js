import NotFoundImg from '../img/404.jpg'

const NotFound = () => {
    return (
        <main className="mx-auto w-75">
          <img src={NotFoundImg} alt="" />
        </main>
    );
};

export default NotFound;