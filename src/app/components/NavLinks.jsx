export default function NavLink({ children, href }) {
    return (
      <a href="#" className="nav-link text-gray-300 px-3 py-2 rounded-full bg-black active:bg-white active:text-black hover:bg-white hover:text-black">
        {children}
      </a>
    );
  }