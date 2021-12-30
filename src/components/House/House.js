import { useRef, useState } from "react";
import { toast } from "react-toastify";

import HouseList from "../HouseList/HouseList";
import port from "../../assets/config/config";

const House = ({ houses, setSum, setHouseId }) => {
  const [house, setHouse] = useState({});
  const [modal, setModal] = useState(false);

  const modalE = useRef();
  const modalX = useRef();

  const houseInfo = (id) => {
    fetch(`${port.url}/api/house?hId=${id}`)
      .then((json) => json.json())
      .then((data) => {
        if (data.house) {
          setHouse(data.house);
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
        <h1 className="title">House</h1>
        <ul className="main_card">
          {houses.length &&
            houses.map((house, i) => (
              <HouseList
                key={i}
                house={house}
                setSum={setSum}
                setHouseId={setHouseId}
                houseInfo={houseInfo}
                setModal={setModal}
              />
            ))}
        </ul>
      </div>

      {modal && house.house_id && (
        <div ref={modalE} className="modal" onClick={modalExit}>
          <div className="modal_body">
            <button ref={modalX} className="exit" onClick={modalExit}>
              X
            </button>
            <h1>{`${house.company_name} - ${house.complex_name}`}</h1>
            <div className="modal_images">
              {house.user_image && (
                <img
                  className="modal_user_image"
                  src={house.user_image}
                  alt={house.user_firstname}
                />
              )}
              <ul className="modal_card_media">
                {house.complex_media.map((media, i) => (
                  <li key={i}>
                    <img src={media} alt={house.complex_name} />
                  </li>
                ))}
              </ul>

              <ul className="modal_card_media">
                {house.house_media.map((media, i) => (
                  <li key={i}>
                    <img src={media} alt={house.house_totalPrice} />
                  </li>
                ))}
              </ul>

              <ul className="modal_card_media">
                {house.company_media.map((media, i) => (
                  <li key={i}>
                    <img src={media} alt={house.company_name} />
                  </li>
                ))}
              </ul>
            </div>

            <ol className="modal_card">
              <li className="modal_list">{`Owner: ${house.user_firstname} ${house.user_lastname}`}</li>
              <li className="modal_list">{`Owner email: ${house.user_email}`}</li>
              <li className="modal_list">{`Company name: ${house.company_name} `}</li>
              <li className="modal_list">{`Company inform: ${house.company_inform} `}</li>
              <li className="modal_list">{`Complex inform: ${house.complex_inform} `}</li>
              <li className="modal_list">{`Complex date: ${new Date(
                house.complex_date
              )} `}</li>
              <li className="modal_list">{`House date: ${new Date(
                house.house_date
              )} `}</li>
              <li className="modal_list">{`House inform: ${house.house_inform} `}</li>
              <li className="modal_list">{`House floor: ${house.house_floor} `}</li>
              <li className="modal_list">{`House room: ${house.house_room} `}</li>
              <li className="modal_list">{`House kvm: ${house.house_kvm} `}</li>
              <li className="modal_list">{`House kvm summa: ${house.house_kvm_sum} sum`}</li>
              <li className="modal_list">{`House total price: ${house.totalPrice} sum`}</li>
            </ol>
          </div>
        </div>
      )}
    </>
  );
};

export default House;
