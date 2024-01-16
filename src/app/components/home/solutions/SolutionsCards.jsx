import React from "react";
import "./solutions.css";
import Image from "next/image";

function SolutionsCards() {
  return (
    <div className="cards xl:mt-10 tab:mt-8 mt-6 flex gap-4 flex-wrap">
      <div className="card text-left lg:w-[calc(33.3333%-10.6666px)] sm:w-[calc(50%-8px)] w-full">
        <h3 class="sm:text-lg text-base font-medium uppercase">
          Netlify Connect
        </h3>
        <p class="sm:text-2xl text-xl font-bold tracking-tight leading-tight uppercase">
          Unify all content
        </p>
        <p class="sm:text-lg text-sm tracking-tight sm:pt-7 pt-4 text-justify">
          Netlify Connect is a data unification layer that gives web teams the
          freedom to create world-class websites, online stores, and
          applications with data from any existing or new content source.
        </p>
        <ul className="lg:mt-8 mt-4 flex flex-col gap-2">
          <li className="sm:text-lg text-sm flex items-center gap-3">
            <div className="icon w-9 h-9 flex justify-center items-center">
              <Image
                className=" w-full h-full object-contain"
                width={36}
                height={36}
                src="/icon/icon-1.png"
              />
            </div>
            <span>Unify your content sources</span>
          </li>

          <li className="sm:text-lg text-sm flex items-center gap-3">
            <div className="icon w-9 h-9 flex justify-center items-center">
              <Image
                className=" w-full h-full object-contain"
                width={36}
                height={36}
                src="/icon/icon-2.png"
              />
            </div>
            <span>Modernize your web architecture </span>
          </li>

          <li className="sm:text-lg text-sm flex items-center gap-3">
            <div className="icon w-9 h-9 flex justify-center items-center">
              <Image
                className=" w-full h-full object-contain"
                width={36}
                height={36}
                src="/icon/icon-3.png"
              />
            </div>
            <span>Unlock your web performance </span>
          </li>
        </ul>
        <a
          href="/platform/connect/"
          aria-label="Learn more about Netlify Connect"
          class=" flex items-center gap-1 lg:mt-9 mt-5"
        >
          <span>Learn more</span>
          <div class="icon">
            <Image
              src="/icon/arrowIcon.svg"
              width={24}
              height={12}
              alt="arrow"
            />
          </div>
        </a>

        <Image
          className=" mt-6"
          src="/product-card-connect.svg"
          width={406}
          height={150}
          alt="BG"
        />
      </div>

      <div className="card text-left lg:w-[calc(33.3333%-10.6666px)] sm:w-[calc(50%-8px)] w-full">
        <h3 class="sm:text-lg text-base font-medium uppercase">
          Netlify Connect
        </h3>
        <p class="sm:text-2xl text-xl font-bold tracking-tight leading-tight uppercase">
          Deploy faster
        </p>
        <p class="sm:text-lg text-sm tracking-tight sm:pt-7 pt-4 text-justify">
          Netlify Connect is a data unification layer that gives web teams the
          freedom to create world-class websites, online stores, and
          applications with data from any existing or new content source.
        </p>
        <ul className="lg:mt-8 mt-4 flex flex-col gap-2">
          <li className="sm:text-lg text-sm flex items-center gap-3">
            <div className="icon w-9 h-9 flex justify-center items-center">
              <Image
                className=" w-full h-full object-contain"
                width={36}
                height={36}
                src="/icon/icon-1.png"
              />
            </div>
            <span>Unify your content sources</span>
          </li>

          <li className="sm:text-lg text-sm flex items-center gap-3">
            <div className="icon w-9 h-9 flex justify-center items-center">
              <Image
                className=" w-full h-full object-contain"
                width={36}
                height={36}
                src="/icon/icon-2.png"
              />
            </div>
            <span>Modernize your web architecture </span>
          </li>

          <li className="sm:text-lg text-sm flex items-center gap-3">
            <div className="icon w-9 h-9 flex justify-center items-center">
              <Image
                className=" w-full h-full object-contain"
                width={36}
                height={36}
                src="/icon/icon-3.png"
              />
            </div>
            <span>Unlock your web performance </span>
          </li>
        </ul>
        <a
          href="/platform/connect/"
          aria-label="Learn more about Netlify Connect"
          class=" flex items-center gap-1 lg:mt-9 mt-5"
        >
          <span>Learn more</span>
          <div class="icon">
            <Image
              src="/icon/arrowIcon.svg"
              width={24}
              height={12}
              alt="arrow"
            />
          </div>
        </a>

        <Image
          className=" mt-6"
          src="/product-card-core.svg"
          width={406}
          height={150}
          alt="BG"
        />
      </div>

      <div className="card text-left lg:w-[calc(33.3333%-10.6666px)] sm:w-[calc(50%-8px)] w-full">
        <h3 class="sm:text-lg text-base font-medium uppercase">
          Netlify Connect
        </h3>
        <p class="sm:text-2xl text-xl font-bold tracking-tight leading-tight uppercase">
          Click, edit, publish
        </p>
        <p class="sm:text-lg text-sm tracking-tight sm:pt-7 pt-4 text-justify">
          Netlify Connect is a data unification layer that gives web teams the
          freedom to create world-class websites, online stores, and
          applications with data from any existing or new content source.
        </p>
        <ul className="lg:mt-8 mt-4 flex flex-col gap-2">
          <li className="sm:text-lg text-sm flex items-center gap-3">
            <div className="icon w-9 h-9 flex justify-center items-center">
              <Image
                className=" w-full h-full object-contain"
                width={36}
                height={36}
                src="/icon/icon-1.png"
              />
            </div>
            <span>Unify your content sources</span>
          </li>

          <li className="sm:text-lg text-sm flex items-center gap-3">
            <div className="icon w-9 h-9 flex justify-center items-center">
              <Image
                className=" w-full h-full object-contain"
                width={36}
                height={36}
                src="/icon/icon-2.png"
              />
            </div>
            <span>Modernize your web architecture </span>
          </li>

          <li className="sm:text-lg text-sm flex items-center gap-3">
            <div className="icon w-9 h-9 flex justify-center items-center">
              <Image
                className=" w-full h-full object-contain"
                width={36}
                height={36}
                src="/icon/icon-3.png"
              />
            </div>
            <span>Unlock your web performance </span>
          </li>
        </ul>
        <a
          href="/platform/connect/"
          aria-label="Learn more about Netlify Connect"
          class=" flex items-center gap-1 lg:mt-9 mt-5"
        >
          <span>Learn more</span>
          <div class="icon">
            <Image
              src="/icon/arrowIcon.svg"
              width={24}
              height={12}
              alt="arrow"
            />
          </div>
        </a>

        <Image
          className=" mt-6"
          src="/product-card-create.svg"
          width={406}
          height={150}
          alt="BG"
        />
      </div>
    </div>
  );
}

export default SolutionsCards;
