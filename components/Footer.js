import FontAwesome from "react-fontawesome";

export default function Footer({ title, description, socialLinks, ...props }) {
  return (
    <>
      <footer
        className="flex flex-col grid-cols-4 bg-red-300 p-2 md:grid"
        id="contact"
      >
        <div className=" col-span-3 flex flex-col m-3">
          <h1 className="text-5xl">{title}</h1>
          <p className="p-3 max-w-3xl bg-white rounded-lg">{description}</p>
        </div>
        <div className="social-links col-span-1 flex flex-row w-3/5 mx-auto justify-between bg-transparent rounded-lg  font-bold md:flex-col md:my-auto md:bg-white md:px-2 md:py-4">
          <a href="#">
            <div className="flex flow-row items-center">
              <FontAwesome
                name="fab fa-facebook-square"
                size="2x"
                className="p-2"
              ></FontAwesome>
              <p className="hidden md:inline">Facebook</p>
            </div>
          </a>
          <a href="#">
            <div className="flex flow-row items-center">
              <FontAwesome
                name="fab fa-instagram"
                size="2x"
                className="p-2"
              ></FontAwesome>
              <p className="hidden md:inline">Instagram</p>
            </div>
          </a>
          <a href="#">
            <div className="flex flow-row items-center">
              <FontAwesome
                name="fab fa-twitter-square"
                size="2x"
                className="p-2"
              ></FontAwesome>
              <p className="hidden md:inline">Twitter</p>
            </div>
          </a>
          <a href="#">
            <div className="flex flow-row items-center">
              <FontAwesome
                name="fab fa-linkedin"
                size="2x"
                className="p-2"
              ></FontAwesome>
              <p className="hidden md:inline">LinkedIn</p>
            </div>
          </a>
        </div>
      </footer>
    </>
  );
}
