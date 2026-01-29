export default function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center">
      <div className="p-8 bg-white text-zinc-900 rounded-xl shadow-xl max-w-md">
        <h1 className="text-3xl font-bold mb-4">Tailwind CSS v4 + React</h1>
        <p className="mb-6 text-zinc-600">
          If this looks styled, Tailwind v4 is working.
        </p>
       <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
      Click Me
    </button>
    <button className="px-4 py-2 rounded bg-green-600 text-white">Success</button>
<button className="px-4 py-2 rounded bg-red-600 text-white">Danger</button>
<button className="px-4 py-2 rounded border border-zinc-300 text-zinc-700">Outline</button>

      </div>
    </div>
  );
}
