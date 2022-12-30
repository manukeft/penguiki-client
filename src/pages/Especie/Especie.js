import { Link, useParams } from "react-router-dom";
import useFetch from "../../assets/js/useFetch.js";
import Button from "../../components/Button/Button.js";
import "./Especie.css";
import Layout from "../../components/Layout/Layout.js";


const Especie = () => {
  const { nombre } = useParams();
  const especies = useFetch(process.env.REACT_APP_API_URL);
  
  return (
    <>
      {especies
        .filter((especie) => especie.nombre === nombre)
        .map((especie, i) => (
          <>
            <Layout
              titulo={especie.nombre}
              subtitulo={especie.nombre2}
              styles="titulo-especie"
            >
              <div className="content-container">
                <div className="row">
                  <div className="col-6 texto-especie">
                      <p className="p-descripcion">{especie.descripcion}</p>
                      <p className="p-nombre">Nombre: {especie.nombre2}</p>
                      <p className="p-genero">
                        Género:{" "}
                        <Link
                          to={"/genero/" + especie.genero}
                          className="a-genero"
                        >
                          {especie.genero}
                        </Link>
                      </p>
                  </div>
                  <div className="col-6 imagen">
                    <img
                      src={especie.imagen}
                      alt={especie.nombre}
                      className="img-responsive img-especie-individual"
                    />
                  </div>
                </div>
                <div className="btn-container">
                  <Button
                    to="/"
                    clase="btn btn-secondary"
                    texto="Back to home"
                  />
                  <Button
                    to="/especies"
                    clase="btn btn-secondary"
                    texto="Back to especies"
                  />
                </div>
              </div>
            </Layout>
          </>
        ))}
    </>
  );
};

export default Especie;
