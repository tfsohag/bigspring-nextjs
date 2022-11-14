import Image from "next/image";
import React from "react";

function FeatureCard({ title, icon, children }) {
  return (
    <div className="feature-card flex items-start space-x-4 rounded-md bg-white p-8 dark:bg-gray-800">
      {icon && <Image src={icon} width={30} height={30} alt="" />}
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-3">{children}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
