import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
    <div className='flex h-[calc(100vh-8rem)] w-screen justify-center bg-white flex-col items-center'>
      <div className='text-black flex flex-col items-center justify-center h-1/2 w-2/3 rounded-lg shadow-lg'>
        <h1 className='text-5xl font-bold text-center w-auto'>Land your dream job without being glued to your phone</h1>
        <p className='mt-4 text-center'>jobSeeker does your search for you</p>
        <button className='mt-4 bg-brand w-30 h-10 rounded-lg'>Get Started</button>
      </div>
    </div>

      <section className="w-full bg-gray-50 flex justify-center py-12">
  <div className="relative w-5/6 max-w-6xl">
    {/* Subtle glow behind the card */}
    <div className="absolute -inset-6 rounded-2xl bg-purple-500/10 blur-2xl"></div>

    {/* Main card */}
    <div className="relative bg-white rounded-2xl shadow-xl p-12 h-80">
      <h2 className="text-3xl font-bold text-center mb-8">
        How jobSeeker Accelerates Your Job Hunt
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <span className="text-5xl font-extrabold text-brand">3×</span>
          <p className="text-center mt-2 text-gray-600">
            More applications submitted before others
          </p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-extrabold text-brand">75%</span>
          <p className="text-center mt-2 text-gray-600">
            Users land interviews in their first month
          </p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-extrabold text-brand">10k+</span>
          <p className="text-center mt-2 text-gray-600">
            Jobs monitored and scraped daily
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


     

    </>
  )
}


{/* 
  <section className="w-full bg-gray-50 flex justify-center py-12">
      <div className="w-5/6 max-w-5xl bg-white rounded-2xl shadow-xl p-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          How jobSeeker Accelerates Your Job Hunt
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold text-brand">3×</span>
            <p className="text-center mt-2 text-gray-600">
              More applications submitted before others
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold text-brand">75%</span>
            <p className="text-center mt-2 text-gray-600">
              Users land interviews in their first month
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold text-brand">10k+</span>
            <p className="text-center mt-2 text-gray-600">
              Jobs monitored and scraped daily
            </p>
          </div>
        </div>
      </div>
    </section>
  */}