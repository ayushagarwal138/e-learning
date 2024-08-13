import React from 'react'

const HeroContent = () => {
return (
    <div>
        <h1 data-aos="fade-right" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5 rem] xl:leading-[4rem] text-white">
        Best online platform for education.
        </h1>
        <p data-aos="fade-left" data-aos-delay="150" className="mt-6 text-sm md:text-base text-white text-opacity-60">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsam enim officiis quia iste aliquid sed odit tempore laboriosam possimus.
        </p>
        <div className="mt-8 flex items-center space-x-4">
            <button data-aos="zoom-in" data-aos-delay="300" className="button_cls bg-green-700 hover:bg-green-900">
                Get Started
            </button>
            <button data-aos="zoom-in" data-aos-delay="400"
             className="button_cls bg-yellow-700 hover:bg-yellow-900">
                Learn More
            </button>
        </div>
        <div className="flex items-center flex-wrap space-x-16 mt-8">
            <div data-aos="fade-up" data-aos-delay="600">
                <p className="md:text-xl lg:text-2xl text-base text-white font-bold">260+</p>
                <p className="w-[100px] h-[3px] bg-green-600 mt-2 mb-2 rounded-lg"></p>
                <p className="md:text-lg text-sm text-white text-opacity-70">Tutors</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="750">
                <p className="md:text-xl lg:text-2xl text-base text-white font-bold">2260+</p>
                <p className="w-[100px] h-[3px] bg-blue-600 mt-2 mb-2 rounded-lg"></p>
                <p className="md:text-lg text-sm text-white text-opacity-70">Students</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="900">
                <p className="md:text-xl lg:text-2xl text-base text-white font-bold">60+</p>
                <p className="w-[100px] h-[3px] bg-pink-600 mt-2 mb-2 rounded-lg"></p>
                <p className="md:text-lg text-sm text-white text-opacity-70">Courses</p>
            </div>
        </div>
    </div>
)
}

export default HeroContent
