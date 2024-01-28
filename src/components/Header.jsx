export default function Header() {
  return (
    <header className="flex py-1 px-3">
      <ul className="flex items-center mr-6 gap-2">
        <li className="w-3 h-3 rounded-full bg-red-500"></li>
        <li className="w-3 h-3 rounded-full bg-yellow-500"></li>
        <li className="w-3 h-3 rounded-full bg-green-500"></li>
      </ul>
      <div>Example</div>
    </header>
  );
}
