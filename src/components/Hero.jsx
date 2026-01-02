import React from 'react';
import cloud1 from '../assets/cloud1.png';
import cloud2 from '../assets/cloud2.png';
import cloud3 from '../assets/cloud3.png';
import rocket from '../assets/rocket.png';
import banner from '../assets/banner.png';
import seo from '../assets/seo.png';
import company1 from '../assets/company1.png';
import company2 from '../assets/company2.png';
import company3 from '../assets/company3.png';
import company4 from '../assets/company4.png';
const Hero = () => {
  return (
    <section
      className="  md:h-[800px] h-[600px] relative -z-50  w-full bg-center bg-cover  bg-no-repeat "
      style={{ backgroundImage: `url(${banner})` }}
    >
      <article className="wrapper relative flex flex-col justify-center items-center py-30">
        <img src={seo} alt="" className="w-50 h-8 " />

        <h1 className="text-3xl lg:w-200 py-3 text-center sm:4xl md:6xl lg:text-7xl text-white font-bold mt-10 ">
          Guaranteed increase of your website sales
        </h1>

        <p className="text py-3 text-center sm:w-129">
          With over 25 years of experience, we have crafted thousands of strategic discovery process
          that enables us to peel back the layers which enable us to understand.
        </p>

        <div className=" flex  mt-10 sm:mt-0  ">
          <input
            type="text"
            name="text"
            className=" text-sm  px-3 py-3 rounded-tl-xl sm:w-70 rounded-bl-xl bg-white focus:outline-none "
            placeholder="Paste Your Website Links"
          />
          <button className="px-4 text-sm py-3 bg-violet-500 rounded-tr-xl rounded-br-xl text-white ">
            Analyze Website
          </button>
        </div>

        <div className="clouds ">
          <img src={cloud1} alt="" className=" hidden sm:block absolute -z-5  -bottom-80 left-0 " />

          <img src={cloud2} alt="" className="hidden sm:block  absolute -z-1  -bottom-93 left-0" />
          <img src={cloud3} alt="" className=" hidden sm:block  absolute z-3  -bottom-86 left-0" />
        </div>
        <div className="runningBrands absolute z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-6 -bottom-80 mb-20 sm:mb-0">
          <img src={company1} alt="" />
          <img src={company2} alt="" />
          <img src={company3} alt="" />
          <img src={company4} alt="" />
        </div>
      </article>
    </section>
  );
};

export default Hero;
