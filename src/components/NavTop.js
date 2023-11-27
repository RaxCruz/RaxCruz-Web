import React from "react";
import {
 company
} from "../image";
function NavTop() {
  return (
    <section class="relative w-full px-8 text-gray-700 bg-white body-font">
      <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-8xl">
      <div class="flex gap-3 h-auto overflow-hidden rounded-md">
                        <img class="w-12" src={company} alt="" />
                        <span class="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none">
          Rax Cruz
        </span>
                      </div>
       
      </div>
    </section>
  );
}

export default NavTop;
