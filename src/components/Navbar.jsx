import PrimaryBtn from '@/components/Buttons/PrimaryBtn';
import logo from '../assets/logo.png';
import { IoIosArrowDown } from 'react-icons/io';
import ContactModal from '@/Modals/ContactModal';
import { useState } from 'react';
import { useModal } from '@/context/ModalContext';
import {Link} from 'react-router-dom'
const Navbar = () => {

  const {openModal,id} = useModal()
  return (
    <section className="fixed w-full z-50 ">
      <nav className="flex justify-between wrapper backdrop-blur-3xl bg-black/20  items-center">
        <span>
          {' '}
          <img src={logo} alt="" className="" />
        </span>

        <ul className=" hidden md:flex gap-x-7 text-white">
          <li className="flex gap-1 items-center  active:scale-95 hover:text-blue-200 duration-300">
            <Link to={'/'}>Home</Link> <IoIosArrowDown />
          </li>
          <li
            className="flex gap-1 items-center  active:scale-95 hover:text-blue-200 duration-300"
            onClick={() => openModal('services')}
          >
            Services <IoIosArrowDown />
          </li>
          <li className="flex gap-1 items-center  active:scale-95 hover:text-blue-200 duration-300">
            <Link to={'/about'}>About</Link> <IoIosArrowDown />
          </li>
          <li className="flex gap-1 items-center  active:scale-95 hover:text-blue-200 duration-300">
            <Link to={'/contact'}>Contact</Link> <IoIosArrowDown />
          </li>
          <li className="flex gap-1 items-center  active:scale-95 hover:text-blue-200 duration-300">
            <Link to={'/blog'}>Blog</Link> <IoIosArrowDown />
          </li>
        </ul>

        <div className="righButton">
          <PrimaryBtn text="Contact Us" onClick={() => openModal('contact')} />
                 

        </div>
      </nav>



    </section>
  );
};

export default Navbar;
