import "./Home.css";
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Company from "../../components/Company/Company";
import Complex from "../../components/Complex/Complex";
import House from "../../components/House/House";
import Bank from "../../components/Bank/Bank";

// Path
import port from "../../assets/config/config";

const Home = () => {
  const [companyId, setCompanyId] = useState("");
  const [complexId, setComplexId] = useState("");
  const [houseId, setHouseId] = useState(null);

  const [sum, setSum] = useState(9000000000);

  const [complexes, setComplexes] = useState([]);
  const [houses, setHouses] = useState([]);
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    fetch(`${port.url}/api/complex/${companyId}`)
      .then((json) => json.json())
      .then((data) => {
        if (data.complexes) {
          setComplexes(data.complexes);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [companyId]);

  useEffect(() => {
    fetch(`${port.url}/api/house/${complexId}`)
      .then((json) => json.json())
      .then((data) => {
        if (data.houses) {
          setHouses(data.houses);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [complexId]);

  useEffect(() => {
    fetch(`${port.url}/api/bank?sum=${sum}`)
      .then((json) => json.json())
      .then((data) => {
        if (data.banks) {
          setBanks(data.banks);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sum]);
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Company setCompanyId={setCompanyId} />
        </Route>
        <Route path="/complex">
          <Complex setComplexId={setComplexId} complexes={complexes} />
        </Route>
        <Route path="/house">
          <House setHouseId={setHouseId} setSum={setSum} houses={houses} />
        </Route>
        <Route path="/bank">
          <Bank banks={banks} houseId={houseId} />
        </Route>
      </Switch>

      <Footer />
    </>
  );
};

export default Home;
