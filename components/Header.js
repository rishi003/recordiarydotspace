import Link from "next/link";
import $ from "jquery";

export default function Header() {
  return (
    <>
      <header className="header p-2 bg-red-300">
        <div className="container mx-auto flex justify-between items-center ">
          <Link href="/">
            <a>
              <p className="logo-text text-5xl w-5 leading-tight">
                Rishabh Awatani
              </p>
              {/* <div className="flex-shrink-0">
                <img
                  src="/finalLogo.png"
                  className=" w-20 sm:w-20 md:w-24  lg:w-24 xl:w-32"
                ></img>
              </div> */}
            </a>
          </Link>
          <nav className="inline-block">
            <button
              className="hamburger hamburger--emphatic inline-block w-auto sm:inline-block md:inline-block lg:hidden xl:hidden"
              type="button"
              aria-label="Menu"
              aria-controls="navigation"
              aria-expanded="true/false"
              onClick={() => {
                $(".hamburger").toggleClass("is-active");
                $("#navigation-mob").toggleClass("hidden");
              }}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <ul
              id="navigation"
              className="flex-row items-center text-2xl hidden sm:hidden md:hidden lg:flex xl:flex "
            >
              <li className="w-10/12">
                <Link href="/">
                  <a className="w-full">
                    <div className="cursor-pointer w-full text-center px-10 py-3 border-red-300 transition duration-500 ease-in-out transform hover:bg-white hover:text-black hover:-translate-x-2 hover:-translate-y-2 border-solid border-b-4 border-r-4 hover:border-red-700">
                      Home
                    </div>
                  </a>
                </Link>
              </li>
              <li className="w-10/12">
                <Link href="/#post-list">
                  <a className="w-full">
                    <div className="cursor-pointer w-full text-center px-10 py-3 border-red-300 transition duration-500 ease-in-out transform hover:bg-white hover:text-black hover:-translate-x-2 hover:-translate-y-2 border-solid border-b-4 border-r-4 hover:border-red-700">
                      Blog
                    </div>
                  </a>
                </Link>
              </li>
              <li className="w-10/12">
                <Link href="/#project-list">
                  <a className="w-full">
                    <div className="cursor-pointer w-full text-center px-10 py-3 border-red-300 transition duration-500 ease-in-out transform hover:bg-white hover:text-black hover:-translate-x-2 hover:-translate-y-2 border-solid border-b-4 border-r-4 hover:border-red-700">
                      Projects
                    </div>
                  </a>
                </Link>
              </li>
              <li className="w-10/12">
                <Link href="/#contact">
                  <a className="w-full">
                    <div className="cursor-pointer w-full text-center px-10 py-3 border-red-300 transition duration-500 ease-in-out transform hover:bg-white hover:text-black hover:-translate-x-2 hover:-translate-y-2 border-solid border-b-4 border-r-4 hover:border-red-700">
                      Contact
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <ul
          id="navigation-mob"
          className="animate__animated animate__fadeInDown flex flex-col items-center mt-5 text-2xl hidden"
        >
          <li className="w-10/12">
            <Link href="/">
              <a className="w-full">
                <div
                  onClick={() => {
                    $("#navigation-mob").toggleClass("hidden");
                    $(".hamburger").toggleClass("is-active");
                  }}
                  className="cursor-pointer w-full text-center px-10 py-3 border-red-300 transition duration-500 ease-in-out transform hover:bg-white hover:text-black hover:-translate-x-2 hover:-translate-y-2 border-solid border-b-4 border-r-4 hover:border-red-700"
                >
                  Home
                </div>
              </a>
            </Link>
          </li>
          <li className="w-10/12">
            <Link href="/#post-list">
              <a className="w-full">
                <div
                  onClick={() => {
                    $("#navigation-mob").toggleClass("hidden");
                    $(".hamburger").toggleClass("is-active");
                  }}
                  className="cursor-pointer w-full text-center px-10 py-3 border-red-300 transition duration-500 ease-in-out transform hover:bg-white hover:text-black hover:-translate-x-2 hover:-translate-y-2 border-solid border-b-4 border-r-4 hover:border-red-700"
                >
                  Blog
                </div>
              </a>
            </Link>
          </li>
          <li className="w-10/12">
            <Link href="/#project-list">
              <a className="w-full">
                <div
                  onClick={() => {
                    $("#navigation-mob").toggleClass("hidden");
                    $(".hamburger").toggleClass("is-active");
                  }}
                  className="cursor-pointer w-full text-center px-10 py-3 border-red-300 transition duration-500 ease-in-out transform hover:bg-white hover:text-black hover:-translate-x-2 hover:-translate-y-2 border-solid border-b-4 border-r-4 hover:border-red-700"
                >
                  Projects
                </div>
              </a>
            </Link>
          </li>
          <li className="w-10/12">
            <Link href="/#contact">
              <a className="w-full">
                <div
                  onClick={() => {
                    $("#navigation-mob").toggleClass("hidden");
                    $(".hamburger").toggleClass("is-active");
                  }}
                  className="cursor-pointer w-full text-center px-10 py-3 border-red-300 transition duration-500 ease-in-out transform hover:bg-white hover:text-black hover:-translate-x-2 hover:-translate-y-2 border-solid border-b-4 border-r-4 hover:border-red-700"
                >
                  Contact
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}
