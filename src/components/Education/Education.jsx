import React from 'react';
import { education } from '../../constants';

const Education = () => {
    return (
        <section
            id="education"
            className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom2"
        >
            {/* Section Title */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white">Education</h2>
                <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4" />
                <p className="text-white mt-4 text-lg font-semibold">
                    My education has been a journey of learning and development. Here are the details of my academic background.
                </p>
            </div>

            {/* Experience Timeline */}
            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute sm:left-1/2 left-4 sm:transform sm:-translate-x-1/2 w-1 bg-white h-full" />

                {/* Experience Entries */}
                {education.map((education, index) => {
                    const isEven = index % 2 === 1;

                    return (
                        <div
                            key={education.id}
                            className={`relative flex flex-col sm:flex-row items-center mb-24 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}
                        >
                            {/* Timeline Circle - Only on large screens */}
                            <div className="hidden lg:block z-20 absolute left-1/2 transform -translate-x-1/2 mb-6">

                                <div className="bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center">
                                    <img
                                        src={education.img}
                                        alt={education.school}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div
                                className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] z-10
                ${isEven ? 'sm:ml-24' : 'sm:mr-24'} transition-transform duration-300 hover:scale-105`}
                            >
                                {/* Header Section */}
                                <div className="flex items-center space-x-6">
                                    {/* Small-screen logo inside card */}
                                     <div className="w-16 h-16 bg-white rounded-md overflow-hidden shrink-0">
                    <img src={education.img} alt={education.company} className="w-full h-full object-cover" />
                  </div>
                                    <div>
                                        <h2 className="text-2xl sm:text-xl font-semibold text-white">{education.degree}</h2>
                                        <h3 className="text-md sm:text-sm text-white">{education.school}</h3>
                                        <p className="text-sm text-gray-500 mt-2">{education.date}</p>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-white mt-4">Grades: {education.grade}</p>
                                <p className="text-gray-400 mt-4">{education.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Education;
