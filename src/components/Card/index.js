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
             {props.maintext}
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
