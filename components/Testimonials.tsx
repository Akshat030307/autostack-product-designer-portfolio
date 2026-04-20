export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Testimonials</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <p className="text-gray-700">"An amazing designer who truly understands the needs of the user."</p>
            <p className="text-gray-900 font-semibold mt-4">- Client Name</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <p className="text-gray-700">"Delivered exceptional work on time and exceeded expectations."</p>
            <p className="text-gray-900 font-semibold mt-4">- Client Name</p>
          </div>
        </div>
      </div>
    </section>
  );
}