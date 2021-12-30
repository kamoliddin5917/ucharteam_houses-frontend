import "./Company.css";
import { useEffect, useRef, useState } from "react";

// Components
import CompanyList from "../CompanyList/CompanyList";
import port from "../../assets/config/config";
import { toast } from "react-toastify";

const Company = ({ setCompanyId }) => {
  const [companies, setCompanies] = useState([]);
  const [company, setCompany] = useState({});
  const [modal, setModal] = useState(false);

  const modalE = useRef();
  const modalX = useRef();

  useEffect(() => {
    fetch(`${port.url}/api/company`)
      .then((json) => json.json())
      .then((data) => {
        if (data.companies) {
          setCompanies(data.companies);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const companyInfo = (id) => {
    fetch(`${port.url}/api/company/${id}`)
      .then((json) => json.json())
      .then((data) => {
        if (data.company) {
          setCompany(data.company);
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
        <h1 className="title">Company</h1>
        <ul className="main_card">
          {companies.length &&
            companies.map((company, i) => (
              <CompanyList
                key={i}
                company={company}
                setCompanyId={setCompanyId}
                setModal={setModal}
                companyInfo={companyInfo}
              />
            ))}
        </ul>
      </div>

      {modal && company.company_id && (
        <div ref={modalE} className="modal" onClick={modalExit}>
          <div className="modal_body">
            <button ref={modalX} className="exit" onClick={modalExit}>
              X
            </button>
            <h1>{company.company_name}</h1>
            <div className="modal_images">
              {company.user_image && (
                <img
                  className="modal_user_image"
                  src={company.user_image}
                  alt={company.user_firstname}
                />
              )}
              <ul className="modal_card_media">
                {company.company_media.map((media, i) => (
                  <li key={i}>
                    <img src={media} alt={company.company_name} />
                  </li>
                ))}
              </ul>
            </div>

            <ol className="modal_card">
              <li className="modal_list">{`Owner: ${company.user_firstname} ${company.user_lastname}`}</li>
              <li className="modal_list">{`Owner email: ${company.user_email}`}</li>
              <li className="modal_list">{`Company inform: ${company.company_inform} `}</li>
            </ol>
          </div>
        </div>
      )}
    </>
  );
};

export default Company;
