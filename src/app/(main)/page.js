"use client";

import { useEffect, useState } from "react";
import HeroSlider from "@/components/HeroSlider";
import CourseCard from "@/components/CourseCard";
import InstructorCard from "@/components/InstructorCard";
import Link from "next/link";

export default function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/courses.json");
      const data = await res.json();
      setCourses(data);
    };

    fetchCourses();
  }, []);

  // Popular Courses = Top 3 Rated
  const popularCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  // Trending Courses = first 3
  const trendingCourses = courses.slice(0, 3);

 const instructors = [
  {
    id: 1,
    name: "John Doe",
    skill: "Full Stack Developer",
    bio: "10+ years experience in modern web development.",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Sarah Smith",
    skill: "UI/UX Designer",
    bio: "Expert in design systems and user-friendly interfaces.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "David Miller",
    skill: "Digital Marketer",
    bio: "SEO & Ads specialist helping brands grow online.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Emily Johnson",
    skill: "React & Next.js Expert",
    bio: "Builds scalable web apps using Next.js and React.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
  },
];

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-10 py-10 space-y-20">
      {/* Hero Section */}
      <HeroSlider />

      {/* Popular Courses */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-primary">🔥 Popular Courses</h2>
          <Link href="/courses" className="btn btn-outline btn-primary btn-sm">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Trending Courses (Extra Section Requirement) */}
      <section>
        <h2 className="text-3xl font-bold text-primary mb-6">
          🚀 Trending Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Learning Tips */}
      <section className="bg-base-200 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-primary text-center">
          📌 Learning Tips
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-base-100 rounded-xl shadow-md">
            <h3 className="text-xl font-bold">⏳ Time Management</h3>
            <p className="mt-2 text-gray-600">
              Study at least 1 hour daily and keep a consistent schedule.
            </p>
          </div>

          <div className="p-6 bg-base-100 rounded-xl shadow-md">
            <h3 className="text-xl font-bold">📒 Take Notes</h3>
            <p className="mt-2 text-gray-600">
              Write down important topics and revise regularly to remember more.
            </p>
          </div>

          <div className="p-6 bg-base-100 rounded-xl shadow-md">
            <h3 className="text-xl font-bold">💻 Practice Projects</h3>
            <p className="mt-2 text-gray-600">
              Apply what you learn by building small projects and improving them.
            </p>
          </div>
        </div>
      </section>

      {/* Top Instructors */}
      <section>
        <h2 className="text-3xl font-bold text-primary text-center mb-10">
          🏆 Top Instructors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </section>
    </div>
  );
}