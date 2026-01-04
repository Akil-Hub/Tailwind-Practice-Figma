import React from 'react';
import Testimonial from '../assets/Testimonial.png';
import PrimaryBtn from '@/components/Buttons/PrimaryBtn';
const Testimonials = () => {
  return (
    <section className="wrapper section pt-40">
      <article className="relative h-50   w-100 sm:w-full   flex justify-center items-center hover:scale-102 duration-400">
        <span className="absolute  pb-10">
          {' '}
          <img src={Testimonial} alt="" className=" h-[200px] rounded-4xl sm:h-70 w-full lg:w-300 lg:rounded-[60px]"  />
        </span>

        <div className="z-10 relative pb-9">
          <h2 className="text-white text-2xl md:text-4xl lg:text-5xl text-center ">
            Get your free seo analytics
          </h2>
          <p className="text-gray-400 text-center sm:py-2 md:py-4 py-3 sm:w-100 w-60 mx-auto text-xs sm:text-base">
            Paste your website link to get the free 7 days analytics of your website for totaly free
          </p>

          <div className=" inputAndButton flex   justify-center   py-3 ">
            <input
              type="text"
              name="text"
              className=" text-sm  px-3 py-3 rounded-tl-xl sm:w-70 rounded-bl-xl bg-white focus:outline-none "
              placeholder="Paste Your Website Links"
            />
            <PrimaryBtn
              text="Analytics Website"
              className="rounded-tl-none rounded-bl-none px-2 text-xs"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Testimonials;
