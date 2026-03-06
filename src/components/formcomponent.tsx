import { Card } from "./card";
import { ImageExample } from "./imageexample";
import { Lists } from "./lists";
import { Table } from "./table";
import i1 from '../images/i1.png';

export function Form() {
  return (
    <div className="max-w-4xl mx-auto p-6">
    <form className="space-y-4 max-w-sm">
      <input
        type="text"
        placeholder="Your name"
        className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <textarea
        className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        rows="4"
        placeholder="Message"
      />

      <button className="w-full py-2 bg-indigo-600 text-white rounded-lg shadowshadow-[0_4px_10px_rgba(255,0,0,0.4)]
      ">
        Submit
      </button>
      {/* <Card/>
      <br/>
      <ImageExample/>
      <br/>
      <Lists/> */}
      {/* <Table></Table> */}
        <img className="contrast-50 drop-shadow-lg" src={i1} />
        <img className="contrast-100" src={i1} />
        <img className="contrast-125" src={i1} />
        <img className="contrast-200" src={i1} />
    </form>
    </div>
  );
}
