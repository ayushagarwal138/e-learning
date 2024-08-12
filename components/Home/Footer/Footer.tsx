import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="pt-20 pb-12 bg-black">
        <div className="w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4
        gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20">
            <div>
                <Image src="/images/logo.png" alt="Logo" height={100} width={100} />
                <p className="text-white text-opacity-50">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="flex items-center space-x-4 mt-6">
                    <FaFacebookF className="w-6 h-6 text-blue-600" />
                    <FaTwitter className="w-6 h-6 text-sky-500"/>
                    <FaYoutube className="w-6 h-6 text-red-700"/>
                    <FaInstagram className="w-6 h-6 text-pink-600"/>
                </div>
            </div>
            <div>
                <h1 className="footer_heading">Popular</h1>
                <p className="footer_link">Web Development</p>
                <p className="footer_link">Hacking</p>
                <p className="footer_link">UI/UX Designing</p>
                <p className="footer_link">App Development</p>
                <p className="footer_link">Desktop Development</p>
                <p className="footer_link">Digital Marketing</p>
            </div>
            <div>
                <h1 className="footer_heading">Quick Link</h1>
                <p className="footer_link">Home</p>
                <p className="footer_link">About</p>
                <p className="footer_link">Courses</p>
                <p className="footer_link">Instructor</p>
                <p className="footer_link">Profile</p>
                <p className="footer_link">Privacy Policy</p>
            </div>
            <div>
                <h1 className="footer_heading">Subscribe to our Newsletter</h1>
                <input type="text" placeholder="Enter your e-mail" className="px-6 py-2 rounded-lg
                outline-none bg-gray-700 text-white" />
                <button className="px-6 py-2 mt-4 rounded-lg
                outline-none bg-rose-700 text-white hover:bg-rose-900">Subscribe</button>
            </div>
        </div>
        <p className="text-center mt-4 text-base text-white opacity-70">©Copyright by Ayush Agarwal</p>
    </div>
  )
}

export default Footer