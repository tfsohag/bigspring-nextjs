import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Banner from "@layouts/sections/Banner";
import Service from "@layouts/sections/Service";
import { getListPage } from "../lib/contentParser";
import Cta from "@layouts/sections/Cta";
import Hero from "@layouts/sections/Hero";
import Features from "@layouts/sections/Features";

const Home = ({ frontmatter }) => {
  const { hero, feature, services, banner, cta } = frontmatter;
  const { title } = config.site;

  return (
    <Base title={title}>
      {/* hero */}
      <Hero content={hero} />

      {/* Features */}
      <Features content={feature} />

      {/* services */}
      {services.map((service, index) => {
        return <Service key={index} index={index} service={service} />;
      })}

      {/* Banner */}
      <Banner banner={banner} />

      {/* Cta */}
      <Cta cta={cta} />
    </Base>
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content");
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;
