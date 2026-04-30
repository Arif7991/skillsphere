"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  const slides = [
    {
      title: "Upgrade Your Skills Today 🚀",
      desc: "Learn from expert instructors and build your career with industry-ready courses.",
      img: "https://images.unsplash.com/photo-1584697964190-5b0c4b2c3c8b?auto=format&fit=crop&w=900&q=80",
      btnText: "Explore Courses",
    },
    {
      title: "Learn from Industry Experts",
      desc: "Practical lessons, real-world projects, and step-by-step guidance to help you master new skills faster.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
      btnText: "Start Learning",
    },
    {
      title: "Build Your Future Career",
      desc: "Web Development, UI/UX Design, Marketing, Business and more — everything in one platform.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
      btnText: "Join Now",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="rounded-2xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-base-200">
              <div className="max-w-6xl mx-auto px-4 md:px-10 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  {/* Text */}
                  <div>
                    <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight">
                      {slide.title}
                    </h1>

                    <p className="mt-5 text-base md:text-lg text-gray-600 max-w-lg">
                      {slide.desc}
                    </p>

                    <div className="mt-7">
                      <Link href="/courses" className="btn btn-primary">
                        {slide.btnText}
                      </Link>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="w-full max-w-md">
                      <img
                        src={slide.img}
                        alt={slide.title}
                        className="w-full h-[220px] sm:h-[260px] md:h-[320px] object-cover rounded-2xl shadow-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}