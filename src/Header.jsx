import logo from "./assets/tasker-logo.svg";
const Header = () => {
  return (
    <header>
      <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          <a href="/">
            <img
              className="h-[60px] w-[100px] rounded-xl"
              src={logo}
              alt="Lws"
            />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
