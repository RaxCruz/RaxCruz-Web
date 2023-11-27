import React from "react";

function LoadingScreen() {
  return (
    <div class="flex flex-col justify-center items-center bg-indigo-600 h-screen w-screen">
      <p class="font-extrabold font-sans text-white text-xl">
        正在前往 <span class="text-yellow-300 tracking-wide ">ㄡr</span>{" "}
        ...
      </p>

      <div class="w-[250px] h-[6px] bg-indigo-600 mt-[22px] relative overflow-hidden">
        <div class="before:content-[''] before:absolute before:w-[125px] before:h-[8px] before:top-0 before:left-0 before:bg-white before:animate-loading relative before:-translate-x-9"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
