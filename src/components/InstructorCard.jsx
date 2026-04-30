export default function InstructorCard({ instructor }) {
  return (
    <div className="card bg-base-100 shadow-lg border hover:shadow-2xl transition-all duration-300">
      <figure className="px-6 pt-6">
        <img
          src={instructor.image}
          alt={instructor.name}
          className="rounded-full w-24 h-24 object-cover border-4 border-primary"
        />
      </figure>

      <div className="card-body text-center">
        <h2 className="text-xl font-bold">{instructor.name}</h2>
        <p className="text-gray-500">{instructor.skill}</p>
        <p className="text-sm mt-2">{instructor.bio}</p>
      </div>
    </div>
  );
}