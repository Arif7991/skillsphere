"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function CourseDetailsPage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      const res = await fetch("/courses.json");
      const data = await res.json();

      const foundCourse = data.find((item) => item.id === parseInt(id));
      setCourse(foundCourse);
      setLoading(false);
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-red-500">Course Not Found</h2>
        <p className="mt-3 text-gray-500">
          The course you are looking for does not exist.
        </p>
        <Link href="/courses" className="btn btn-primary mt-6">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-10 py-10">
      {/* Course Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={course.image}
            alt={course.title}
            className="rounded-2xl shadow-lg w-full h-[280px] md:h-[350px] object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-primary">
            {course.title}
          </h1>

          <p className="mt-4 text-gray-600">{course.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="badge badge-primary badge-lg">
              {course.category}
            </span>
            <span className="badge badge-outline badge-lg">
              Level: {course.level}
            </span>
            <span className="badge badge-secondary badge-lg">
              ⭐ {course.rating}
            </span>
            <span className="badge badge-accent badge-lg">
              ⏳ {course.duration}
            </span>
          </div>

          <p className="mt-6 font-semibold">
            Instructor:{" "}
            <span className="text-gray-700">{course.instructor}</span>
          </p>

          <button className="btn btn-primary mt-8 w-full md:w-auto">
            Enroll Now
          </button>
        </div>
      </div>

      {/* Curriculum Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-primary mb-6">
          📚 Course Curriculum
        </h2>

        <div className="bg-base-200 rounded-2xl p-6">
          <ul className="space-y-4 font-medium">
            <li className="p-4 bg-base-100 rounded-xl shadow">
              ✅ Introduction & Course Overview
            </li>
            <li className="p-4 bg-base-100 rounded-xl shadow">
              ✅ Core Concepts & Fundamentals
            </li>
            <li className="p-4 bg-base-100 rounded-xl shadow">
              ✅ Hands-on Practical Projects
            </li>
            <li className="p-4 bg-base-100 rounded-xl shadow">
              ✅ Advanced Techniques & Best Practices
            </li>
            <li className="p-4 bg-base-100 rounded-xl shadow">
              ✅ Final Project & Certification
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}