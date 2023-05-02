import React, { useRef, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Layout from "@/components/Layout";
import NextImage from "@/components/NextImage";
import Link from "next/link";
import {
    MapPinIcon,
    EnvelopeIcon,
    PhoneIcon
} from "@heroicons/react/24/solid";

export default function Contactus() {
    const form = useRef<HTMLFormElement>(null);
    const [message, setMessage] = useState('');
    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm(
            `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
            `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
            form.current!,
            `${process.env.NEXT_PUBLIC_EMAILJS_USER_ID}`
        )
            .then((result) => {
                console.log(result.text);
                console.log("Message sent");
                setMessage('Thanks, your message has been sent');
                // Clear input fields
                const nameInput = form.current?.elements.namedItem('user_name') as HTMLInputElement;
                const emailInput = form.current?.elements.namedItem('user_email') as HTMLInputElement;
                const messageInput = form.current?.elements.namedItem('message') as HTMLTextAreaElement;

            }, (error) => {
                console.log(error.text);
                setMessage('There was an error sending your email,Please try again');
            });
    };

    return (
        <>
            <Layout>
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-0 py-20 px-20">
                        <div className="flex pt-20">
                            <div className="lg:mb-0">
                                <h1><span className='text-[20px] font-semibold '>Hey There!</span><br /><br /><span className='font-semibold text-5xl'>Get In Touch With us</span></h1>
                                <div className='my-12'>
                                    <p className='text-[20px] flex'>
                                        <PhoneIcon
                                            className="h-8 w-8 text-primary-3 stroke-[0.8] mr-5"
                                            aria-label='Phone number Icon'
                                            stroke="currentColor"
                                        />+254 703-619-044</p>
                                    <p className='text-[20px] flex my-12'>
                                        <EnvelopeIcon
                                            className="h-8 w-8 text-primary-3 stroke-[0.8] mr-5"
                                            aria-label='Phone number Icon'
                                            stroke="currentColor"
                                        />
                                        <a className='underline' href="mailto: a11y@inable.org">a11y@inable.org</a>
                                    </p>
                                    <p className='text-[20px] flex'><MapPinIcon
                                        className="h-8 w-8 text-primary-3 stroke-[0.8] mr-5"
                                        aria-label='Location Icon'
                                        stroke="currentColor"
                                    />
                                        Adlife Plaza, Ring Road, Kilimani<br /> Nairobi, Kenya</p>

                                </div>

                            </div>
                        </div>
                        <div>
                            <form className="bg-white shadow py-10 px-10 rounded-md" onSubmit={sendEmail} ref={form}>
                                <h2 className='text-4xl font-semibold'>Contact us</h2>
                                <p><span className='inline-block text-primary mt-8 mb-3'>*</span>Required Fields</p>
                                <p className="text-secondary mb-3" role="alert">{message}</p>
                                <label htmlFor='fullname'>Name</label><br />
                                <input
                                    id="fullname"
                                    className='form-input border border-black w-full mb-7 rounded py-3 pl-5'
                                    type="text"
                                    autoComplete="given_name"
                                    name="user_name"
                                /><br />
                                <label
                                    htmlFor="email">
                                    <span className='inline-block text-primary'>*</span>Email</label> <br />
                                <input
                                    type="email"
                                    className='form-input border border-black w-full rounded pl-5 py-3 mb-7'
                                    id="email"
                                    name="user_email" /> <br />
                                <label
                                    htmlFor="message">
                                    <span className='inline-block text-primary'>*</span>Message</label> <br />
                                <textarea
                                    id="message"
                                    className='form-input border border-black w-full pl-5 py-3 rounded min-h-[130px] mb-7'
                                    name="message" /><br />
                                <div className="flex">
                                    <button
                                        type="submit"
                                        className='font-semibold text-sm bg-secondary text-white px-8 py-4 mr-10 rounded'>SEND MESSAGE</button>
                                    <button
                                        className='border font-semibold text-sm border-black px-8 py-4 rounded'>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
