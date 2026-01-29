export function Table() {
    // Table with striped rows
    // <tbody class="[&>tr:nth-child(even)]:bg-zinc-100">
    // Hover Row Highlight
    //<tbody class="[&>tr:hover]:bg-zinc-100 cursor-pointer">

  return (
    <table className="w-full border border-zinc-300  border-collapse">
      <thead className="bg-zinc-100">
        <tr>
          <th className="border p-2 text-left">Name</th>
          <th className="border p-2 text-left">Age</th>
        </tr>
      </thead>

      <tbody className="[&>tr:nth-child(even)]:bg-yellow-500 [&>tr:hover]:bg-red-400 cursor-pointer">
        <tr>
          <td className="border p-2 bg-danger">John</td>
          <td className="border p-2">28</td>
        </tr>
        <tr>
          <td className="border p-2">Sarah</td>
          <td className="border p-2">32</td>
        </tr>
      </tbody>
    </table>
  );
}
