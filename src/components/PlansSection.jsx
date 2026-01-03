import React from 'react';
import Tick from '../assets/Tick.png';
import Close from '../assets/Close.png';
const PlansSection = () => {
  return (
    <section className="wrapper py-12 overflow-hidden ">
      <h3 className="text-violet-500 py-4 text-xl text-center">Our Works</h3>
      <h3 className="text-3xl font-bold text-heading pb-4 text-center">
        Premium optimization plans
      </h3>

      <article className=" py-10   sm:min-w-0 -mx-4 px-4 overflow-x-auto ">
        <table className="plans-table  min-w-[600px] ">
          <thead>
            <tr className="">
              <th className="bg-[#D2EAFD] w-100 rounded-full p-2"></th>
              <th className="bg-[#323232] w-100 rounded-full  p-2"></th>
              <th className="bg-[#43CB83] w-100 rounded-full  p-2"></th>
              <th className="bg-[#845A9F] w-100 rounded-full  p-2"></th>
            </tr>
            <tr>
              <th className="text-para ">
                Save <strong className="text-heading font-semibold">Up to 40%</strong>By <br />{' '}
                Paying Annually!
              </th>

              <th className="text-para ">
                <strong className="text-heading font-semibold">Personal</strong> <br />{' '}
                <span className="font-semibold">Free</span>{' '}
              </th>
              <th className="text-para ">
                <strong className="text-heading font-semibold">Professonal</strong> <br />{' '}
                <span className="font-semibold">$59</span>/Monthly{' '}
              </th>
              <th className="text-para ">
                <strong className="text-heading font-semibold">Enterprice</strong> <br />{' '}
                <span className="font-semibold">$299</span>/Monthly{' '}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="color-row">
              <td className="text-para">Keywords Result</td>
              <td className="text-para"> Top 1,000</td>
              <td className="text-para">5,000</td>
              <td className="text-para">10,000</td>
            </tr>
            <tr className="">
              <td className="text-para">Territories </td>
              <td className="text-para"> Top 6 </td>
              <td className="text-para">13</td>
              <td className="text-para">200+</td>
            </tr>
            <tr className="color-row ">
              <td className="text-para">Search By Time</td>
              <td className="text-para">
                <img src={Tick} className="mx-auto" />{' '}
              </td>
              <td className="text-para">
                <img src={Tick} className="mx-auto" />
              </td>
              <td className="text-para">
                <img src={Tick} className="mx-auto" />
              </td>
            </tr>
            <tr className=" ">
              <td className="text-para">Api Access</td>
              <td className="text-para">
                <img src={Close} className="mx-auto" />{' '}
              </td>
              <td className="text-para">
                <img src={Close} className="mx-auto" />
              </td>
              <td className="text-para">
                <img src={Tick} className="mx-auto" />
              </td>
            </tr>
            <tr className="color-row ">
              <td className="text-para">Competition Metrics</td>
              <td className="text-para">
                <img src={Tick} className="mx-auto" />{' '}
              </td>
              <td className="text-para">
                <img src={Tick} className="mx-auto" />
              </td>
              <td className="text-para">
                <img src={Tick} className="mx-auto" />
              </td>
            </tr>
            <tr className=" ">
              <td className="text-para">Reports</td>
              <td className="text-para">
                <img src={Tick} className="mx-auto" />{' '}
              </td>
              <td className="text-para">
                <img src={Tick} className="mx-auto" />
              </td>
              <td className="text-para">
                <img src={Tick} className="mx-auto" />
              </td>
            </tr>
            <tr className=" buttons">
              <td></td>
              <td className="bg-[#323232] text-white">
                <button>Try For Free</button>
              </td>
              <td className="bg-[#43CB83] text-white">
                <button>Buy Now </button>
              </td>
              <td className="bg-[#845A9F] text-white">
                <button>Buy Now </button>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>
  );
};

export default PlansSection;
