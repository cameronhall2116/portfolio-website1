import React from 'react';

function Intro() {
    return (
        <div className="flex items-center
         justify-center flex-col text-center pt-20
         pb-6">
            <h1 className="text-4xl md:text-7xl 
            mb-1 md:mb-3 font-bold">Cameron Hall</h1>
            <p className="text-base md:text-xl 
            mb-3 font-regular">
            Software Engineer and Physics Student
            </p>
            <p className="text-sm max-w-xl 
            mb-6 font-medium">
                I am 22 years old and currently studying a Bachelor of
                Advanced Science majoring in Physics at Curtin University.
                I have been programming and teaching myself computer science for over 4
                years. 
            </p>
         </div>
    )
}

export default Intro;