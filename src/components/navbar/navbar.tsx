type NavItem = {
  name: string;
  href: string;
  isSignUp?: boolean;
};

type NavBarProps = {
  hasAccount: boolean;
  username: string;
};

const Navbar: React.FC<NavBarProps> = ({ hasAccount, username }) => {
  const guestNavItems: NavItem[] = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT US", href: "#about-us" },
    { name: "LOGIN", href: "#login" },
    { name: "SIGN UP", href: "#sign-up", isSignUp: true },
  ];

  const userNavItems: NavItem[] = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT US", href: "#about-us" },
    { name: `Hello, ${username}!`, href: "#account" },
  ];

  const NavItems = hasAccount ? userNavItems : guestNavItems;

  return (
    <nav className="w-full flex items-center justify-between bg-primaryColor p-6">
      <div className="flex items-center text-white mr-6">
        <span className="text-4xl font-medium tracking-tight">
          LEAGUE BUDDIES
        </span>
      </div>
      <div className="flex items-center">
        <ul className="text-lg flex justify-end">
          {NavItems.map((item, i) => (
            <li key={i} className={i < NavItems.length - 1 ? 'mr-4' : ""}>
              <a href={item.href}
                className={item.isSignUp ? "bg-whiteColor hover:bg-footer text-primaryColor py-2 px-4 rounded" : ""}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


  /* <li className="mr-4">
            <a href="#home">HOME</a>
          </li>
          <li className="mr-4">
            <a href="#about-us">ABOUT US</a>
          </li>
          <li className="mr-4">
            <a href="#login">LOGIN</a>
          </li>
          <li>
            <a
              href="#sign-up"
              className="bg-whiteColor hover:bg-footer text-primaryColor py-2 px-4 rounded"
            >
              SIGN UP
            </a>
          </li> */

