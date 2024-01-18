import React from "react";
import "./login.css";

function LoginBody() {
  return (
    <div className="max-w-sm mx-auto">
      <div className="flex flex-col sm:gap-5 gap-3">
        <button
          name="github"
          class="login-btn w-full h-14 text-lg font-medium flex justify-center items-center gap-3 rounded-md transition-colors
        hover:bg-black px-6 border border-gray-700 hover:text-white
        "
          type="button"
        >
          <div className="w-8 h-8 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
              aria-hidden="true"
              class="scalable-icon tw-inline !tw-fill-current tw-align-baseline tw-mr-2 tw-text-black dark:tw-text-white "
            >
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#1B1F23"
                fill-rule="evenodd"
                d="M8 1a7 7 0 0 0-2.21 13.64c.35.06.47-.15.47-.34v-1.19c-1.95.42-2.36-.94-2.36-.94-.32-.8-.78-1.02-.78-1.02-.64-.44.05-.43.05-.43.7.05 1.07.72 1.07.72.62 1.07 1.64.76 2.04.59.06-.46.24-.76.44-.94-1.55-.18-3.19-.78-3.19-3.46 0-.76.28-1.39.72-1.88-.07-.17-.3-.88.07-1.85 0 0 .59-.19 1.93.72a6.7 6.7 0 0 1 3.5 0c1.34-.9 1.93-.72 1.93-.72.38.97.14 1.68.07 1.85.44.5.72 1.12.72 1.88 0 2.69-1.64 3.28-3.2 3.45.25.22.47.65.47 1.3v1.92c0 .19.12.4.48.34A7 7 0 0 0 8 1"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          Log in with GitHub
        </button>

        <button
          name="github"
          class="login-btn w-full h-14 text-lg font-medium flex justify-center items-center gap-3 rounded-md transition-colors
        hover:bg-black px-6 border border-gray-700 hover:text-white
        "
          type="button"
        >
          <div className="w-8 h-8 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
              class="scalable-icon tw-inline !tw-fill-current tw-align-baseline tw-mr-2 "
            >
              <path
                fill="#E24329"
                d="m14.767 6.597-.02-.05-1.905-4.973a.5.5 0 0 0-.493-.313.5.5 0 0 0-.287.108.5.5 0 0 0-.169.256l-1.286 3.937h-5.21L4.11 1.625a.5.5 0 0 0-.948-.052l-1.91 4.97-.018.051a3.54 3.54 0 0 0 1.173 4.09l.007.005.017.012 2.903 2.174 1.436 1.087.875.66a.59.59 0 0 0 .711 0l.875-.66 1.436-1.087 2.92-2.187.008-.006a3.54 3.54 0 0 0 1.172-4.085"
              ></path>
              <path
                fill="#FC6D26"
                d="m14.767 6.597-.02-.05a6.4 6.4 0 0 0-2.562 1.151L8 10.863l2.666 2.015 2.92-2.187.007-.006a3.54 3.54 0 0 0 1.174-4.088"
              ></path>
              <path
                fill="#FCA326"
                d="m5.334 12.878 1.436 1.087.875.66a.59.59 0 0 0 .711 0l.875-.66 1.436-1.087S9.425 11.938 8 10.863c-1.425 1.075-2.666 2.015-2.666 2.015"
              ></path>
              <path
                fill="#FC6D26"
                d="M3.814 7.698a6.4 6.4 0 0 0-2.561-1.154l-.02.05a3.54 3.54 0 0 0 1.174 4.09l.007.005.017.012 2.903 2.174L8 10.86z"
              ></path>
            </svg>
          </div>
          Log in with GitLab
        </button>

        <button
          name="github"
          class="login-btn w-full h-14 text-lg font-medium flex justify-center items-center gap-3 rounded-md transition-colors
        hover:bg-black px-6 border border-gray-700 hover:text-white
        "
          type="button"
        >
          <div className="w-8 h-8 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 62.4 56.13"
              aria-hidden="true"
              class="scalable-icon tw-inline !tw-fill-current tw-align-baseline tw-mr-2 "
            >
              <defs>
                <linearGradient
                  id="icon-bitbucket-colored_svg__a"
                  x1="64.01"
                  x2="32.99"
                  y1="24.01"
                  y2="48.23"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.18" stop-color="#0052cc"></stop>
                  <stop offset="1" stop-color="#2684ff"></stop>
                </linearGradient>
              </defs>
              <g data-name="Layer 2">
                <path
                  fill="none"
                  d="M24.7 37.25h13.05l3.15-18.38H21.23z"
                ></path>
                <path
                  fill="#2684ff"
                  d="M2 0a2 2 0 0 0-2 2.32l8.49 51.54a2.72 2.72 0 0 0 2.66 2.27h40.73a2 2 0 0 0 2-1.68l8.49-52.12A2 2 0 0 0 60.4 0zm35.75 37.25h-13l-3.52-18.38H40.9z"
                ></path>
                <path
                  fill="url(#icon-bitbucket-colored_svg__a)"
                  d="M59.67 18.87H40.9l-3.15 18.38h-13L9.4 55.48a2.7 2.7 0 0 0 1.75.66h40.74a2 2 0 0 0 2-1.68z"
                ></path>
              </g>
            </svg>
          </div>
          Log in with Bitbucket
        </button>
      </div>

      <div className="sm:mt-7 mt-5 flex flex-col gap-3 justify-center">
        <button
          class="text-sm block font-light underline cursor-pointer"
          type="button"
        >
          Log in with email
        </button>

        <button
          class="text-sm block font-light underline cursor-pointer"
          type="button"
        >
          Log in with SSO
        </button>
      </div>

      <div className="sm:mt-16 mt-10">
        <p className="text-xs text-center font-light underline">
          No account yet? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default LoginBody;
