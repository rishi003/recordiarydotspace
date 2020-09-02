import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import FontAwesome from "react-fontawesome";

export default function BlogPost({
  siteTitle,
  description,
  frontmatter,
  markdownBody,
}) {
  if (!frontmatter) return <></>;

  return (
    <Layout pageTitle={siteTitle} description={description}>
      <div className="inline-flex justify-center mx-1">
        <article className="md:w-3/5">
          <h1 className="text-6xl mt-4 leading-tight">{frontmatter.title}</h1>
          <hr className="my-5"></hr>
          <p className="mx-4 text-right text-lg">
            <em>{frontmatter.author}</em>
          </p>
          <hr className="my-5"></hr>
          <div className="markdown-body">
            <ReactMarkdown source={markdownBody} />
          </div>
          <hr className="my-5"></hr>
          <Link href="/">
            <a>
              <div className="text-xl bg-teal-500 text-white py-2 px-4 my-5 inline-flex items-center border rounded-full">
                <FontAwesome
                  name="fas fa-arrow-left"
                  className="pr-2 animation-target"
                ></FontAwesome>
                Back to posts
              </div>
            </a>
          </Link>
        </article>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params;

  const content = await import(`../../posts/${postname}.md`);
  const config = await import(`../../siteconfig.json`);
  const data = matter(content.default);

  return {
    props: {
      siteTitle: config.title,
      description: config.description,
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
  })(require.context("../../posts", true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/post/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
