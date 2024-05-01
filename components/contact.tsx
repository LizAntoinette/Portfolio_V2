"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';

// Define the structure of the form state using an interface
interface IFormData {
    email: string;
    subject: string;
    message: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<IFormData>({ email: '', subject: '', message: '' });

    // Update handleChange to include type information for the event
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Update handleSubmit to include type information for the event
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(formData);  // Process form data here or send to an API
    };

        
        return (
        
        <section id="contact" className="mt-15 flex-grow mx-auto flex h-[60rem] z-20">
            <div className=" my-[10rem]  mx-auto min-w-[33rem] justify-items-center">
               
                    <h2 className="text-3xl font-bold mb-5 text-center text-contact">Get In Touch</h2>
                    <p className="text-lg text-center mb-10">Have a question or want to work together?</p>

                    <form onSubmit={handleSubmit} className="flex text-sm flex-col justify-items-center">
                        {/* Email Field */}
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2  font-semibold">Email</label>
                            <input type="email" autoComplete="new-password" id="email" name="email" onChange={handleChange} value={formData.email} className="bg-input text-white block w-full p-3 rounded-2xl" placeholder="John@example.com" />
                        </div>
                        {/* Subject Field */}
                        <div className="mb-6">
                            <label htmlFor="subject" className="block mb-2  font-semibold">Subject</label>
                            <input type="text" autoComplete="new-password" id="subject" name="subject" onChange={handleChange} value={formData.subject} className="bg-input text-white block w-full p-3 rounded-2xl" placeholder="Subject here" />
                        </div>
                        {/* Message Field */}
                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-2  font-semibold">Your Message</label>
                            <textarea id="message" name="message" onChange={handleChange} value={formData.message} rows="10" className="bg-input text-white block w-full p-3 rounded-2xl" placeholder="Write your thoughts here..." />
                        </div>
                        {/* Submit Button */}
                        <button type="submit" className="border-[#d7827e] border hover:bg-[#ebbcba] hover:text-[#191724] text-[#ebbcba] font-bold py-2 px-4 rounded w-[15rem] mx-auto rounded-xl">Send Message</button>
                    </form>
                
            </div>
        </section>


    );
  }
  