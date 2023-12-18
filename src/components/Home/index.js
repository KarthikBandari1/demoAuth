import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";

import "./index.css";

const Home = (props) => {
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Redirect to="/login" />;
  }

  const onLogOut = () => {
    const { history } = props;
    Cookies.remove("jwt_token");
    history.replace("/");
  };

  return (
    <>
      <div className="home-cont">
        <h1>Home</h1>
        <button onClick={onLogOut}>Logout</button>
      </div>
    </>
  );
};

export default Home;
