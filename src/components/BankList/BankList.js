import "./BankList.css";

const BankList = ({
  bank,
  houseId,
  setModal,
  setError,
  setBankId,
  setModalInfo,
  bankInfo,
}) => {
  return (
    <li className="card_list">
      <ol className="card_media">
        {bank.bank_media.length &&
          bank.bank_media.map((media, i) => (
            <li className="card_media_list" key={i}>
              <img className="media_list" src={media} alt={bank.bank_name} />
            </li>
          ))}
      </ol>

      <h4 className="list_title">{bank.bank_name}</h4>

      <ol className="bank_card">
        <li>kridit: {bank.bank_kridit_sum} sum</li>
        <li>vohti: {bank.bank_kridit_time} yil</li>
      </ol>

      <div className="btns">
        <button
          className="btn"
          onClick={() => {
            if (houseId) {
              setModal(true);
              setBankId(bank.bank_id);
            } else {
              setError(true);
            }
          }}
        >
          tanlash
        </button>
        <button
          className="btn btn--more"
          onClick={() => {
            setModalInfo(true);
            bankInfo(bank.bank_id);
          }}
        >
          ko'proq
        </button>
      </div>
    </li>
  );
};

export default BankList;
