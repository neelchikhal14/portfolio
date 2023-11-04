import React, { ReactNode } from "react";

import Link from "next/link";

type NetworkButtonT = {
  href: string;
  icon: ReactNode;
  className?: string;
};
const NetworkButton = ({ href, icon, className }: NetworkButtonT) => {
  return (
    <button className={className}>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {icon}
      </Link>
    </button>
  );
};

export default NetworkButton;
