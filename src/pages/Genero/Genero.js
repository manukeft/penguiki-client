import { Link, useParams } from "react-router-dom";
import useFetch from "../../assets/js/useFetch.js";
import Button from "../../components/Button/Button.js";
import Layout from "../../components/Layout/Layout.js";

import "./Genero.css";

const Genero = () => {
  const { genero } = useParams();
  
  const generos = useFetch(process.env.REACT_APP_API_URL + process.env.REACT_APP_GENERO + `/${genero}`);
  
  return (
    <>
      {generos.map((genero, i) => (
        <>
          <Layout titulo={genero.nombreGenero} styles="titulo-genero">
            <div className="content-container">
              <div className="row">
                <div className="col-6 texto-genero">
                  <p className="descripcion-genero">{genero.descripcion}</p>
                  <p className="subtitulo-genero">Especies del género: {genero.nombreGenero}</p>
                  <div className="container-especies">
                    {genero.especies.map((especie) => (
                      <Link to={"/especie/" + especie} className="item-especie">
                        {especie}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="col-6 text-center imagen">
                  <img
                    src={genero.imagen}
                    alt={genero.nombreGenero}
                    className="img-responsive img-genero-individual"
                  />
                </div>
              </div>
              <div className="btn-container">
                <Button to="/" clase="btn btn-secondary" texto="Back to home" />
                <Button
                  to="/generos"
                  clase="btn btn-secondary"
                  texto="Back to generos"
                />
              </div>
            </div>
          </Layout>
        </>
      ))}
    </>
  );
};

export default Genero;
