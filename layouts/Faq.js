import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import React from "react";

function Faq({ data }) {
  const { frontmatter } = data;
  const { title, faqs } = frontmatter;
  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row  -mt-6">
          {faqs.map((faq, index) => (
            <div key={index} className="col-12 mt-6 md:col-6">
              <div className="p-12  shadow-light">
                <div className="relative">
                  <Image
                    className="absolute -left-8 top-1"
                    src="/svgs/checkmark-circle.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                  {markdownify(faq.title, "h4")}
                </div>
                {markdownify(faq.answer, "p", "faq-body mt-4")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
