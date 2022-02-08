import React from "react";
import {
  logoA,
  logoA2,
  logoB,
  logoB2,
  logoC,
  logoC2,
  logoD,
  logoD2,
  logoE,
  logoE2,
  logoF,
  logoF2,
  logoG,
  logoG2,
  logoH,
  logoH2,
  logoI,
  logoI2,
  logoJ,
  logoJ2,
} from "../image";
function Hero() {
  return (
    <div>
      <section class="px-2 py-32 bg-white md:px-0">
        <div class="container items-center max-w-8xl px-8 mx-auto xl:px-5">
          <div class="flex flex-wrap items-center sm:-mx-3">
            <div class="w-full md:w-1/2 md:px-3">
              <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span class="block">Hello There,</span>
                  <span class="block text-indigo-600 xl:inline">
                    I am Rax Cruz
                  </span>
                </h1>
                <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  If you are doing your best, you will not have to worry about
                  failure.
                </p>
                <div class="relative flex flex-col sm:flex-row sm:space-x-4">
                  <a
                    href="https://github.com/RaxCruz"
                    class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                  >
                    Rax's GitHub
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div
              id="carouselExampleControls"
              class="carousel slide relative md:w-1/2"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner relative w-full overflow-hidden">
                <div class="carousel-item active relative float-left w-full">
                  <div class="flex">
                    <div class="w-1/2 p-3">
                      <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                        <img src={logoA} alt="" />
                      </div>
                    </div>
                    <div class="w-1/2 p-3">
                      <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                        <img src={logoA2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item relative float-left w-full">
                  <div class="flex">
                    <div class="w-1/2 p-3">
                      <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                        <img src={logoB} alt="" />
                      </div>
                    </div>
                    <div class="w-1/2 p-3">
                      <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                        <img src={logoB2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item relative float-left w-full">
                  <div class="flex">
                    <div class="w-1/2 p-3">
                      <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                        <img src={logoC} alt="" />
                      </div>
                    </div>
                    <div class="w-1/2 p-3">
                      <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                        <img src={logoC2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item relative float-left w-full">
                  <div class="flex">
                    <div class="w-1/2 p-3">
                      <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                        <img src={logoD} alt="" />
                      </div>
                    </div>
                    <div class="w-1/2 p-3">
                      <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                        <img src={logoD2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item relative float-left w-full">
                  <div class="flex">
                    <div class="w-1/2 p-3">
                      <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                        <img src={logoE} alt="" />
                      </div>
                    </div>
                    <div class="w-1/2 p-3">
                      <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                        <img src={logoE2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item relative float-left w-full">
                  <div class="flex">
                    <div class="w-1/2 p-3">
                      <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                        <img src={logoF} alt="" />
                      </div>
                    </div>
                    <div class="w-1/2 p-3">
                      <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                        <img src={logoF2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item relative float-left w-full">
                  <div class="flex">
                    <div class="w-1/2 p-3">
                      <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                        <img src={logoG} alt="" />
                      </div>
                    </div>
                    <div class="w-1/2 p-3">
                      <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                        <img src={logoG2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item relative float-left w-full">
                  <div class="flex">
                    <div class="w-1/2 p-3">
                      <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                        <img src={logoH} alt="" />
                      </div>
                    </div>
                    <div class="w-1/2 p-3">
                      <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                        <img src={logoH2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item relative float-left w-full">
                  <div class="flex">
                    <div class="w-1/2 p-3">
                      <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                        <img src={logoI} alt="" />
                      </div>
                    </div>
                    <div class="w-1/2 p-3">
                      <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                        <img src={logoI2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item relative float-left w-full">
                  <div class="flex">
                    <div class="w-1/2 p-3">
                      <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                        <img src={logoJ} alt="" />
                      </div>
                    </div>
                    <div class="w-1/2 p-3">
                      <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                        <img src={logoJ2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon inline-block bg-no-repeat"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon inline-block bg-no-repeat"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
