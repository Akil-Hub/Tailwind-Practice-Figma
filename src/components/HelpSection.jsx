import React from 'react';
import Growth from '../assets/Growth.png';
import helpCardData from '@/Data/helpCardData';
import realTime from '../assets/realTime.png';
import PrimaryBtn from '@/components/Buttons/PrimaryBtn';
const HelpSection = () => {
  return (
    <section className="bg-[#F1FBFB]">
      <article className="wrapper ">
        <h5 className="text-violet-500 text-xl py-4 text-center">Core Feature</h5>
        <h2 className="text-heading text-2xl sm:text-4xl font-bold py-3 text-center">How Can We Help?</h2>

        <div className="cards grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  py-6 justify-items-center">
          {helpCardData.map(({ id, color, title, img }) => {
            return (
            <div className={`card w-66 h-50 p-2 rounded-lg ${color} hover:scale-105 duration-300 shadow-2xl justify-items-center gap-x-5   `} key={id}>
                <span>
                  <img src={img} alt="" className="mx-auto py-2" />
                </span>

                <h3 className="text-white text-3xl text-center py-3">{title}</h3>
              </div>
            );
          })}
        </div>

        <article className="grid  grid-cols-1 sm:grid-cols-2 sm:gap-10 sm:pr-10 md:pr-0 md:gap-0 py-10 mt-10  ">
            <div className="left">
                <img src={realTime} alt="" className="mx-auto"/>
            </div>
            <div className="right pt-18 text-center sm:text-left md:w-120 sm:w-90 mx-auto ">
                <h2 className="text-heading text-2xl sm:text-4xl font-semibold">Real Time Analytics </h2>
                <p className="text py-4 text-sm md:text-base ">
                    Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distributiour team of experts. We'll analyze your website and develop a suitable conversion-rate strategy.

                </p>
                <PrimaryBtn text='Analyze Website' className="my-7 hover:text-violet-600 "/>
            </div>

        </article>
      </article>
    </section>
  );
};

export default HelpSection;
