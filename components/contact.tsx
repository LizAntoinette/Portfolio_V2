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
    
        const recipient = 'lizanguren12@gmail.com';
        const subject = encodeURIComponent((document.getElementById('subject') as HTMLInputElement).value);
        const body = encodeURIComponent(formData.message);
        
        // Open default email client with pre-filled fields
        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    };

        
        return (
        
        <section id="contact" className="flex min-h-screen w-full flex-grow items-center py-20 sm:py-24 lg:py-28 z-20">
            <div data-aos="fade-up" className="mx-auto w-[min(33rem,calc(100vw_-_2rem))] justify-items-center">
               
                    <h2 className="text-3xl font-bold mb-5 text-center text-contact">Get In Touch</h2>
                    <p className="text-base text-center mb-10 sm:text-lg">Have a question or want to work together?</p>

                    <form onSubmit={handleSubmit} className="flex w-full text-base flex-col justify-items-center">
                
                        {/* Subject Field */}
                        <div className="mb-6">
                            <label htmlFor="subject" className="block mb-2  font-semibold">Subject</label>
                            <input type="text" autoComplete="new-password" id="subject" name="subject" onChange={handleChange} value={formData.subject} className="bg-input block w-full p-4 leading-6 rounded-2xl" placeholder="Subject here" />
                        </div>
                        {/* Message Field */}
                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-2  font-semibold">Your Message</label>
                            <textarea id="message" name="message" onChange={handleChange} value={formData.message} rows={10} className="bg-input block w-full p-4 leading-6 rounded-2xl" placeholder="Write your thoughts here..." />
                        </div>
                        {/* Submit Button */}
                        <button type="submit" className="outline-action send-action border mt-4 font-bold py-3 px-4 w-full sm:w-[15rem] mx-auto rounded-xl">Send Message</button>
                    </form>
                
            </div>
        </section>


    );
  }
