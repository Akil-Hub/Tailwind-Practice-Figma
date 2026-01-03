import React from 'react'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import Traffic from '../assets/Traffic.png'
const TrafficSection = () => {
  return (
    <section className="wrapper py-16 px-18">

        <article className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center ">

            <div className="left sm:p-5">
                <p className="text-violet-500 text-xl py-4">Core Feature</p>
                <h2 className="text-4xl font-bold py-4 text-heading">Get More Traffic</h2>

                <div className="text md:pr-10 text-sm md:text-base">
                    With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand.With over 25 years of experience, we have crafted thousands of strategic discovery process
                </div>

                <div className="percent py-8 flex gap-8">
                    <span><img src={p1} alt="" /></span>
                    <span><img src={p2} alt="" /></span>
                    <span><img src={p3} alt="" /></span>


                </div>



            </div>

            <div className="right py-12 flex items-center">
                <img src={Traffic} alt="" />
            </div>




        </article>

        
    </section>
  )
}

export default TrafficSection