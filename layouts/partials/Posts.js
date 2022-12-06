import config from "@config/config.json";
import Button from "@layouts/components/Button";
import Image from "next/image";
import Link from "next/link";

const Posts = ({ posts }) => {
  const { summary_length, blog_folder } = config.settings;
  return (
    <div className="section row pb-0">
      <div className="col-12 pb-12 lg:pb-24">
        <div className="row items-center">
          <div className="col-12 md:col-6">
            {posts[0].frontmatter.image && (
              <Image
                className="rounded-lg"
                src={posts[0].frontmatter.image}
                alt={posts[0].frontmatter.title}
                width={540}
                height={227}
                priority={true}
              />
            )}
          </div>
          <div className="col-12 md:col-6">
            <h2 className="h3 mb-2">
              <Link
                href={`/${blog_folder}/${posts[0].slug}`}
                className="block hover:text-primary"
              >
                {posts[0].frontmatter.title}
              </Link>
            </h2>
            <p className="text-text">{posts[0].frontmatter.desc}</p>
            {/* <p className="text-text">
              {posts[0].content.slice(0, Number(summary_length))}...
            </p> */}
            <Button
              className="btn btn-primary mt-4"
              href={posts[0].frontmatter.button_solid.href}
              rel={posts[0].frontmatter.button_solid.rel}
            >
              {posts[0].frontmatter.button_solid.label}
            </Button>
          </div>
        </div>
      </div>
      {posts.slice(1).map((post, i) => (
        <div key={`key-${i}`} className="col-12 mb-8 sm:col-6 lg:col-4">
          {post.frontmatter.image && (
            <Image
              className="rounded-lg"
              src={post.frontmatter.image}
              alt={post.frontmatter.title}
              width={i === 0 ? "925" : "445"}
              height={i === 0 ? "475" : "230"}
            />
          )}
          <h2 className="h3 mb-2">
            <Link
              href={`/${blog_folder}/${post.slug}`}
              className="block hover:text-primary"
            >
              {post.frontmatter.title}
            </Link>
          </h2>
          <p className="text-text">
            {post.content.slice(0, Number(summary_length))}...
          </p>
          <Button
            className="btn btn-primary mt-4"
            href={post.frontmatter.button_solid.href}
            rel={post.frontmatter.button_solid.rel}
          >
            {post.frontmatter.button_solid.label}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
