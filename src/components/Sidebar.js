import React from "react";

const Sidebar = () => {
  return (
    <>
      <div class="column-3 sticky">
        <h4>Components</h4>
        <ul class="sidebar-menu">
          <li>
            <a href="#alerts">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentcolor"
                viewBox="0 0 459.334 459.334"
                width="20px"
                height="20px"
              >
                <path d="M175.216 404.514c-.001.12-.009.239-.009.359 0 30.078 24.383 54.461 54.461 54.461s54.461-24.383 54.461-54.461c0-.12-.008-.239-.009-.359H175.216zM403.549 336.438l-49.015-72.002v-89.83c0-60.581-43.144-111.079-100.381-122.459V24.485C254.152 10.963 243.19 0 229.667 0s-24.485 10.963-24.485 24.485v27.663c-57.237 11.381-100.381 61.879-100.381 122.459v89.83l-49.015 72.002a24.76 24.76 0 0 0 20.468 38.693H383.08a24.761 24.761 0 0 0 20.469-38.694z" />
              </svg>
              <span class="component-name">Alerts</span>
            </a>
          </li>
          <li>
            <a href="#avatars">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 350 350"
                fill="currentcolor"
                width="20px"
                height="20px"
              >
                <path d="M175 171.173c38.914 0 70.463-38.318 70.463-85.586C245.463 38.318 235.105 0 175 0s-70.465 38.318-70.465 85.587c0 47.268 31.549 85.586 70.465 85.586zM41.909 301.853c-.012-2.882-.024-.812 0 0zM308.085 304.104c.038-.789.013-5.474 0 0z" />
                <path d="M307.935 298.397c-1.305-82.342-12.059-105.805-94.352-120.657 0 0-11.584 14.761-38.584 14.761s-38.586-14.761-38.586-14.761C55.018 192.43 43.61 215.545 42.11 295.722c-.123 6.547-.18 6.891-.202 6.131.005 1.424.011 4.058.011 8.651 0 0 19.592 39.496 133.08 39.496 113.486 0 133.08-39.496 133.08-39.496 0-2.951.002-5.003.005-6.399-.022.47-.066-.441-.149-5.708z" />
              </svg>
              <span class="component-name">Avatars</span>
            </a>
          </li>
          <li>
            <a href="#buttons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 44 44"
                fill="currentcolor"
                width="20px"
                height="20px"
              >
                <path d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm12 23c0 .6-.4 1-1 1h-8.5c-.3 0-.5.2-.5.5V33c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-8.5c0-.3-.2-.5-.5-.5H11c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h8.5c.3 0 .5-.2.5-.5V11c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v8.5c0 .3.2.5.5.5H33c.6 0 1 .4 1 1v2z" />
              </svg>
              <span class="component-name">Buttons</span>
            </a>
          </li>
          <li>
            <a href="#cards">
              <svg
                viewBox="-57 0 420 420"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentcolor"
                width="20px"
                height="20px"
              >
                <path d="M187.7 172.398c0 19.165-15.536 34.704-34.7 34.704s-34.7-15.54-34.7-34.704S133.837 137.7 153 137.7s34.7 15.535 34.7 34.7zm0 0M153 260.102a61.05 61.05 0 0 0-44.102 18.398c-10.296 10.5-16.5 24.5-18 39.8h124.204c-1.5-15.402-7.704-29.3-18-39.8A61.05 61.05 0 0 0 153 260.102zm0 0" />
                <path d="M273 0H33C14.781.02.02 14.781 0 33v354c.02 18.219 14.781 32.98 33 33h240c18.219-.02 32.98-14.781 33-33V33c-.02-18.219-14.781-32.98-33-33zM111.3 33.102h80a7.001 7.001 0 0 1 0 14h-80a7.001 7.001 0 0 1 0-14zm41.7 90.597c26.867.028 48.629 21.832 48.602 48.7-.028 26.87-21.832 48.628-48.704 48.601-26.867-.027-48.625-21.832-48.597-48.7.086-26.843 21.855-48.57 48.699-48.6zm69.398 208.602H83.602a6.955 6.955 0 0 1-7-7c0-21.801 7.898-41.903 22.296-56.602a76.058 76.058 0 0 1 108.204 0c14.398 14.7 22.296 34.801 22.296 56.602a6.955 6.955 0 0 1-7 7zm0 0" />
              </svg>
              <span class="component-name">Cards</span>
            </a>
          </li>
          <li>
            <a href="#checkboxes">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
                fill="currentcolor"
                width="20px"
                height="20px"
              >
                <path d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm14.495 17.329l-16 18a1.997 1.997 0 0 1-2.745.233l-10-8a2 2 0 0 1 2.499-3.124l8.517 6.813L37.505 14.67a2.001 2.001 0 0 1 2.99 2.659z" />
              </svg>
              <span class="component-name">Checkboxes</span>
            </a>
          </li>
          <li>
            <a href="#grid">
              <svg
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentcolor"
                width="20px"
                height="20px"
              >
                <path d="M50 8H14c-3 0-6 3-6 6v36c0 3 3 6 6 6h36c3 0 6-3 6-6V14c0-3-3-6-6-6zm2 6v16H34V12h16l2 2zm-38-2h16v18H12V14l2-2zm-2 38V34h18v18H14l-2-2zm38 2H34V34h18v16l-2 2z" />
              </svg>
              <span class="component-name">Grid</span>
            </a>
          </li>
          <li>
            <a href="#labels">
              <svg
                version="1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 496"
                fill="currentcolor"
                width="20px"
                height="20px"
              >
                <path d="M495 191L472 73c-4-23-26-45-49-49L305 1l-11-1c-21 0-45 9-59 23L13 245c-9 8-13 19-13 31 0 11 4 22 13 30l177 177c8 9 19 13 30 13 12 0 23-4 31-13l222-222c17-17 26-48 22-70zm-61-87a29 29 0 0 1-41 0 29 29 0 1 1 41 0z" />
              </svg>
              <span class="component-name">Labels</span>
            </a>
          </li>
          <>
            <li>
              <a href="#inputs">
                <svg
                  height="20px"
                  viewBox="0 0 512 512"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentcolor"
                >
                  <path d="M4 508c5 4 11 5 17 3l137-59-98-98L1 491c-2 6-1 12 3 17zm0 0M77 329L327 79l106 106-250 250zm0 0M423 4c-6-5-16-5-21 0l-53 53 106 106 53-53c5-5 5-15 0-21zm0 0" />
                </svg>
                <span class="component-name">Inputs</span>
              </a>
            </li>
            <li>
              <a href="#radios">
                <svg
                  height="20px"
                  viewBox="0 0 512 512"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentcolor"
                >
                  <path d="M512 256a256 256 0 1 1-512 0 256 256 0 0 1 512 0zm0 0" />
                  <path d="M448 256a192 192 0 1 1-384 0 192 192 0 0 1 384 0zm0 0" />
                  <path d="M416 256a160 160 0 1 1-320 0 160 160 0 0 1 320 0zm0 0" />
                  <path d="M240 240h32v32h-32zm0 0" fill="#fff" />
                </svg>
                <span class="component-name">Radios</span>
              </a>
            </li>
            <li>
              <a href="#tab-bar">
                <svg
                  version="1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 58 58"
                  fill="currentcolor"
                  width="20px"
                  height="20px"
                >
                  <path d="M0 0v58h58V0H0zm49 47H9v-4h40v4zm0-16H9v-4h40v4zm0-16H9v-4h40v4z" />
                </svg>
                <span class="component-name">Tab bar</span>
              </a>
            </li>
            <li>
              <a href="#textareas">
                <svg
                  height="22"
                  fill="currentcolor"
                  viewBox="0 -90 512 512"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M452 0H60C27 0 0 27 0 60v212c0 33 27 60 60 60h392c33 0 60-27 60-60V60c0-33-27-60-60-60zm20 272c0 11-9 20-20 20H60c-11 0-20-9-20-20V60c0-11 9-20 20-20h392c11 0 20 9 20 20zM177 121v131h-40V121H80V81h152v40zm40 91h40v40h-40zm80 0h40v40h-40zm80 0h40v40h-40zm0 0" />
                </svg>
                <span class="component-name">Textareas</span>
              </a>
            </li>
            <li>
              <a href="#toggles">
                <svg
                  height="20px"
                  viewBox="0 0 512 512"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentcolor"
                >
                  <path d="M266 512h-20c-33 0-60-27-60-60v-10c0-3-2-5-4-6h-1c-2-1-5-1-7 1l-7 7a60 60 0 0 1-85 0l-14-14a60 60 0 0 1 0-85l7-7c2-2 2-5 1-7v-1c-1-2-3-4-6-4H60c-33 0-60-27-60-60v-20c0-33 27-60 60-60h10c3 0 5-2 6-4v-1c1-2 1-5-1-7l-7-7a60 60 0 0 1 0-85l14-14a60 60 0 0 1 85 0l7 7c2 2 5 2 7 1h1c2-1 4-3 4-6V60c0-33 27-60 60-60h20c33 0 60 27 60 60v10c0 3 2 5 4 6h1c2 1 5 1 7-1l7-7a60 60 0 0 1 85 0l14 14a60 60 0 0 1 0 85l-7 7c-2 2-2 5-1 7v1c1 2 3 4 6 4h10c33 0 60 27 60 60v20c0 33-27 60-60 60h-10c-3 0-5 2-6 4v1c-1 2-1 5 1 7a20 20 0 1 1-28 28 47 47 0 0 1-10-51c7-18 24-29 43-29h10c11 0 20-9 20-20v-20c0-11-9-20-20-20h-10c-19 0-36-11-43-29-8-18-4-38 10-51l7-7a20 20 0 0 0 0-29l-14-14a20 20 0 0 0-29 0l-7 7a47 47 0 0 1-51 10c-18-7-29-24-29-43V60c0-11-9-20-20-20h-20c-11 0-20 9-20 20v10c0 19-11 36-29 43-18 8-38 4-51-10l-7-7a20 20 0 0 0-29 0l-14 14a20 20 0 0 0 0 29l7 7c14 13 18 33 10 51-7 18-24 29-43 29H60c-11 0-20 9-20 20v20c0 11 9 20 20 20h10c19 0 36 11 43 29 8 18 4 38-10 51l-7 7a20 20 0 0 0 0 29l14 14a20 20 0 0 0 29 0l7-7c13-14 33-18 51-10 18 7 29 24 29 43v10c0 11 9 20 20 20h20c11 0 20-9 20-20v-10c0-19 11-36 29-43 18-8 38-4 51 10l7 7a20 20 0 0 0 29 0 20 20 0 0 1 28 28 60 60 0 0 1-85 0l-7-7c-2-2-5-2-7-1h-1c-2 1-4 3-4 6v10c0 33-27 60-60 60zm-30-166a52 52 0 0 0 37-20l83-117a20 20 0 0 0-32-24l-83 117a11 11 0 0 1-16 1h-1l-53-49a20 20 0 1 0-26 30l52 48a52 52 0 0 0 39 14zm0 0" />
                </svg>
                <span class="component-name">Toggles</span>
              </a>
            </li>
            <li>
              <a href="#process">
                <svg
                  height="20px"
                  viewBox="0 0 512 512"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentcolor"
                >
                  <path d="M437 75a254 254 0 0 0-362 0 254 254 0 0 0 0 362 254 254 0 0 0 362 0 254 254 0 0 0 0-362zM256 472a216 216 0 1 1 0-432 216 216 0 0 1 0 432zM236 80h40v177a20 20 0 1 1-40 0zM135 238l-53-17 13-38 52 17zm12 74l-52 17-13-38 53-17zm22-210l32 44-32 24-32-45zm260 119l-53 17-12-38 52-17zm-55-96l-32 45-32-24 32-44zM236 377h40v55h-40zm-67-35l32 24-32 44-32-23zm0 0" />
                </svg>
                <span class="component-name">Process</span>
              </a>
            </li>
            <li>
              <a href="#progress">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  version="1"
                  viewBox="0 0 512 512"
                  width="20px"
                  fill="currentcolor"
                >
                  <path d="M77 402H55c-30 0-55 24-55 55v40c0 8 7 15 15 15h65l-3-15zm0 0M184 321h-22c-30 0-55 25-55 56v120c0 8 7 15 15 15h65l-3-15zm0 0M509 151L402 6a15 15 0 0 0-24 0L271 151a15 15 0 0 0 12 24h38v322c0 8 7 15 15 15h107c9 0 15-7 15-15V175h39a15 15 0 0 0 12-24zm0 0" />
                  <path d="M291 241h-22c-30 0-55 25-55 55v201c0 8 7 15 15 15h65l-3-15zm0 0" />
                </svg>
                <span class="component-name">Progress</span>
              </a>
            </li>
            <li>
              <a href="#segments">
                <svg
                  version="1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentcolor"
                  width="20px"
                  height="20px"
                >
                  <path d="M467 0H45C20 0 0 20 0 45v422c0 25 20 45 45 45h422c25 0 45-20 45-45V45c0-25-20-45-45-45zm-60 127L127 407a15 15 0 1 1-22-22l280-280a15 15 0 1 1 22 22z" />
                </svg>
                <span class="component-name">Segments</span>
              </a>
            </li>
          </>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
