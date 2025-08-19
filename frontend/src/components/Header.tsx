import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="p-2 flex bg-black text-black  w-full">
      <nav className="flex flex-row justify-between w-full p-3 text-white">
        <div className="px-2 font-bold">
          <Link to="/">Home</Link>
        </div>
        <div>
          Sign In
        </div>
      </nav>
    </header>
  )
}
