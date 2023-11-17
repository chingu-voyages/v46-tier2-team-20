import './Header.css';

function Header() {
  return (
    <div className="sm:px-25 header text-center h-screen place-items-center relative pt-8">
      <img src="/logo.svg" alt="Logo" className="logo absolute" />
      <h1 className="font-semibold">What will you make today?</h1>
      <h2>
        FlavrFindr is an app that helps you find and create
        delicious dishes base on your ingredients!
      </h2>
    </div>
  );
}

export default Header;
