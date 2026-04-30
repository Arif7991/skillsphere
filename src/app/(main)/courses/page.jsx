"use client";

import { useEffect, useState } from "react";
import CourseCard from "@/components/CourseCard";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      const res = await fetch("/courses.json");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-10 py-10">
      <h1 className="text-4xl font-bold text-center text-primary">
        All Courses
      </h1>
      <p className="text-center mt-2 text-gray-500">
        Explore all available courses and upgrade your skills today 🚀
      </p>

      {/* Search */}
      <div className="mt-8 flex justify-center">
        <input
          type="text"
          placeholder="Search courses by title..."
          className="input input-bordered w-full max-w-lg"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/* Loading */}
      {loading ? (
        <div className="flex justify-center mt-10">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No courses found!
            </p>
          )}
        </div>
      )}
    </div>
  );
}