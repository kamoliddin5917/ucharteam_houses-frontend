import "./Bank.css";
import { useState } from "react";
import { useRef } from "react";
import { toast } from "react-toastify";

import BankList from "../BankList/BankList";
import port from "../../assets/config/config";

const Bank = ({ banks, houseId }) => {
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);
  const [bankId, setBankId] = useState();

  const [bank, setBank] = useState({});
  const [modalInfo, setModalInfo] = useState(false);

  const errorModal = useRef();
  const errorButton = useRef();
  const modalBuy = useRef();
  const fullName = useRef();
  const email = useRef();
  const tel = useRef();

  const modalE = useRef();
  const modalX = useRef();

  const modalExit = (e) => {
    if (e.target === errorModal.current || e.target === errorButton.current) {
      setError(false);
    } else if (e.target === modalBuy.current) {
      setModal(false);
    } else if (e.target === modalE.current || e.target === modalX.current) {
      setModalInfo(false);
    }
  };

  const handleSubmitBuy = (e) => {
    e.preventDefault();

    const data = {
      fullName: fullName.current.value,
      email: email.current.value,
      tell: tel.current.value,
      bankId,
      houseId,
    };

    fetch(`${port.url}/api/buy`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(data),
    })
      .then((json) => json.json())
      .then((d) => {
        console.log(d);
        toast.success("Tez orada aloqaga chiqishadi!");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });

    fullName.current.value = "";
    email.current.value = "";
    tel.current.value = "";

    setModal(false);
  };

  const bankInfo = (id) => {
    fetch(`${port.url}/api/bank/${id}`)
      .then((json) => json.json())
      .then((data) => {
        if (data.bank) {
          setBank(data.bank);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className="container">
        <h1 className="title">Bank</h1>
        <ul className="main_card">
          {banks.length &&
            banks.map((bank, i) => (
              <BankList
                key={i}
                bank={bank}
                houseId={houseId}
                setModal={setModal}
                setError={setError}
                setBankId={setBankId}
                bankInfo={bankInfo}
                setModalInfo={setModalInfo}
              />
            ))}
        </ul>
      </div>

      {error && toast.error("Uy tanlash kere birinchi nmaga shoshilasiz!")}
      {error && (
        <>
          <div ref={errorModal} className="bank_error" onClick={modalExit}>
            <div className="bank_error_body">
              <button className="exit" ref={errorButton} onClick={modalExit}>
                X
              </button>
              <h1>ERROR!</h1>
              <h4>Birinchi uy tallen keyin bankdan pul olasiz... </h4>
            </div>
          </div>
        </>
      )}

      {modal && (
        <div ref={modalBuy} className="modal_buy" onClick={modalExit}>
          <form onSubmit={handleSubmitBuy} className="modal_form">
            <h1>Bankimizga Hushkelibsiz!</h1>
            <input
              className="bank_input"
              ref={fullName}
              type="text"
              placeholder="Full Name"
              required
            />
            <input
              className="bank_input"
              ref={email}
              type="email"
              placeholder="Email"
              required
            />
            <input
              className="bank_input"
              ref={tel}
              type="tel"
              placeholder="Tell Number"
              required
            />

            <button className="bank_btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}

      {modalInfo && bank.bank_id && (
        <div ref={modalE} className="modal" onClick={modalExit}>
          <div className="modal_body">
            <button ref={modalX} className="exit" onClick={modalExit}>
              X
            </button>
            <h1>{bank.bank_name}</h1>
            <div className="modal_images">
              <ul className="modal_card_media">
                {bank.bank_media.map((media, i) => (
                  <li key={i}>
                    <img src={media} alt={bank.bank_name} />
                  </li>
                ))}
              </ul>
            </div>

            <ol className="modal_card">
              <li className="modal_list">{`Bank email: ${bank.bank_email}`}</li>
              <li className="modal_list">{`Bank inform: ${bank.bank_inform} `}</li>
              <li className="modal_list">{`Bank kridit summa: ${bank.bank_kridit_sum} sum`}</li>
              <li className="modal_list">{`Bank kridit time: ${bank.bank_kridit_time} year`}</li>
              <li className="modal_list">{`Bank date: ${new Date(
                bank.bank_date
              )} `}</li>
            </ol>
          </div>
        </div>
      )}
    </>
  );
};

export default Bank;
