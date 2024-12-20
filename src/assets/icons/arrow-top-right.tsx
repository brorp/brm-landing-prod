import React from "react";

function ArrowTopRightIcon({
  className = "",
  fill = "#59DD71",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      fill="none"
      viewBox="0 0 16 17"
      className={className}
    >
      <path
        stroke={fill}
        strokeWidth="3"
        d="M3.503 13.804l9-9.5M2.497 3.803h10.607V14.41"
      ></path>
    </svg>
  );
}

export default ArrowTopRightIcon;
