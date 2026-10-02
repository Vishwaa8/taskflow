function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center">
        <h1 className="text-4xl font-bold text-indigo-600">
          TaskFlow
        </h1>

        <p className="mt-3 text-slate-500">
          Daily Task Manager App
        </p>

        <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default App