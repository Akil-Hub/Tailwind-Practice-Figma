import React, { Children } from 'react';
import UniversalModal from '@/Modals/UniversalModal';
const ContactModal = () => {
  return (
    <UniversalModal
      id="contact"
      header={<h2 className=" text-center text-2xl font-bold text-green-500">Contact us Modal</h2>}
      footer = {<h3 className="mt-6 text-center text-xl font-semibold text-red-400"> I am contact page footer</h3>}
    >
      <form>
        <label htmlFor="name" className="block py-2 text-xl">Your Name:</label>
        <input
          type="name"
          className="bg-gray-300  rounded-xl focus:outline-none px-3 py-2 text-xl"
          placeholder="Enter your name"
        />
        <label htmlFor="Email" 
        className="block py-2"
        
        >Your Email:</label>

        <input
          type="email"
          className="bg-gray-300 rounded-xl focus:outline-none px-3 py-2 text-xl"
          placeholder="Enter your Email"
        />
      </form>
    </UniversalModal>
  );
};

export default ContactModal;
