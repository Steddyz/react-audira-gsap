import Button from "./Button";

const Header = () => {
  return (
    <header className="w-full">
      <nav>
        <a href="#">
          <img src="./images/logo.png" alt="logo" className="logo" />
        </a>
        <Button />
      </nav>
    </header>
  );
};

export default Header;
