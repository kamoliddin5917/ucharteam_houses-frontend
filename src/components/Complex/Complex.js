import "./Complex.css";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

import ComplexList from "../ComplexList/ComplexList";
import port from "../../assets/config/config";

const Complex = ({ complexes, setComplexId }) => {
  const [complex, setComplex] = useState({});
  const [modal, setModal] = useState(false);

  const modalE = useRef();
  const modalX = useRef();

  const complexInfo = (id) => {
    fetch(`${port.url}/api/complex?cxId=${id}`)
      .then((json) => json.json())
      .then((data) => {
        if (data.complex) {
          setComplex(data.complex);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const modalExit = (e) => {
    if (e.target === modalE.current || e.target === modalX.current) {
      setModal(false);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="title">Complex</h1>
        <ul className="main_card">
          {complexes.length &&
            complexes.map((complex, i) => (
              <ComplexList
                key={i}
                complex={complex}
                setComplexId={setComplexId}
                complexInfo={complexInfo}
                setModal={setModal}
              />
            ))}
        </ul>
      </div>

      {modal && complex.complex_id && (
        <div ref={modalE} className="modal" onClick={modalExit}>
          <div className="modal_body">
            <button ref={modalX} className="exit" onClick={modalExit}>
              X
            </button>
            <h1>{complex.complex_name}</h1>
            <div className="modal_images">
              {complex.user_image && (
                <img
                  className="modal_user_image"
                  src={complex.user_image}
                  alt={complex.user_firstname}
                />
              )}
              <ul className="modal_card_media">
                {complex.complex_media.map((media, i) => (
                  <li key={i}>
                    <img src={media} alt={complex.complex_name} />
                  </li>
                ))}
              </ul>

              <ul className="modal_card_media">
                {complex.company_media.map((media, i) => (
                  <li key={i}>
                    <img src={media} alt={complex.company_name} />
                  </li>
                ))}
              </ul>
            </div>

            <ol className="modal_card">
              <li className="modal_list">{`Owner: ${complex.user_firstname} ${complex.user_lastname}`}</li>
              <li className="modal_list">{`Owner email: ${complex.user_email}`}</li>
              <li className="modal_list">{`Company name: ${complex.company_name} `}</li>
              <li className="modal_list">{`Company inform: ${complex.company_inform} `}</li>
              <li className="modal_list">{`Complex inform: ${complex.complex_inform} `}</li>
              <li className="modal_list">{`Complex date: ${new Date(
                complex.complex_date
              )} `}</li>
            </ol>
          </div>
        </div>
      )}
    </>
  );
};

export default Complex;
