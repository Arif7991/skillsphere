import Link from "next/link";

export default function CourseCard({ course }) {
  const { id, title, instructor, duration, rating, level, image, category } =
    course;

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 border">
      <figure>
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <div className="flex justify-between items-center">
          <span className="badge badge-primary">{category}</span>
          <span className="badge badge-outline">{level}</span>
        </div>

        <h2 className="card-title mt-2 text-lg">{title}</h2>

        <p className="text-sm text-gray-500">Instructor: {instructor}</p>

        <div className="flex justify-between mt-2 text-sm font-medium">
          <p>⏳ {duration}</p>
          <p>⭐ {rating}</p>
        </div>

        <div className="card-actions justify-end mt-4">
          <Link href={`/courses/${id}`} className="btn btn-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}