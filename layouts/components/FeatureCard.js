import Image from "next/image";
import React from "react";

function FeatureCard({ title, icon, children }) {
  return (
    <div className="feature-card rounded-md bg-white p-8 text-center dark:bg-gray-800">
      {icon && (
        <Image className="mx-auto" src={icon} width={45} height={45} alt="" />
      )}
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-3">{children}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
