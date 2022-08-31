import React from "react";
import { hot } from "react-hot-loader";
import webSafelogo from "@assets/images/profile-coffee.jpg";
import logo from "@assets/images/profile-coffee.webp";
import { ConnectListItem } from "./ConnectListItem";

import "./Application.scss";

type Props = {
  title: string;
  version: string;
};

console.log("Tesst: " + ConnectListItem + " End test;")

const Application: React.FC<Props> = props => {
  return (
    <React.Fragment>
      <main>
        <div className="main-heading">
          <h1>
            {props.title}
          </h1>
        </div>
        <p className="main-logo">
          <img
            src={logo}
            alt="Zach Schneider"
            srcSet={webSafelogo}
            width={500}
            height={500}
          />
        </p>
                
        <h2>Stay in Touch</h2>
        <div className="main-connect">
          <ul>
            <li>
              <a href="https://github.com/zkm">
                <span className="screen-reader-text">GitHub</span>

                <svg
                  className="svg-icon"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M12,2C6.477,2,2,6.477,2,12c0,4.419,2.865,8.166,6.839,9.489c0.5,0.09,0.682-0.218,0.682-0.484 c0-0.236-0.009-0.866-0.014-1.699c-2.782,0.602-3.369-1.34-3.369-1.34c-0.455-1.157-1.11-1.465-1.11-1.465 c-0.909-0.62,0.069-0.608,0.069-0.608c1.004,0.071,1.532,1.03,1.532,1.03c0.891,1.529,2.341,1.089,2.91,0.833 c0.091-0.647,0.349-1.086,0.635-1.337c-2.22-0.251-4.555-1.111-4.555-4.943c0-1.091,0.39-1.984,1.03-2.682 C6.546,8.54,6.202,7.524,6.746,6.148c0,0,0.84-0.269,2.75,1.025C10.295,6.95,11.15,6.84,12,6.836 c0.85,0.004,1.705,0.114,2.504,0.336c1.909-1.294,2.748-1.025,2.748-1.025c0.546,1.376,0.202,2.394,0.1,2.646 c0.64,0.699,1.026,1.591,1.026,2.682c0,3.841-2.337,4.687-4.565,4.935c0.359,0.307,0.679,0.917,0.679,1.852 c0,1.335-0.012,2.415-0.012,2.741c0,0.269,0.18,0.579,0.688,0.481C19.138,20.161,22,16.416,22,12C22,6.477,17.523,2,12,2z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/zschneider/">
                <span className="screen-reader-text">LinkedIn</span>
                <svg
                  className="svg-icon"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/zachschneider/">
                <span className="screen-reader-text">Instagram</span>
                <svg
                  className="svg-icon"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/zkm">
                <span className="screen-reader-text">Twitter</span>
                <svg
                  className="svg-icon"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://stackoverflow.com/users/461733/zach-schneider">
                <span className="screen-reader-text">StackOverflow</span>
                <svg
                  className="svg-icon"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18">
                  <path d="M6.70846497,10.3082552 C6.43780491,9.94641406 6.5117218,9.43367048 6.87356298,9.16301045 C7.23540415,8.89235035 7.74814771,8.96626726 8.01880776,9.32810842 C8.5875786,10.0884893 9.45856383,10.5643487 10.4057058,10.6321812 C11.3528479,10.7000136 12.2827563,10.3531306 12.9541853,9.68145807 L15.3987642,7.23705399 C16.6390369,5.9529049 16.6212992,3.91168563 15.3588977,2.6492841 C14.0964962,1.38688258 12.0552769,1.36914494 10.77958,2.60113525 L9.37230725,4.00022615 C9.05185726,4.31881314 8.53381538,4.31730281 8.21522839,3.99685275 C7.89664141,3.67640269 7.89815174,3.15836082 8.21860184,2.83977385 L9.63432671,1.43240056 C11.5605503,-0.42800847 14.6223793,-0.401402004 16.5159816,1.49220028 C18.4095838,3.38580256 18.4361903,6.44763148 16.5658147,8.38399647 L14.1113741,10.838437 C13.1043877,11.8457885 11.7095252,12.366113 10.2888121,12.2643643 C8.86809903,12.1626156 7.56162126,11.4488264 6.70846497,10.3082552 Z M11.291535,7.6917448 C11.5621951,8.05358597 11.4882782,8.56632952 11.126437,8.83698955 C10.7645959,9.10764965 10.2518523,9.03373274 9.98119227,8.67189158 C9.4124214,7.91151075 8.54143617,7.43565129 7.59429414,7.36781884 C6.6471521,7.29998638 5.71724372,7.64686937 5.04581464,8.31854193 L2.60123581,10.762946 C1.36096312,12.0470951 1.37870076,14.0883144 2.64110228,15.3507159 C3.90350381,16.6131174 5.94472309,16.630855 7.21873082,15.400549 L8.61782171,14.0014581 C8.93734159,13.6819382 9.45538568,13.6819382 9.77490556,14.0014581 C10.0944254,14.320978 10.0944254,14.839022 9.77490556,15.1585419 L8.36567329,16.5675994 C6.43944966,18.4280085 3.37762074,18.401402 1.48401846,16.5077998 C-0.409583822,14.6141975 -0.436190288,11.5523685 1.43418536,9.61600353 L3.88862594,7.16156298 C4.89561225,6.15421151 6.29047483,5.63388702 7.71118789,5.7356357 C9.13190097,5.83738438 10.4383788,6.55117356 11.291535,7.6917448 Z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <footer>
          <sup>&copy;</sup> 2005 &ndash; {new Date().getFullYear()}
        </footer>
      </main>
    </React.Fragment>
  );
};

export default hot(module)(Application);
