import { Link } from "react-router-dom";
import "../Card/card.css";
function Card(props) {
  return (
    <>
      <div className="col-md-6 col-10 mx-auto main">
        <div className="card">
          <img src={props.image} className="card-img-top" alt={props.image} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/" className="btn btn-dark">
              {props.btntxt}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
