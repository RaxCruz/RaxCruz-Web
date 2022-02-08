import React from "react";
import {
  projectLogoA,
  projectLogoB,
  projectLogoC,
  projectLogoD,
} from "../image";
function Project() {
  return (
    <section class="py-12 sm:py-16 bg-white">
      <div class="max-w-7xl px-10 mx-auto sm:text-center">
        <p class="text-blue-500 font-medium uppercase">Latest awesome design</p>
        <h2 class="font-bold text-3xl sm:text-4xl lg:text-5xl mt-3">
          Check out Rax's independent Projects.
        </h2>
        <p class="mt-4 text-gray-500 text-base sm:text-xl lg:text-2xl">
          Apply various style to make web vivid.
          <br class="lg:hidden hidden sm:block" /> Click them below 👇
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-12 sm:my-16">
          <a
            href="https://raxcruz.github.io/Lol-Eng-Game/#/Aatrox/skills"
            data-mdb-ripple="true"
            data-mdb-ripple-color="#0277bd"
            class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100 cursor-pointer hover:border-2 hover:border-blue-600"
          >
            <div class="w-1/2">
              <img src={projectLogoA} alt="" />
            </div>
            <p class="font-bold mt-4">TransKing</p>
            <p class="mt-2 text-sm text-gray-500">LOL Translation Game</p>
          </a>
          <a
            href="https://raxcruz.github.io/Vaccine-Map/"
            data-mdb-ripple="true"
            data-mdb-ripple-color="#0277bd"
            class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100 cursor-pointer hover:border-2 hover:border-blue-600"
          >
            <div class="w-1/2">
              <img src={projectLogoB} alt="" />
            </div>
            <p class="font-bold mt-4">VaccineMap</p>
            <p class="mt-2 text-sm text-gray-500">A Vaccine Searching Map</p>
          </a>
          <a
            href="https://raxcruz.github.io/Game-Calculation/"
            data-mdb-ripple="true"
            data-mdb-ripple-color="#0277bd"
            class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100 cursor-pointer hover:border-2 hover:border-blue-600"
          >
            <div class="w-1/2">
              <img src={projectLogoC} alt="" />
            </div>
            <p class="font-bold mt-4">MathMind</p>
            <p class="mt-2 text-sm text-gray-500">A Traditional Math Game</p>
          </a>
          <a
            href="https://rax-cruz-gallery-gx0phvxht-raxcruz.vercel.app/"
            data-mdb-ripple="true"
            data-mdb-ripple-color="#0277bd"
            class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100 cursor-pointer hover:border-2 hover:border-blue-600"
          >
            <div class="w-1/2">
              <img src={projectLogoD} alt="" />
            </div>
            <p class="font-bold mt-4">R'Gallery</p>
            <p class="mt-2 text-sm text-gray-500">Rax's Tiny Gallery</p>
          </a>
        </div>
        <a
          href="https://github.com/RaxCruz"
          class="px-8 py-4 sm:w-auto w-full text-center text-base font-medium inline-block rounded text-white hover:bg-blue-600 bg-blue-500"
        >
          More on Github
        </a>
      </div>
    </section>
  );
}

export default Project;
