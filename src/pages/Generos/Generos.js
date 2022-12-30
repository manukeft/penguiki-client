import useFetch from "../../assets/js/useFetch.js";
import Card from "../../components/Card/Card.js";
import Layout from "../../components/Layout/Layout.js";
import CardContainer from "../../components/CardContainer/CardContainer.js";
import { Link } from "react-router-dom";

import "./Generos.css";

const Generos = () => {
  const generos = useFetch(process.env.REACT_APP_API_URL+process.env.REACT_APP_GENEROS);

  return (
    <>
          <Layout titulo="Géneros" styles="titulo-generos">
            <CardContainer>
              {generos.map((genero, i) => (
                <div className="col">
                  <Link
                    to={"/genero/" + genero.nombreGenero}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Card
                      id={genero.id}
                      imagen={genero.imagen}
                      nombre={genero.nombreGenero}
                      key={genero.id}
                    />
                  </Link>
                </div>
              ))}
            </CardContainer>
          </Layout>
    </>
  );
};

export default Generos;
