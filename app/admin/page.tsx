import Link from "next/link";

// AdminPage.tsx
const AdminPage = () => {
  return (
    <div className="mx-auto py-10 px-4 bg-gradient-to-tl from-pink-500 via-purple-500 to-indigo-500 min-h-screen">
      {/* Upload Button */}
      <section className="mb-12">
        <div className="max-w-lg mx-auto p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-lg">
          <h2 className="text-2xl text-center font-semibold text-gray-700 mb-6">
            Upload New Project
          </h2>
          <Link
            href={"/admin/new-project"}
            className="w-full inline-block text-center mx-auto py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors cursor-pointer"
          >
            Upload Video
          </Link>
        </div>
      </section>

      {/* Display Projects */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Your Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Project 1 */}
          <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <iframe
              src="https://player.vimeo.com/video/123456789"
              width="100%"
              height="200"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4 text-indigo-700">
              Project Title 1
            </h3>
            <p className="mt-2 text-gray-600">Description of the project.</p>
            <button className="mt-4 py-2 px-4 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors">
              Edit
            </button>
          </div>

          {/* Example Project 2 */}
          <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <iframe
              src="https://player.vimeo.com/video/987654321"
              width="100%"
              height="200"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4 text-indigo-700">
              Project Title 2
            </h3>
            <p className="mt-2 text-gray-600">Description of the project.</p>
            <button className="mt-4 py-2 px-4 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors">
              Edit
            </button>
          </div>

          {/* Example Project 3 */}
          <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <iframe
              src="https://player.vimeo.com/video/1122334455"
              width="100%"
              height="200"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4 text-indigo-700">
              Project Title 3
            </h3>
            <p className="mt-2 text-gray-600">Description of the project.</p>
            <button className="mt-4 py-2 px-4 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors">
              Edit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminPage;
