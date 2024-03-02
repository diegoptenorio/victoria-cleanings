import logo from "../../assets/img/logo.svg";

export const Logo = ({ size = 'small' }) => (
  <img src={logo} className={`logo ${size}-logo`} alt="logo" draggable={false} />
);
