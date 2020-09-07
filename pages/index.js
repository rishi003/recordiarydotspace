import Layout from "../components/Layout";
import PostList from "../components/PostList";
import Introduction from "../components/Introduction";
import ProjectList from "../components/ProjectList";
import matter from "gray-matter";

const Index = ({
  posts,
  projects,
  title,
  description,
  socialLinks,
  ...props
}) => {
  return (
    <Layout
      pageTitle={title}
      description={description}
      socialLinks={socialLinks}
    >
      <main>
        <Introduction />
        <PostList posts={posts} />
        {/* <hr className="my-12 mx-20"></hr> */}
        <ProjectList projects={projects} />
      </main>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../posts", true, /\.md$/));

  const projects = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../projects", true, /\.md$/));

  return {
    props: {
      posts,
      projects,
      title: configData.default.title,
      description: configData.default.description,
      socialLinks: {
        facebook: configData.default.facebook,
        instagram: configData.default.instagram,
        twitter: configData.default.twitter,
        linkedin: configData.default.linkedin,
      },
    },
  };
}
