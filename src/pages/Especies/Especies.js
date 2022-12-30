import useFetch from "../../assets/js/useFetch.js";
import Card from "../../components/Card/Card.js";
import { Link } from "react-router-dom";

import "./Especies.css";
import Layout from "../../components/Layout/Layout.js";
import CardContainer from "../../components/CardContainer/CardContainer.js";

const Especies = () => {
  const especies = useFetch(process.env.REACT_APP_API_URL);

  return (
    <>
      <Layout titulo="Especies" styles="titulo-especies">
        <CardContainer>
          {especies.map((especie, i) => (
            <div className="col">
              <Link
                to={"/especie/" + especie.nombre}
                style={{ textDecoration: "none" }}
              >
                <Card
                  key={especie.id}
                  imagen={especie.imagen}
                  nombre={especie.nombre}
                  nombre2={especie.nombre2}
                  id={especie.id}
                />
              </Link>
            </div>
          ))}
        </CardContainer>
      </Layout>
    </>
  );
};
export default Especies;
