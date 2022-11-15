import Image from "next/image";
import React from "react";

function FeatureCard({ data }) {
  const { title, icon, desc } = data;
  return (
    <div className="feature-card rounded-xl bg-white p-5 pb-8 text-center dark:bg-gray-800">
      {icon && (
        <Image className="mx-auto" src={icon} width={45} height={45} alt="" />
      )}
      <div>
        <h5>{title}</h5>
        <p className="mt-3">{desc}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
