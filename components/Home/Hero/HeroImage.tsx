"use client"
import Image from 'next/image';
import React from 'react'
import Tilt from 'react-parallax-tilt';

const HeroImage = () => {
return <Tilt>
    <div data-aos="fade-left" data-aos-delay="1050" className="hidden lg:block">
        <Image src="/images/hero.png" width={800} height={600} alt="Hero" />
    </div>
</Tilt>
};

export default HeroImage