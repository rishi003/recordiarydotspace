import Layout from "../components/Layout";
const About = ({ title, description, socialLinks, ...props }) => {
  return (
    <>
      <Layout
        pageTitle={`${title} | About`}
        description={description}
        socialLinks={socialLinks}
      >
        <h1 className="title">Welcome to my blog!</h1>
        <p className="description">{description}</p>
        <p>
          I am very excited with the ease of development process of my blog.
        </p>
      </Layout>
    </>
  );
};

export default About;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
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
