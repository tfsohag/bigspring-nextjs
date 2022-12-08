import React from "react";
import Button from "./components/Button";
import Cta from "./sections/Cta";

function Pricing({ data }) {
  const {
    frontmatter: { title, plans, cta },
  } = data;
  return (
    <>
      <section className="section pb-0">
        <div className="container">
          <h1 className="text-center font-normal">{title}</h1>
          <div className="section row -mt-10 justify-center md:mt-0">
            {plans.map((plan, index) => (
              <div
                className={`col-12 md:col-4 ${
                  !plan.recommended ? "lg:px-0" : "col--recommended"
                }`}
                key={plan.title + index}
              >
                <div
                  className={`card text-center ${
                    plan.recommended ? "card--recommended" : ""
                  }`}
                >
                  <h4>{plan.title}</h4>
                  <div className="mt-5">
                    <span className="text-5xl text-text">{plan.price}</span>
                    <span>/ {plan.type}</span>
                  </div>
                  <h5 className="mt-2 font-normal text-[#777]">
                    {plan.subtitle}
                  </h5>
                  <ul className="mt-5">
                    {plan.features.map((feature, index) => (
                      <li className="mb-[10px] leading-5" key={index}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`btn mt-5 ${
                      plan.button.btn_type === "solid"
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                    href={plan.button.href}
                    rel={plan.button.rel}
                  >
                    {plan.button.label}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta cta={cta} />
    </>
  );
}

export default Pricing;
