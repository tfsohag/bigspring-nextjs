import Image from "next/image";
import Link from "next/link";
import React from "react";

function Cta({ cta }) {
  return (
    <section className="pt-[50px] pb-[100px]">
      <div className="container">
        <div className="mx-auto  grid max-w-[830px] items-center gap-8 md:grid-cols-2">
          <Image
            className="w-full"
            src={cta?.image}
            alt=""
            width={325}
            height={206}
          />
          <div>
            <h2 className="font-bold leading-[40px]">{cta?.title}</h2>
            <p className="mt-6">{cta?.desc}</p>
            <Link className="btn btn-primary mt-4 rounded-3xl" href="#">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
