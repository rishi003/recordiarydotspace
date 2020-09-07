import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import FontAwesome from "react-fontawesome";

export default function Project({
  siteTitle,
  description,
  frontmatter,
  socialLinks,
  markdownBody,
}) {
  if (!frontmatter) return <></>;

  return (
    <Layout
      pageTitle={siteTitle}
      description={description}
      socialLinks={socialLinks}
    >
      <div className="md:flex items-center justify-center">
        <article className="md:w-3/5">
          <h1 className="text-6xl mt-4 mx-2 leading-tight">
            {frontmatter.title}
          </h1>
          <hr className="my-5"></hr>
          <div className="text-lg flex flex-wrap">
            {frontmatter.technologies.map((technology) => (
              <p className="mt-4 px-4 py-2 ml-3 bg-teal-600 rounded-full text-white">
                {technology}
              </p>
            ))}
          </div>
          <hr className="my-5"></hr>
          <Link href={frontmatter.github}>
            <a className="flex items-center justify-center bg-black text-white rounded-md py-2 font-bold tracking-wide mx-10 xl:mx-64">
              <FontAwesome
                name="fab fa-github"
                className="pr-2"
                size="3x"
              ></FontAwesome>
              <p className="text-xl font-sans tracking-wide">Github</p>
            </a>
          </Link>
          <div className="markdown-body">
            <ReactMarkdown source={markdownBody} />
          </div>
          <hr className="my-5"></hr>
          <Link href="/#project-list">
            <a>
              <div className="text-xl bg-teal-500 text-white py-2 px-4 m-5 inline-flex items-center border rounded-full">
                <FontAwesome
                  name="fas fa-arrow-left"
                  className="pr-2 animation-target"
                ></FontAwesome>
                Back to projects
              </div>
            </a>
          </Link>
        </article>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { projectname } = ctx.params;

  const content = await import(`../../projects/${projectname}.md`);
  const config = await import(`../../siteconfig.json`);
  const data = matter(content.default);

  return {
    props: {
      siteTitle: config.title,
      description: config.description,
      socialLinks: {
        facebook: config.facebook,
        instagram: config.instagram,
        twitter: config.twitter,
        linkedin: config.linkedin,
      },
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, value) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      return slug;
    });
    return data;
  })(require.context("../../projects", true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/project/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
