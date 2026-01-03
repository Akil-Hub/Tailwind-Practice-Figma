import React from 'react';
import SeoSettings from '../assets/SeoSetting.png';

import toolsData from '@/Data/toolsData';
const ToolsSection = () => {
  return (
    <section className="wrapper py-12 px-10 ">
      <h2 className="subHeading ">With Our Tools</h2>

      <article className="grid grid-cols-1  md:grid-cols-2 gap-10 py-8 mt-10">
        <div className="left">
          <p className="text py-4 mb-4 ">
            With over 25 years of experience, we have crafted thousands of strategic discovery
            process that enables us to peel back the layers which enable us to understand.
          </p>

          <img src={SeoSettings} alt="" />
        </div>

        <div className=" toolsCard  grid grid-cols-1 gap-5 md:justify-items-end justify-items-center ">
          {toolsData.map(({ title, desc, img,color}, index ) => {
            return (
              <div className={`seo h-34  hover:scale-105 duration-300 shadow-lg ${color} rounded-lg px-4 flex gap-4  items-center sm:w-120 w-80 justify`} key={index}>
                <span>
                  <img src={img} />
                </span>

                <div>
                  <h3 className="sm:text-2xl  text-xl text-heading font-bold">{title}</h3>

                  <p className="text text-sm sm:text-base text-gray-800 py-2">{desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

            

      </article>
    </section>
  );
};

export default ToolsSection;
