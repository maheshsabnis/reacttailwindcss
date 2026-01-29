import i1 from '../images/i1.png';
export function ImageExample() {
  return (
    <img
      src={i1}
      alt="Example"
      className="rounded-xl shadow-lg w-full object-cover"
    />
  );
}
