import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="p-2 flex text-black  w-full h-20">
      <nav className="flex flex-row justify-between w-full p-3 text-black">
        <div className="px-2 font-bold">
          <Link to="/">jobSeeker</Link>
        </div>
        <div className='flex flex-row gap-10 pr-4  w-1/3 justify-between'>
          <div className='g-4 flex flex-row gap-4'>
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
        <div>
          <button className='bg-brand w-30 h-10 rounded-lg'>Get Started</button>
        </div>
        </div>
        
      </nav>
    </header>
  )
}
