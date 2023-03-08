import "./Header.scss";
import picture from "./Assets/keeanu.jpg"
const Header = () => {
  return (
    <div className="keeanuandFriends">
      <h1 className="keeanuandFriends__title"> Keeanu and Friends </h1>
      <p className="keeanuandFriends__description">
        {" "}
        3 handsome and talented pursuit fellows and 1 is gay
      </p>
      <img
        className="keeanuandFriends__image"
        src={picture}
        alt="3 friends"
      />
    </div>
  );
};

export default Header;
