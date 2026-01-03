import React from 'react'
import FooterLogo from '../assets/FooterLogo.png'
const Footer = () => {
  return (
    <section className="wrapper section">

    <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6  justify-items-center text-center sm:text-left">

    {/* First column - spans 2 columns on large screens */}
    <div className="px-6 lg:col-span-2 sm:pl-32 lg:pl-0">
        <img src={FooterLogo} alt="Footer Logo" className="mx-auto sm:mx-0"/>
        <p className="py-5 text-para w-100 sm:w-none text-center sm:text-left">
            Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.
        </p>
    </div>

    <div className="Products">
        <h4 className="text-2xl text-heading py-3">Features</h4>
        <h5 className="text-para py-2">Task Management</h5>
        <h5 className="text-para py-2">Company Growth</h5>
        <h5 className="text-para py-2">Time Tracking</h5>
    </div>

    <div className="Support">
        <h4 className="text-2xl text-heading py-3">Support</h4>
        <h5 className="text-para py-2">Customer Service</h5>
        <h5 className="text-para py-2">Accessibility</h5>
        <h5 className="text-para py-2">Contact Us</h5>
    </div>

    <div className="Features">
        <h4 className="text-2xl text-heading py-3">Pages</h4>
        <h5 className="text-para py-2">Home</h5>
        <h5 className="text-para py-2">About</h5>
        <h5 className="text-para py-2">Benefit</h5>
        <h5 className="text-para py-2">Pricing</h5>
        <h5 className="text-para py-2">Blog</h5>
    </div>

</article>

<hr  className=" mt-10 text-gray-300"/>
<div className="flex flex-col sm:flex-row gap-8 items-center justify-between mt-10 sm:px-20">

    <p className="text">&copy; 2026 Innovate, All Right Reseved</p>
    <div className="flex gap-5">
        <p className="text">Privacy Policy</p>
        <p className="text">Terms & Condition</p>
    </div>
</div>



        

    </section>
  )
}

export default Footer