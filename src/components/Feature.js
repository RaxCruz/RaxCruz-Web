import React from "react";
import { featureLogoA, featureLogob } from "../image";
function Feature() {
  return (
    <section class="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
      <h1 class="text-4xl text-center font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
        
        <span class="block xl:inline ">
        教學內容
        </span>
        <span class="block xl:inline  font-mono text-sm text-gray-400">
         <span class="text-pink-300">C</span>urriculum <span class="text-pink-300">C</span>ontent
        </span>
      </h1>
      <br></br>
      <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
        <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
          <img
            src={featureLogoA}
            alt=""
            class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20"
          />
        </div>

        <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
          <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
            程式設計
          </h2>
          <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
            使用 C++ 語言為基礎，手把手實戰競賽題目，帶領學生從<span class="text-pink-300">程式入門</span>到<span class="text-pink-400">程式大師</span>
          </p>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>
               函數與遞迴
            </li>
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>
              數學概念與方法
            </li>
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>
              圖論模型與演算法
            </li>
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>
              進階幾何
            </li>
          </ul>
        </div>
      </div>
      <div class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
        <div class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
          <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
            網頁設計
          </h2>
          <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
            告訴你目前業界最流行的方法，如何從基礎網站到結合後端與資料庫的中大型網站，手把手實作網頁架構設計，<span class="text-pink-400">從無到完美</span>
          </p>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>
              網頁基礎排版
            </li>
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>
              RWD,動態網頁設計
            </li>
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>
              進階單頁式應用(SPA)
            </li>
          </ul>
        </div>

        <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
          <img
            src={featureLogob}
            alt=""
            class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
          />
        </div>
      </div>
    </section>
  );
}

export default Feature;
