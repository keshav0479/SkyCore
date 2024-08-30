import React from 'react';

const Hero = () => {
    return (
        <div className='hero-background'>
            <div className='hero-content'>
                <h4 className='text-base text-purple-300 mb-4'>
                    Career Counseling & AI Master
                </h4>
                <h1 className='text-6xl lg:text-8xl font-semibold text-white mb-6'>
                    SkyCore
                </h1>
                <p className='text-md lg:text-lg mb-8 text-gray-300'>
                    At SkyCore, we are dedicated to guiding you through the complexities of career planning and AI expertise.
                    Our tool helps you find your ikigai, where your passion, skills, and market opportunities meet.

                </p>

                <ul className='list-none space-y-4 mb-8'>
                    <li className='flex items-start mb-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9d82ff" className="w-6 h-6 mr-2">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                        Personalized Career Pathways: Tailored suggestions that align with your interests, even if your qualifications don’t match.

                    </li>
                    <li className='flex items-start mb-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9d82ff" className="w-6 h-6 mr-2">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                        Project Master: Access top projects and ideas to enhance your skills and boost your resume.
                    </li>
                    <li className='flex items-start mb-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9d82ff" className="w-6 h-6 mr-2">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                        Dynamic Learning Plans: AI-generated roadmaps to help you master new skills efficiently
                    </li>
                </ul>

                <div className='mt-8'>
                    <button className='border border-purple-400 bg-purple-500 text-white py-1.5 px-4 lg:py-2 lg:px-5 rounded-md hover:bg-purple-600 flex items-center'>
                        <span>Get Started</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-5 h-5 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
