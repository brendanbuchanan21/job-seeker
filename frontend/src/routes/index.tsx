import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-gray-100'>
      <div>
        <h1 className='text-6xl font-bold text-center'>Job Seeker</h1>
        <p className='mt-4 text-center text-gray-600'>Land your dream job</p>
      </div>
    </div>
  )
}
