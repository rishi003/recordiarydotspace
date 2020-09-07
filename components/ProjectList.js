import Link from "next/link";
import $ from "jquery";
import useEffect from "react";
import FontAwesome from "react-fontawesome";

export default function ProjectList({ projects }) {
  if (projects === "undefined") return null;

  return (
    <div
      className="post-list bg-gray-300 border-t-2 border-solid  border-gray-700"
      id="project-list"
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="p-8 text-5xl text-gray-900 sm:text-5xl">Projects</h2>
        <hr className="w-3/6"></hr>
      </div>
      {!projects && <div>No Projects!</div>}
      <div className="grid grid-cols-1 gap-8 p-5 md:grid-cols-2 lg:grid-cols-3">
        {projects &&
          projects.map((project) => {
            return (
              <div
                key={project.slug}
                className="postItem rounded-lg p-3 shadow-2xl bg-white border-solid border-transparent border-2 transition duration-500 ease-in-out hover:border-gray-400"
              >
                <Link href={{ pathname: `/project/${project.slug}` }}>
                  <a>
                    <div className="">
                      <img
                        src={project.frontmatter.titleImage}
                        className=" w-full h-64 object-cover pb-2"
                        alt={project.frontmatter.titleImageName}
                      ></img>
                      <h3 className="text-3xl leading-tight pt-2 pb-2 border-b-2 border-solid border-gray-400">
                        {project.frontmatter.title}
                      </h3>
                      <p className="p-2">{project.frontmatter.description}</p>
                    </div>
                  </a>
                </Link>
                <Link href={project.frontmatter.github}>
                  <a className="flex items-center justify-center bg-black text-white rounded-md py-2 font-bold tracking-wide">
                    <FontAwesome
                      name="fab fa-github"
                      className="pr-2"
                      size="3x"
                    ></FontAwesome>
                    <p className="text-xl">Github</p>
                  </a>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
