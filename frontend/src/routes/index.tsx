import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className='flex h-screen w-screen justify-center bg-slate-950'>
      <div className='text-white mt-50'>
        <h1 className='text-6xl font-bold text-center'>Job Seeker</h1>
        <p className='mt-4 text-center'>Land your dream job</p>
        <button>Get Started</button>
      </div>
    </div>
  )
}
