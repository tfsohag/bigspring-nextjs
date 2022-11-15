import Image from "next/image";
import React from "react";

function Banner({ banner }) {
  return (
    <section className="section pb-0">
      <div className="mb-8 text-center">
        <h2 className="mx-auto max-w-[400px] font-bold leading-[44px]">
          {banner.title}
        </h2>
      </div>
      <Image src={banner.image} alt="" width={1920} height={296} />
    </section>
  );
}

export default Banner;
