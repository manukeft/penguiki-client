import Header from "../../components/Heaeder/Header";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="contenedor-principal">
        <Header />
        <div className="contenedor">
          <h1 className="titulo-home">
            <b>Pengüiki</b>
          </h1>
          <div className="container-p">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus, fugit sapiente voluptatem laboriosam saepe aut suscipit
              iste minus totam distinctio perferendis adipisci explicabo eius
              accusantium sit aspernatur ad consectetur quidem?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
              necessitatibus inventore eligendi ratione nobis alias quos,
              repellat vel natus aut asperiores! Et possimus quam sed eius
              consequatur nulla, sit facilis. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Cum corrupti molestiae eos quas
              totam vitae aspernatur tempora? Ipsa unde fugit libero laudantium
              eius consequuntur doloremque earum? Beatae eius ex dolorem?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;