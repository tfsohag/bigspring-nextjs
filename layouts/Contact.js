import { markdownify } from "@lib/utils/textConverter";
import Button from "./components/Button";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            <form className="contact-form">
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-textarea w-full rounded-md"
                  rows="7"
                  placeholder="Your message"
                />
              </div>
              <button className="btn btn-primary">Send Now</button>
            </form>
          </div>
          <div className="content col-12 md:col-6 lg:col-5">
            {markdownify(info.title, "h4")}
            {markdownify(info.description, "p", "mt-4")}
            <ul className="mt-5">
              {info.contacts.map((contact, index) => (
                <li key={index}>
                  {Object.entries(contact).map(([key, value]) =>
                    key !== "email" ? (
                      <strong className="capitalize" key={key + "_" + value}>
                        {key}: {value}
                      </strong>
                    ) : (
                      <strong className="capitalize" key={key + "_" + value}>
                        {key + ": "}
                        <Button
                          className="font-semibold"
                          href={value.href}
                          rel=""
                        >
                          {value.domain}
                        </Button>
                      </strong>
                    )
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
