import Button from "@layouts/components/Button";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import React from "react";

function Hero({ content: hero }) {
  return (
    <section className="section pb-[50px]">
      <div className="container">
        <div className="row text-center">
          <div className="mx-auto lg:col-10">
            <h1 className="font-primary font-bold">{hero.title}</h1>
            <p className="mt-4">{markdownify(hero.content)}</p>
            <Button
              className="btn btn-primary mt-4"
              href={hero.button_solid.href}
              rel={hero.button_solid.rel}
            >
              {hero.button_solid.label}
            </Button>
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
  );
}

export default Hero;
