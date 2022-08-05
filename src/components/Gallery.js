import React from "react";
import {
  galleryLogoA,
  galleryLogoB,
  galleryLogoC,
  galleryLogoD,
  galleryLogoE,
  galleryLogoF,
  galleryLogoG,
} from "../image";
function Gallery() {
  return (
    <section class="bg-white">
      <div class="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
        <div class="flex flex-col items-center sm:px-5 md:flex-row">
          <div class="w-full md:w-1/2">
            <a href="#_" class="block cursor-auto" >
              <img
                class="object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96"
                src={galleryLogoA}
              />
            </a>
          </div>
          <div class="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
            <div class="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
              <div class="bg-pink-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                <svg
                  class="w-3.5 h-3.5 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span>My pet</span>
              </div>
              <h1 class="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                <span href="#_">
                  A mini <span class="text-red-400">Gallery</span> . All Rax's
                  Design .
                </span>
              </h1>
              <p class="pt-2 text-xs font-medium">
                <span class="mr-1 underline">Rax Cruz</span> ·
                <span class="mx-1">November 12, 2021</span>
              </p>
            </div>
          </div>
        </div>

        <div class="flex grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
          <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
            <a href="#_" class="block cursor-auto">
              <img
                class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
                src={galleryLogoB}
                alt=""
              />
            </a>
            <div class="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
              <span>NFT</span>
            </div>
            <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
              <span href="#_">First 10,000 NFTs</span>
            </h2>
            <p class="text-sm text-gray-500">
              I created my first-ever Nfts with my self-portrait .
            </p>
            <p class="pt-2 text-xs font-medium">
              <span class="mr-1 underline">Rax Cruz</span> ·
              <span class="mx-1">January 20, 2022</span>
            </p>
          </div>

          <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
            <a href="#_" class="block cursor-auto">
              <img
                class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
                src={galleryLogoC}
                alt=""
              />
            </a>
            <div class="bg-pink-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
              <span>illustration</span>
            </div>
            <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
              Mystirous Circle
            </h2>
            <p class="text-sm text-gray-500">
              The first painting I painted on my Ipad . At that time, what I
              wanted to paint was a strong painting .
            </p>
            <p class="pt-2 text-xs font-medium">
              <span class="mr-1 underline">Rax Cruz</span> ·
              <span class="mx-1">September 28, 2021</span>
            </p>
          </div>

          <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
            <a href="#_" class="block cursor-auto">
              <img
                class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
                src={galleryLogoD}
                alt=""
              />
            </a>
            <div class="bg-pink-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
              <span>illustration</span>
            </div>
            <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
              First Sight
            </h2>
            <p class="text-sm text-gray-500">
              When I go out to sketch with my Ipad, and I saw its extraordinary
              . A squashed paper cup .
            </p>
            <p class="pt-2 text-xs font-medium">
              <span class="mr-1 underline">Rax Cruz</span> ·
              <span class="mx-1">October 7, 2021</span>
            </p>
          </div>

          <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
            <a href="#_" class="block cursor-auto">
              <img
                class="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56"
                src={galleryLogoE}
                alt=""
              />
            </a>
            <div class="bg-blue-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
              <span>UI Design</span>
            </div>
            <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
              Collection Component
            </h2>
            <p class="text-sm text-gray-500">
              Inspired by the look of the exhibition, so I designed lots of
              frames of various sizes .
            </p>
            <p class="pt-2 text-xs font-medium">
              <span class="mr-1 underline">Rax Cruz</span> ·
              <span class="mx-1">December 22, 2021</span>
            </p>
          </div>

          <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
            <a href="#_" class="block cursor-auto">
              <img
                class="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56"
                src={galleryLogoF}
                alt=""
              />
            </a>
            <div class="bg-blue-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
              <span>UI Design</span>
            </div>
            <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
              Hero Component
            </h2>
            <p class="text-sm text-gray-500">
              Using blur effect to be a major element in this design . To be
              Layering .
            </p>
            <p class="pt-2 text-xs font-medium">
              <span class="mr-1 underline">Rax Cruz</span> ·
              <span class="mx-1">December 24, 2021</span>
            </p>
          </div>

          <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
            <a href="#_" class="block cursor-auto ">
              <img
                class="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56"
                src={galleryLogoG}
                alt=""
              />
            </a>
            <div class="bg-red-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
              <span>Banner</span>
            </div>
            <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
              Github Banner
            </h2>
            <p class="text-sm text-gray-500">
              Using simple line and text to become an extraordinary banner .
            </p>
            <p class="pt-2 text-xs font-medium">
              <span class="mr-1 underline">Rax Cruz</span> ·
              <span class="mx-1">December 12, 2021</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
