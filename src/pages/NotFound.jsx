
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-8xl font-extrabold text-blue-400">404</h1>

      <h2 className="text-3xl font-bold mt-6">
        Page Not Found
      </h2>

      <p className="text-gray-400 mt-4">
        Looks like you've wandered into the wrong space.
      </p>

      <Link
        to="/"
        className="action-button mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold"
      >
        <span className="button-arrow" aria-hidden="true">←</span> Back to Home
      </Link>

    </div>
  )
}

export default NotFound
