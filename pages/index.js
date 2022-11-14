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

const Home = ({ frontmatter }) => {
  const { hero, feature, services, banner, cta } = frontmatter;
  const { title } = config.site;
  return (
    <Base title={title}>
      {/* hero */}
      <section className="pt-[100px] pb-16">
        <div className="container">
          <div className="mx-auto max-w-[950px] text-center">
            <div className="mb-16">
              <h1 className="font-primary font-bold">{hero.title}</h1>
              <p className="mt-4">{hero.content}</p>
              <Link
                className="btn btn-outline-primary mt-5 rounded-3xl"
                href="3"
              >
                Get started for Free
              </Link>
            </div>
            <Image src={hero.image} width={750} height={390} alt="Banner" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-blue-light dark:bg-gray-900">
        <div className="container">
          <div className="text-center">
            <h2 className="font-secondary text-[40px] font-bold leading-[40px]">
              {feature.title}
            </h2>
          </div>
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {feature.features.map((item, index) => (
              <FeatureCard key={index} title={item.title} icon={item.icon}>
                {item.desc}
              </FeatureCard>
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
