export default function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <img src="https://placehold.co/800x400" alt="Case Study 1" className="rounded mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Project Title</h3>
            <p className="text-gray-700">Brief description of the project.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <img src="https://placehold.co/800x400" alt="Case Study 2" className="rounded mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Project Title</h3>
            <p className="text-gray-700">Brief description of the project.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <img src="https://placehold.co/800x400" alt="Case Study 3" className="rounded mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Project Title</h3>
            <p className="text-gray-700">Brief description of the project.</p>
          </div>
        </div>
      </div>
    </section>
  );
}