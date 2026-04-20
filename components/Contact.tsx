export default function Contact() {
  return (
    <section className="bg-gradient-to-r from-gray-300 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Your Message" className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 h-32"></textarea>
          </div>
          <button type="submit" className="w-full bg-gray-900 text-white py-3 rounded hover:bg-gray-700 transition-colors">Send Message</button>
        </form>
      </div>
    </section>
  );
}