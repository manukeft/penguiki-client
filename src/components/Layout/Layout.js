import "./Layout.css";
import Header from "../Heaeder/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children, titulo, styles}) => {
  return (
    <>
      <Header />
      <main className="container text-light">
        <h1 className={styles}>{titulo}</h1>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
