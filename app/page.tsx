import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Features from './components/Features'


export default async function Home() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
} = await supabase.auth.getUser()

  return (
    <div>
    { user ? (
      <h1>Testing</h1>

      // TO GO IN HERE Cards
      // One for each Group

    ): ( 
      <>
      <div className="hero py-32 bg-base-100">
            <div className="hero-content max-w-5xl flex-col lg:flex-row-reverse">
                <Image
                  src="/../public/images/students-learn.jpg"
                  width={500}
                  height={500}
                  alt="Picture of students learning"
                  className="max-w-sm rounded-lg md:my-0 md:mx-6 shadow-2xl"
                />
                <div className="text-center mx-20 md:mx-40 lg:mx-0 lg:text-left mt-10 lg:mt-0">
                  <h1 
                    className="text-5xl font-bold">doNowAI
                    <span className="ml-2 inline-block px-2 py-1 text-xs font-semibold text-white bg-red-600 rounded-full">Beta</span>
                  </h1>
                  <p className="py-6">Elevate your education with  <span className="font-semibold text-lg">doNowAI</span></p>
                  <p className="py-2">Navigate your learning path with ease, generate randomised questions, and utilise the power of spaced repetition to solidify your knowledge over time.</p>
                  <p className="py-2">Best of all? You can embark on this transformative learning journey for as little as £1 per year with our Basic plan.</p>
                  <p className="py-2">For those seeking an even more comprehensive learning tool, the AI version is available from just £10 per year.</p>
                  <p className="py-6">Invest in your future with <span className="font-semibold text-lg">doNowAI</span></p>
                  <button className="btn btn-primary mx-2">Get Started</button>
                  <button className="btn btn-info mx-2">Find out More</button>
                </div>
            </div>
        </div>
        <Features />
        </>

    )}
    </div>
  )
}