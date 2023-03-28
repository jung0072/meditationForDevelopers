import "./Home.css";
import illustrationMobile from "../../../assets/images/illustration-mobile.png";

export default function Home() {
  let audio = new Audio();
  audio.src =
    "../../../assets/audios/body_loving_kindness_meditation_lynn_rossy.mp3";

  return (
    <div className="home">
      <svg
        className="greenOvals"
        width="393"
        height="852"
        viewBox="0 0 393 852"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="191.254"
          cy="320.588"
          rx="191.254"
          ry="320.588"
          transform="matrix(0.718074 0.695967 -0.58004 0.814588 290.908 -15)"
          fill="#449756"
        />
        <ellipse
          cx="191.254"
          cy="307.208"
          rx="191.254"
          ry="307.208"
          transform="matrix(0.718074 0.695967 -0.58004 0.814588 512.331 184.473)"
          fill="#449756"
        />
      </svg>
      <img
        className="illustration-mobile"
        src={illustrationMobile}
        alt="a person struggling with coding"
      ></img>
      <div className="bannerText-container">
        <p className="bannerText">
          Stuck with errors more than an hour? Then you deserve a pause for
          minutes. Relax your brain. It will help you more than you expected.
        </p>
      </div>
      <div className="playButton-container">
        <svg
          className="playButton"
          onClick={() => {
            let audio = new Audio();
            audio.src =
              "../../../assets/audios/body_loving_kindness_meditation_lynn_rossy.mp3";

            audio.play();
          }}
          width="139"
          height="139"
          viewBox="0 0 139 139"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_3_1040)">
            <circle
              cx="69.5"
              cy="69.5"
              r="68.5"
              fill="url(#paint0_radial_3_1040)"
            />
          </g>
          <g filter="url(#filter1_f_3_1040)">
            <circle cx="69.5" cy="69.5" r="61.3915" fill="#449756" />
          </g>
          <path
            d="M109.59 68.8406C111.59 69.9953 111.59 72.8821 109.59 74.0368L48.7971 109.135C46.7971 110.29 44.2971 108.847 44.2971 106.537L44.2971 36.3402C44.2971 34.0308 46.7971 32.5874 48.7971 33.7421L109.59 68.8406Z"
            fill="#FFB630"
            fillOpacity="0.8"
          />
          <defs>
            <filter
              id="filter0_f_3_1040"
              x="0"
              y="0"
              width="139"
              height="139"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="0.5"
                result="effect1_foregroundBlur_3_1040"
              />
            </filter>
            <filter
              id="filter1_f_3_1040"
              x="7.10852"
              y="7.10852"
              width="124.783"
              height="124.783"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="0.5"
                result="effect1_foregroundBlur_3_1040"
              />
            </filter>
            <radialGradient
              id="paint0_radial_3_1040"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(134.769 22.9717) rotate(140.342) scale(144.797 112.631)"
            >
              <stop stopColor="#E3BF00" />
              <stop offset="1" stopColor="#E3BF00" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
