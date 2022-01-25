import img from "../../assests/dp.svg";
import "./Profile.css";
import { connect } from "react-redux";
import Error from '../error/error'

interface props {
  currentUser: {
    email: string;
    name: string;
    address: string;
  }[];
}

function Profile({ currentUser }: props) {
  return (
    <div>
    {currentUser[0]?
    <div className="profile_wrap">
      <img src={img} />
      <div>
        <h1>{currentUser[0].name}</h1>
        <h2>{currentUser[0].email}</h2>
        <h2>{currentUser[0].address}</h2>
      </div>
    </div> :<Error />
    }
    </div>
  );
}

const mapStateToProps = (state: {
  currentUser: {
    email: string;
    name: string;
    address: string;
  }[];
}) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(Profile);
