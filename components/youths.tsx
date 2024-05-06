"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";


export default function youths() {
  const [category, setCategory] = useState<string>("0");

  return (
    <section id="section1 w-full ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center justify-center ">
        <div className="py-12 md:pt-32 md:pb-20 text-center justify-center">
          {/* Section header */}

          <div className="pb-12 md:pb-14 text-center justify-center">
            <div className="relative text-center md:text-left justify-center m-2 ">
              <div></div>
            </div>
          </div>
          {/* Content */}
          <div>
            {/* Category buttons */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center md:justify-start -m-1.5"></div>
            </div>
            {/* Gallery */}
            <div className="relative">
              <div className="p-6 w-full flex flex-col justify-center items-center ">
                {/* Images grid */}
                <h2 className=" h2 text-center justify-center m-11">Youths</h2>
                <p className=" w-[80%]  justify-center text-center">
                  Youth empowerment equips young individuals with the skills,
                  resources, and opportunities to realize their potential,
                  contribute to society, and lead meaningful lives. Through
                  education, mentorship, and civic engagement, it fosters
                  confidence, resilience, and leadership, shaping a brighter
                  future for all.
                </p>
              </div>
              <div
                className="max-w-sm mx-auto sm:max-w-none grid gap-6 sm:grid-cols-2 md:grid-cols-3 items-start"
                data-aos-id-inpspiration
              >
                {/* 1st Gallery Image */}
                <a
                  className="relative group hover:shadow-xl transition duration-150 ease-in-out"
                  style={
                    !["0", "1", "3"].includes(category)
                      ? { display: "none" }
                      : {}
                  }
                  href="#0"
                  data-aos="fade-down"
                  data-aos-anchor="[data-aos-id-inpspiration]"
                >
                  <Image
                    className="w-full aspect-square object-cover rounded-md"
                    src={`https://res.cloudinary.com/dqkwvguyg/image/upload/v1714860676/new%20pics/CYF_6705_n9qdkf.jpg`}
                    width="352"
                    height="352"
                    alt="Inspiration 01"
                  />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div
                      className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none"
                      aria-hidden="true"
                    />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        {/* <Image
                          className="shrink-0 w-9 h-9  mr-4  rounded-md"
                          src={Author01}
                          width="36"
                          height="36"
                          alt="Author 01"
                        /> */}
                        <div className="truncate">
                          <div className="font-bold text-white truncate">
                            Tare
                          </div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg
                            className="fill-current"
                            width="16"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </button>
                        <div className="whitespace-nowrap text-sm text-white opacity-90 ml-2"></div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* 2nd Gallery Image */}
                <a
                  className="relative group hover:shadow-xl transition duration-150 ease-in-out"
                  style={
                    !["0", "2", "3"].includes(category)
                      ? { display: "none" }
                      : {}
                  }
                  href="#0"
                  data-aos="fade-down"
                  data-aos-anchor="[data-aos-id-inpspiration]"
                  data-aos-delay="100"
                >
                  <Image
                    className="w-full aspect-square object-cover rounded-md"
                    src={`https://res.cloudinary.com/dqkwvguyg/image/upload/v1714860686/new%20pics/CYF_6827_v6lcc5.jpg`}
                    width="352"
                    height="352"
                    alt="Inspiration 02"
                  />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div
                      className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none"
                      aria-hidden="true"
                    />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        {/* <Image
                          className="shrink-0 w-10 h-10 rounded-md mr-4"
                          src={Author01}
                          width={40}
                          height={40}
                          alt="Author 01"
                        /> */}
                        <div className="truncate">
                          <div className="font-bold text-white truncate">
                            Tare
                          </div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg
                            className="fill-current"
                            width="16"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
                {/* 3rd Gallery Image */}
                <a
                  className="relative group hover:shadow-xl transition duration-150 ease-in-out"
                  style={
                    !["0", "1", "3", "4"].includes(category)
                      ? { display: "none" }
                      : {}
                  }
                  href="#0"
                  data-aos="fade-down"
                  data-aos-anchor="[data-aos-id-inpspiration]"
                  data-aos-delay="200"
                >
                  <Image
                    className="w-full aspect-square object-cover rounded-md"
                    src={`https://res.cloudinary.com/dqkwvguyg/image/upload/v1714860633/new%20pics/CYF_6788_ax1pp0.jpg`}
                    width="352"
                    height="352"
                    alt="Inspiration 03"
                  />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div
                      className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none"
                      aria-hidden="true"
                    />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        {/* <Image
                          className="shrink-0 w-10 h-10 rounded-md mr-4"
                          src={Author01}
                          width={40}
                          height={40}
                          alt="Author 01"
                        /> */}
                        <div className="truncate">
                          <div className="font-bold text-white truncate">
                            Tare
                          </div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg
                            className="fill-current"
                            width="16"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
                {/* 4th Gallery Image */}
                <a
                  className="relative group hover:shadow-xl transition duration-150 ease-in-out"
                  style={
                    !["0", "1", "2", "4"].includes(category)
                      ? { display: "none" }
                      : {}
                  }
                  href="#0"
                  data-aos="fade-down"
                  data-aos-anchor="[data-aos-id-inpspiration]"
                  data-aos-delay="300"
                >
                  <Image
                    className="w-full aspect-square object-cover rounded-md"
                    src={`https://res.cloudinary.com/dqkwvguyg/image/upload/v1714860633/new%20pics/CYF_6788_ax1pp0.jpg`}
                    width="352"
                    height="352"
                    alt="Inspiration 04"
                  />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div
                      className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none"
                      aria-hidden="true"
                    />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        {/* <Image
                          className="shrink-0 w-10 h-10 rounded-md mr-4"
                          src={Author01}
                          width={40}
                          height={40}
                          alt="Author 01"
                        /> */}
                        <div className="truncate">
                          <div className="font-bold text-white truncate">
                            Tare
                          </div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg
                            className="fill-current"
                            width="16"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
                {/* 5th Gallery Image */}
                <a
                  className="relative group hover:shadow-xl transition duration-150 ease-in-out"
                  style={
                    !["0", "1", "2"].includes(category)
                      ? { display: "none" }
                      : {}
                  }
                  href="#0"
                  data-aos="fade-down"
                  data-aos-anchor="[data-aos-id-inpspiration]"
                  data-aos-delay="400"
                >
                  <Image
                    className="w-full aspect-square object-cover rounded-md"
                    src={`https://res.cloudinary.com/dqkwvguyg/image/upload/v1714860617/new%20pics/CYF_6755_udapdl.jpg`}
                    width="352"
                    height="352"
                    alt="Inspiration 05"
                  />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div
                      className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none"
                      aria-hidden="true"
                    />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        {/* <Image
                          className="shrink-0 w-10 h-10 rounded-md mr-4"
                          src={Author01}
                          width={40}
                          height={40}
                          alt="Author 01"
                        /> */}
                        <div className="truncate">
                          <div className="font-bold text-white truncate">
                            Tare
                          </div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg
                            className="fill-current"
                            width="16"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
                {/* 6th Gallery Image */}
                <a
                  className="relative group hover:shadow-xl transition duration-150 ease-in-out"
                  style={
                    !["0", "1", "2", "3", "4"].includes(category)
                      ? { display: "none" }
                      : {}
                  }
                  href="#0"
                  data-aos="fade-down"
                  data-aos-anchor="[data-aos-id-inpspiration]"
                  data-aos-delay="500"
                >
                  <Image
                    className="w-full aspect-square object-cover rounded-md"
                    src={`https://res.cloudinary.com/dqkwvguyg/image/upload/v1714860597/new%20pics/CYF_6713_rpqlmo.jpg`}
                    width="352"
                    height="352"
                    alt="Inspiration 06"
                  />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div
                      className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none"
                      aria-hidden="true"
                    />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        {/* <Image
                          className="shrink-0 w-10 h-10 rounded-md mr-4"
                          src={Author01}
                          width={40}
                          height={40}
                          alt="Author 01"
                        /> */}
                        <div className="truncate">
                          <div className="font-bold text-white truncate">
                            Tare
                          </div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg
                            className="fill-current"
                            width="16"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
                {/* 7th Gallery Image */}
                <a
                  className="relative group hover:shadow-xl transition duration-150 ease-in-out"
                  style={
                    !["0", "1", "3", "4"].includes(category)
                      ? { display: "none" }
                      : {}
                  }
                  href="#0"
                  data-aos="fade-down"
                  data-aos-anchor="[data-aos-id-inpspiration]"
                  data-aos-delay="600"
                >
                  <Image
                    className="w-full aspect-square object-cover rounded-md"
                    src={`https://res.cloudinary.com/dqkwvguyg/image/upload/v1714860700/new%20pics/CYF_6831_ycgqzr.jpg`}
                    width="352"
                    height="352"
                    alt="Inspiration 07"
                  />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div
                      className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none"
                      aria-hidden="true"
                    />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        {/* <Image
                          className="shrink-0 w-10 h-10 rounded-md mr-4"
                          src={Author01}
                          width={40}
                          height={40}
                          alt="Author 01"
                        /> */}
                        <div className="truncate">
                          <div className="font-bold text-white truncate">
                            Tare
                          </div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg
                            className="fill-current"
                            width="16"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
                {/* 8th Gallery Image */}
                <a
                  className="relative group hover:shadow-xl transition duration-150 ease-in-out"
                  style={
                    !["0", "2", "3", "4"].includes(category)
                      ? { display: "none" }
                      : {}
                  }
                  href="#0"
                  data-aos="fade-down"
                  data-aos-anchor="[data-aos-id-inpspiration]"
                  data-aos-delay="700"
                >
                  <Image
                    className="w-full aspect-square object-cover rounded-md"
                    src={`https://res.cloudinary.com/dqkwvguyg/image/upload/v1714860710/new%20pics/CYF_6741_akoo09.jpg`}
                    width="352"
                    height="352"
                    alt="Inspiration 08"
                  />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div
                      className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none"
                      aria-hidden="true"
                    />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        {/* <Image
                          className="shrink-0 w-10 h-10 rounded-md mr-4"
                          src={Author01}
                          width={40}
                          height={40}
                          alt="Author 01"
                        /> */}
                        <div className="truncate">
                          <div className="font-bold text-white truncate">
                            Tare
                          </div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg
                            className="fill-current"
                            width="16"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
                {/* 9th Gallery Image */}
                <a
                  className="relative group hover:shadow-xl transition duration-150 ease-in-out"
                  style={
                    !["0", "2", "4"].includes(category)
                      ? { display: "none" }
                      : {}
                  }
                  href="#0"
                  data-aos="fade-down"
                  data-aos-anchor="[data-aos-id-inpspiration]"
                  data-aos-delay="800"
                >
                  <Image
                    className="w-full aspect-square object-cover rounded-md"
                    src={`https://res.cloudinary.com/dqkwvguyg/image/upload/v1714860676/new%20pics/CYF_6705_n9qdkf.jpg`}
                    width="352"
                    height="352"
                    alt="Inspiration 09"
                  />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div
                      className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none"
                      aria-hidden="true"
                    />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        {/* <Image
                          className="shrink-0 w-10 h-10 rounded-md mr-4"
                          src={Author01}
                          width={40}
                          height={40}
                          alt="Author 01"
                        /> */}
                        <div className="truncate">
                          <div className="font-bold text-white truncate">
                            Tare
                          </div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg
                            className="fill-current"
                            width="16"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
