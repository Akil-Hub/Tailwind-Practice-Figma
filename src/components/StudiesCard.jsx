import PrimaryBtn from '@/components/Buttons/PrimaryBtn';
import studiesCardData from '@/Data/studiesCardData';
import React from 'react';
const StudiesCard = () => {
  return (
    <section className="py-12 wrapper  ">
      <article className="row flex  justify-between items-center">
        <div className="left">
          <h3 className="text-violet-500 py-4 text-xl">Our Works</h3>
          <h3 className="text-3xl font-bold text-heading pb-4">Our Case Studies</h3>
        </div>
        <span>
          <PrimaryBtn text="View All" className=" hover:text-violet-600 " />
        </span>
      </article>

      <article className="section cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
        {studiesCardData.map(({ id, title, desc, img }) => {
          return (
            <div className="card hover:scale-105 duration-300 shadow-md  rounded-2xl p-4" key={id}>
              <span>
                <img src={img} alt="" />
              </span>
              <h4 className="py-5 text-heading font-semibold text-2xl md:text-3xl p-2 ">{title}</h4>

              <p className="text text-sm md:text-base px-2">{desc}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default StudiesCard;
