import Image from "next/image";
import React from "react";

function Banner({ banner }) {
  return (
    <section className="pt-[80px] pb-10">
      <div className="mb-10 text-center">
        <h2 className="mx-auto max-w-[400px] font-bold leading-[44px]">
          {banner.title}
        </h2>
      </div>
      <Image src={banner.image} alt="" width={1920} height={296} />
    </section>
  );
}

export default Banner;
