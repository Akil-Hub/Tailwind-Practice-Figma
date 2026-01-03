import PrimaryBtn from '@/components/Buttons/PrimaryBtn';
import logo from '../assets/logo.png';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {
  return (
    <section className="fixed w-full z-50 ">
      <nav className="flex justify-between wrapper backdrop-blur-3xl bg-black/20  items-center">
       <span> <img src={logo} alt="" className="" /></span>

        <ul className=" hidden md:flex gap-x-7 text-white">
          <li className="flex gap-1 items-center  active:scale-95 hover:text-blue-200 duration-300">
            <a href="">Home</a> <IoIosArrowDown />
          </li>
          <li className="flex gap-1 items-center  active:scale-95 hover:text-blue-200 duration-300">
            <a href="">Services</a> <IoIosArrowDown />
          </li>
          <li className="flex gap-1 items-center  active:scale-95 hover:text-blue-200 duration-300">
            <a href="">About</a> <IoIosArrowDown />
          </li>
          <li className="flex gap-1 items-center  active:scale-95 hover:text-blue-200 duration-300">
            <a href="">Contact</a> <IoIosArrowDown />
          </li>
          <li className="flex gap-1 items-center  active:scale-95 hover:text-blue-200 duration-300">
            <a href="">Blog</a> <IoIosArrowDown />
          </li>
        </ul>

        <div className="righButton">
            <PrimaryBtn text='Contact Us'/> 
        </div>


      </nav>
    </section>
  );
};

export default Navbar;
