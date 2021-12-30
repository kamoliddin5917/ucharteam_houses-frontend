import "./HouseList.css";
import { Link } from "react-router-dom";

const HouseList = ({ house, setSum, setHouseId, houseInfo, setModal }) => {
  return (
    <li className="card_list">
      <ol className="card_media">
        {house.house_media.length &&
          house.house_media.map((media, i) => (
            <li className="card_media_list" key={i}>
              <img className="media_list" src={media} />
            </li>
          ))}
      </ol>

      <h4 className="list_title">{house.house_inform}</h4>
      <ol className="house_list">
        <li>House floor: {house.house_floor}</li>
        <li>House kvm: {house.house_kvm}</li>
        <li>House kvm sum: {house.house_kvm_sum}</li>
        <li>House price: {house.totalPrice}</li>
      </ol>

      <div className="btns">
        <button className="btn ">
          <Link
            className="btn_link"
            to="/bank"
            onClick={() => {
              setSum(house.totalPrice);
              setHouseId(house.house_id);
            }}
          >
            tanlash
          </Link>
        </button>
        <button
          className="btn btn--more"
          onClick={() => {
            setModal(true);
            houseInfo(house.house_id);
          }}
        >
          ko'proq
        </button>
      </div>
    </li>
  );
};

export default HouseList;
