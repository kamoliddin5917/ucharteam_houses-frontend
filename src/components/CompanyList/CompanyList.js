import "./CompanyList.css";
import { Link } from "react-router-dom";

const CompanyList = ({ company, setCompanyId, companyInfo, setModal }) => {
  return (
    <>
      <li className="card_list">
        <ol className="card_media">
          {company.company_media.length &&
            company.company_media.map((media, i) => (
              <li className="card_media_list" key={i}>
                <img
                  className="media_list"
                  src={media}
                  alt={company.company_name}
                />
              </li>
            ))}
        </ol>

        <h4 className="list_title">{company.company_name}</h4>

        <div className="btns">
          <button className="btn ">
            <Link
              className="btn_link"
              to="/complex"
              onClick={() => {
                setCompanyId(company.company_id);
              }}
            >
              tanlash
            </Link>
          </button>
          <button
            className="btn btn--more"
            onClick={() => {
              setModal(true);
              companyInfo(company.company_id);
            }}
          >
            ko'proq
          </button>
        </div>
      </li>
    </>
  );
};

export default CompanyList;
