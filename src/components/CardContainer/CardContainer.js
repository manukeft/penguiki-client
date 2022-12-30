import "./CardContainer.css";

const CardContainer = ({ children }) => {
  return (
    <>
      <div className="card-container d-flex">
        <div className="row gap-4 justify-content-around row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-4 px-3 px-sm-0">
          {children}
        </div>
      </div>
    </>
  );
};

export default CardContainer;
