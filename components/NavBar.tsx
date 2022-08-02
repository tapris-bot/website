import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="fixed backdrop-blur-sm bg-black/30 w-full p-4 z-10">
        <ul>
          <li className="inline m-4">
            <Link href="/#home" className="m-4">
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
