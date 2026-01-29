export function Card() {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-zinc-200 max-w-sm">
      <h3 className="text-xl font-semibold mb-2">Card Title</h3>
      <p className="text-zinc-600 mb-4">
        Tailwind v4 makes card layouts simple and clean.
      </p>
      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
        Action
      </button>
    </div>
  );
}
