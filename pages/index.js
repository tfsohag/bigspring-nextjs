import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Banner from "@layouts/sections/Banner";
import FeatureCard from "@layouts/components/FeatureCard";
import Service from "@layouts/sections/Service";
import Server from "next/dist/server/base-server";
import Image from "next/image";
import Link from "next/link";
import { getListPage } from "../lib/contentParser";
import Cta from "@layouts/sections/Cta";
import { markdownify } from "@lib/utils/textConverter";

const Home = ({ frontmatter }) => {
  const { hero, feature, services, banner, cta } = frontmatter;
  const { title } = config.site;
  return (
    <Base title={title}>
      {/* hero */}
      <section className="section pb-[50px]">
        <div className="container">
          <div className="row text-center">
            <div className="mx-auto lg:col-10">
              <h1 className="font-primary font-bold">{hero.title}</h1>
              <p className="mt-4">{markdownify(hero.content)}</p>
              <Link className="btn btn-primary mt-5 rounded-3xl" href="3">
                Contact Us
              </Link>
              <Image
                className="mx-auto mt-12"
                src={hero.image}
                width={750}
                height={390}
                alt="Banner"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-blue-light">
        <div className="container">
          <div className="text-center">
            <h2>{markdownify(feature.title)}</h2>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {feature.features.map((item, index) => (
              <FeatureCard key={index} data={item} />
            ))}
          </div>
        </div>
      </section>

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
