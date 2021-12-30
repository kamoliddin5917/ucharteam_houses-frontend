import "./ComplexList.css";
import { Link } from "react-router-dom";

const ComplexList = ({ complex, setComplexId, complexInfo, setModal }) => {
  return (
    <li className="card_list">
      <ol className="card_media">
        {complex.complex_media.length &&
          complex.complex_media.map((media, i) => (
            <li className="card_media_list" key={i}>
              <img className="media_list" src={media} />
            </li>
          ))}
      </ol>

      <h4 className="list_title">{complex.complex_name}</h4>
      <p className="complex_text">{complex.complex_inform}</p>

      <div className="btns">
        <button className="btn ">
          <Link
            className="btn_link"
            to="/house"
            onClick={() => {
              setComplexId(complex.complex_id);
            }}
          >
            tanlash
          </Link>
        </button>
        <button
          className="btn btn--more"
          onClick={() => {
            setModal(true);
            complexInfo(complex.complex_id);
          }}
        >
          ko'proq
        </button>
      </div>
    </li>
  );
};

export default ComplexList;
