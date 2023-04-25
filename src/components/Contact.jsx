import React from 'react';
import Title from './Title';

function Contact() {
    return (
        <div className="flex flex-col my-20 mx-auto">
            <div className="flex justify-center items-center">
                <form 
                    action="https://getform.io/slug"
                    method="POST"
                    className="flex flex-col w-full md:w-7/12"
                >
                    <Title>Contact</Title>
                    <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="p-2 bg-transparent border-2 border-2 rounded-md
                    focus:outline-none"
                    />
                    <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="my-2 p-2 bg-transparent border-2 rounded-md
                    focus:outline-none"
                    />
                    <textarea
                    type="text"
                    name="message"
                    placeholder="Message"
                    rows="10"
                    className="p-2 mb-4 bg-transparent border-2
                    rounded-md focus:outline-none"
                    />
                    <div class="relative group">
                        <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-500
                        to-cyan-500 blur opacity-75">
                        </div>
                        <button
                            type="submit"
                            className=" relative text-center inline-block px-8 py-3
                            w-full text-base font-bold rounded-md dark:text-white
                            dark:bg-black bg-white text-stone-900 group-hover:dark:text-gray-200 
                            group-hover:text-gray-700 group-hover:opacity-90 
                            group-hover:scale-95 transformation duration-800">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;