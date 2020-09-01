import Link from "next/link";

export default function PostList({ posts }) {
  if (posts === "undefined") return null;

  return (
    <div>
      {!posts && <div>No Posts!</div>}
      <div className="grid grid-cols-1 gap-8 p-5 md:grid-cols-2 lg:grid-cols-3">
        {posts &&
          posts.map((post) => {
            return (
              <div
                key={post.slug}
                className="postItem rounded-lg p-3 shadow-2xl border-solid border-transparent border-2 transition duration-500 ease-in-out hover:border-gray-400"
              >
                <Link href={{ pathname: `/post/${post.slug}` }}>
                  <a>
                    <div className="">
                      <img
                        src={post.frontmatter.titleImage}
                        className=" w-full h-64 object-cover pb-2"
                        alt={post.frontmatter.titleImageName}
                      ></img>
                      <h2 className="text-3xl leading-tight pt-2 pb-2 border-b-2 border-solid border-gray-400">
                        {post.frontmatter.title}
                      </h2>

                      <p className="p-2">{post.frontmatter.description}</p>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
