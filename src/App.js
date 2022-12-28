import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

import useFetch from "./useFetch";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./components/Card/Card.js";

const Home = () => {

  return (
    <>
      <Container>
        <h1 id="title">
          <b>Pengüiki</b>
        </h1>
        <br />
        <br />
        <div className="container-p">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus,
            fugit sapiente voluptatem laboriosam saepe aut suscipit iste minus
            totam distinctio perferendis adipisci explicabo eius accusantium sit
            aspernatur ad consectetur quidem?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
            necessitatibus inventore eligendi ratione nobis alias quos, repellat
            vel natus aut asperiores! Et possimus quam sed eius consequatur
            nulla, sit facilis. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Cum corrupti molestiae eos quas totam vitae
            aspernatur tempora? Ipsa unde fugit libero laudantium eius
            consequuntur doloremque earum? Beatae eius ex dolorem?
          </p>
        </div>
      </Container>
    </>
  );
};

const Generos = () => {
  const generos = useFetch("http://localhost:8080/generos/");

  return (
    <>
      <div className="contenedor">
        <div className="container">
          <h1 id="titulo">Géneros</h1>
          <div className="card-container d-flex">
            <div className="row row-cols-3 gap-4 justify-content-around row-cols-1 row-cols-sm-3 row-cols-md-4 px-5 px-sm-0">
              {generos.map((genero, i) => (
                <div className="col">
                  <Link
                    to={"/genero/" + genero.nombre}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <div key={i} className="card">
                      <img
                        src={genero.imagen}
                        alt={genero.nombre}
                        className="img-genero"
                      />
                      <div className="card-body">
                        <h4 className="card-text">{genero.nombre}</h4>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Genero = () => {
  const { genero } = useParams();
  console.log(genero)
  // const especies = useFetch("http://localhost:8080");

  const generos = useFetch("http://localhost:8080/genero/" + genero);
  console.log(generos)

  return (
    <>
      <div class="contenedor">
        <div class="container text-light">
          {generos
            .map((genero, i) => (
              <>
                <main>
                  <h1 id="titulo">Género: {genero.nombre}</h1>
                </main>

                <div className="row">
                  <div class="col-6">
                    <p className="descripcion-genero">{genero.descripcion}</p>
                    <h5>Especies del género: {genero.nombre}</h5>
                    {genero.especies.map((especie) => (
                      <Link
                        to={"/especie/" + especie}
                        style={{ textDecoration: "none" }}
                      >
                        <li
                          className="item-especie"
                          style={{ listStyleType: "none" }}
                        >
                          {especie}
                        </li>
                      </Link>
                    ))}
                  </div>
                  <div class="col-6 text-center">
                    <img src={genero.imagen} alt={genero.nombre} className="img-genero-individual" />
                  </div>
                </div>
              </>
            ))}
          <div class="row text-center btn-container">
            <div class="col-6">
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                className="btn btn-secondary"
              >
                Regresar a la home
              </Link>
            </div>
            <div class="col-6">
              <Link
                to="/generos/"
                style={{ textDecoration: "none" }}
                className="btn btn-secondary"
              >
                Regresar a generos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Especies = () => {
  const especies = useFetch("http://localhost:8080/");

  return (
    <>
      <div class="contenedor">
        <Container>
          <h1 id="titulo">Especies</h1>
          <Row className="row-cols-3 gap-4 justify-content-around row-cols-1 row-cols-sm-3 row-cols-md-4 px-5 px-sm-0">
            {especies.map((especie, i) => (
              <Col>
                <Link
                  to={"/especie/" + especie.nombre}
                  style={{ textDecoration: "none" }}
                >
                  <div className="card p-0" key={i}>
                    <Card.Img
                      src={especie.imagen}
                      alt={especie.nombre}
                      className="img-especie"
                    />
                    <Card.Body>
                      <Card.Text id="nombre">{especie.nombre}</Card.Text>
                      <Card.Text id="nombre2">({especie.nombre2})</Card.Text>
                    </Card.Body>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

const Especie = () => {
  const { nombre } = useParams();
  const especies = useFetch("http://localhost:8080/");

  return (
    <>
      <div className="contenedor-especie">
        <div className="container text-light">
          {especies
            .filter((especie) => especie.nombre === nombre)
            .map((especie, i) => (
              <>
                <div class="row">
                  <h1 id="titulo-especie" className="text-center">
                    Especie: {especie.nombre}
                  </h1>
                  <h5 id="subtitulo-especie" className="text-center">
                    ({especie.nombre2})
                  </h5>
                  <div class="col-6">
                    <div className="container">
                      <p id="descripcion">{especie.descripcion}</p>
                      <p>
                        Genero:{" "}
                        <Link to={"/genero/" + especie.genero}>
                          {especie.genero}
                        </Link>
                      </p>
                      <p>
                        <Link to="/especies">Atras</Link>
                      </p>

                    </div>
                  </div>
                  <div class="col-6 text-center">
                    <img src={especie.imagen} alt={especie.nombre} />
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};



const App = () => (
  <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/generos/" element={<Generos />} />
      <Route path="/especies/" element={<Especies />} />
      <Route path="/especie/:nombre" element={<Especie />} />
      <Route path="/genero/:genero" element={<Genero />} />
    </Routes>
  </>
);
export default App;
