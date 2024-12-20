const Gradient = ({ className }: { className: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="124"
    height="125"
    fill="none"
    viewBox="0 0 124 125"
  >
    <circle
      cx="61.167"
      cy="62.5"
      r="52.5"
      fill="url(#paint0_radial_2957_1139)"
    ></circle>
    <path
      stroke="#37B14D"
      strokeWidth="3"
      d="M61.167 2c33.413 0 60.5 27.087 60.5 60.5S94.58 123 61.167 123c-28.95 0-53.152-20.335-59.1-47.5"
    ></path>
    <defs>
      <radialGradient
        id="paint0_radial_2957_1139"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(90 -.667 61.833)scale(147.5)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#59DD71" stopOpacity="0"></stop>
        <stop offset="1" stopColor="#59DD71"></stop>
      </radialGradient>
    </defs>
  </svg>
);

export default Gradient;
