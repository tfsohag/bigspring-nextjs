import config from "@config/config.json";
import Base from "@layouts/Baseof";
import BrandCarousel from "@layouts/components/BrandSlider";
import ServiceCard from "@layouts/components/ServiceCard";
import VideoPlayer from "@layouts/components/VideoPlayer";
import { sortByDate } from "@lib/utils/sortFunctions";
import Image from "next/image";
import Link from "next/link";
const Home = ({ posts, authors }) => {
  const { title } = config.site;

  return (
    <Base title={title}>
      <section className="section">
        <div className="container">
          <div className="mx-auto mb-16 max-w-[950px] text-center">
            <div className="mb-16">
              <h1 className="font-secondary">
                Let us solve your critical website development challenges
              </h1>
              <p className="mt-4">
                Create a best strategic tool, share it with your team and ensure
                it’s on track with intuitive dashboards. Simple enough with the
                sophistication and flexibility to meet the needs of large
                enterprises
              </p>
              <Link
                className="btn btn-outline-primary mt-5 rounded-3xl"
                href="3"
              >
                Get started for Free
              </Link>
            </div>
            <div>
              <Image
                src="/svgs/banner-art.svg"
                width={750}
                height={390}
                alt="Banner"
              />
              <h6 className="mt-16 font-secondary text-xl font-semibold">
                The best customer experiences are built with Bigspring
              </h6>
            </div>
          </div>
          <BrandCarousel />
        </div>
      </section>

      {/* Services */}
      <section className="section bg-blue-50 dark:bg-gray-900">
        <div className="container">
          <div className="grid  gap-8 lg:grid-cols-3">
            <div className="text-center lg:text-left">
              <h2 className="font-secondary text-[40px] font-bold leading-[40px]">
                The ultimate platform for creating, sharing, and executing.
              </h2>
              <p className="mt-4">
                We are helping thousands of organizations run their business
                strategies and achieve their ambitious results! We make big
                plans happen.
              </p>
              <Link
                className="btn btn-outline-primary mt-4 rounded-3xl"
                href="#"
              >
                Try For Free
              </Link>
            </div>
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-2">
              <ServiceCard title="Cloud Support" icon="/svgs/cloud.svg">
                Fugiat similique nobis porro cumque stinctio iusto quaerat
                corrupti.
              </ServiceCard>
              <ServiceCard title="Object Oriented" icon="/svgs/cloud.svg">
                Fugiat similique nobis porro cumque stinctio iusto quaerat
                corrupti.
              </ServiceCard>
              <ServiceCard title="24h Service" icon="/svgs/cloud.svg">
                Fugiat similique nobis porro cumque stinctio iusto quaerat
                corrupti.
              </ServiceCard>
              <ServiceCard title="Faster Response" icon="/svgs/cloud.svg">
                Fugiat similique nobis porro cumque stinctio iusto quaerat
                corrupti.
              </ServiceCard>
            </div>
          </div>
        </div>
      </section>

      {/* Video player */}
      <section className="section">
        <div className="container text-center">
          <div>
            <h2>Built exclusively for you</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              egestas Werat viverra id et aliquet. vulputate egestas
              sollicitudin.
            </p>
          </div>
          <div className="mt-[60px] flex justify-center">
            <VideoPlayer />
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Home;
