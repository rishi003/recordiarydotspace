export default function Introduction() {
  return (
    <>
      <div
        className="introduction--part bg-red-300 object-cover tracking-wide relative"
        id="introduction-pane"
      >
        <div className="absolute inset-0 flex items-center justify-start text-4xl text-white mx-10 sm:text-6.5xl md:text-6.5xl lg:text-6.5xl xl:text-7xl">
          <h2>
            Think.
            <br></br>
            Write.
            <br></br>
            Create.
          </h2>
          <img
            src="https://i.ibb.co/8640shW/resume-pic.png"
            className="w-2/6  rounded-full m-auto mr-0 self-start shadow-3xl md:shadow-4xl md:mr-auto"
          ></img>
        </div>
        <img
          src="keyboard.png"
          alt="Introduction abstract image of a keyboard"
        ></img>
      </div>
    </>
  );
}
