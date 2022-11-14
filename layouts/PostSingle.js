import { dateFormat } from "@lib/utils/dateFormat";
import { humanize, markdownify, slugify } from "@lib/utils/textConverter";
import { shortcodes } from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Link from "next/link";
import Base from "./Baseof";
import Share from "./components/Share";

const PostSingle = ({ frontmatter, content, mdxContent, authors, slug }) => {
  let { description, title, date, image, categories, tags } = frontmatter;
  description = description ? description : content.slice(0, 120);

  return (
    <Base title={title} description={description}>
      <section className="section">
        <div className="container">
          <article className="text-center">
            {markdownify(title, "h1", "h2 mb-6 text-left")}
            {image && (
              <Image
                src={image}
                height="500"
                width="1000"
                alt={title}
                layout="responsive"
                className="rounded-lg"
              />
            )}
            <div className="content mb-16 text-left">
              <MDXRemote {...mdxContent} components={shortcodes} />
            </div>
          </article>
        </div>
      </section>
    </Base>
  );
};

export default PostSingle;
