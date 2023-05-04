import React, { useRef, useState, FormEvent } from 'react';
import Layout from "@/components/Layout";
import { Fetcher } from '@/utils/fetcher';
import {
    MapPinIcon,
    EnvelopeIcon,
    PhoneIcon
} from "@heroicons/react/24/solid";

type FormValues = {
    name: string;
    email: string;
    message: string;
  };
export default function Contactus() {  
    const [response, setResponse] = useState("");
    const [sending, setSending] = useState(false);
    const resetForm = () => {
        formRefs.current.name.value = "";
        formRefs.current.email.value = "";
        formRefs.current.message.value = "";
      };
    const formRefs = useRef<Record<string, HTMLInputElement | HTMLTextAreaElement>>({});
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // send contact form
        const formValues: FormValues = {
            name: formRefs.current.name.value,
            email: formRefs.current.email.value,
            message: formRefs.current.message.value,
          };
          try {
            setResponse("Sending your message.....")
            const res = await fetch("/api/contact", {
              method: "POST",
              body: JSON.stringify(formValues),
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            });
            //save data to CMS
            if (!sending) {
                setSending(true);
                  const MessageCreated: any = await Fetcher(
                    `
                    mutation CreateConferenceContactMessage($name: String!, $email: String!, $message: String!) {
                        create_conference_contact_messages_item(data: {
                            name: $name,
                            email: $email,
                            message: $message,
                        }) {
                            name
                            email
                            message
                        }
                    }
                `,
                    {
                      name: formRefs.current.name.value,
                      email:formRefs.current.email.value,
                      message:formRefs.current.message.value
                    }
                  );
          
                  
                }
            const data = await res.json();
            //set status message to response 
            setResponse(data.message);
            resetForm()
          } catch (error) {
            console.error(error);
            setResponse("An Error occurred while submitting the form.");
          }
    };

    return (
        <>
            <Layout>
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-0 py-20 lg:px-20">
                        <div className="flex pt-20">
                            <div className="lg:mb-0">
                                <h1><span className='text-[20px] font-semibold '>Hey There!</span><br /><br /><span className='font-semibold text-5xl'>Get In Touch With us</span></h1>
                                <div className='my-12'>
                                    <p className='text-[20px] flex'>
                                        <PhoneIcon
                                            className="h-8 w-8 text-primary-3 stroke-[0.8] mr-5"
                                            aria-hidden="false"
                                            id='phonenumbericon'
                                            role='img'
                                            aria-label='Phone number'
                                            stroke="currentColor"
                                        /><span aria-aria-labelledby='phone number'>+254 703-619-044</span></p>
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
                            <form className="bg-white shadow py-10 px-10 rounded-md" onSubmit={onSubmit}>
                                <h2 className='text-4xl font-semibold'>Contact us</h2>
                                <p className='font-semibold my-3' role="alert" id="alertresponse">{response}</p>
                                <p><span className='inline-block text-secondary mt-8 mb-3 text-secondary font-bold'>*</span>Required Fields</p>
                                <label htmlFor='fullname' className='text-xl'>Full Name</label><br />
                                <input
                                    id="fullname"
                                    className='form-input border border-black w-full mb-7 rounded py-3 pl-5'
                                    type="text"
                                    autoComplete="name"
                                    name="from_name"
                                    ref={el => {
                                        if (el) {
                                            formRefs.current.name = el;
                                        }
                                    }}
                                /><br />
                                <label className='text-xl'><span className='text-secondary font-bold'>*</span>Email</label>
                                <input
                                    type="email"
                                    required
                                    className='form-input border border-black w-full rounded pl-5 py-3 mb-7'
                                    id="email"
                                    autoComplete='email'
                                    ref={el => {
                                        if (el) {
                                            formRefs.current.email = el;
                                        }
                                    }}
                                    name="reply_to" /> <br />
                                <label
                                    className='text-xl'
                                    htmlFor="message">
                                    <span className='text-secondary font-bold'>*</span>Message</label> <br />
                                <textarea
                                    id="message"
                                    required
                                    ref={el => {
                                        if (el) {
                                            formRefs.current.message = el;
                                        }
                                    }}
                                    className='form-input border border-black w-full pl-5 py-3 rounded min-h-[130px] mb-7'
                                    name="message" /><br />
                                <div className="flex">
                                    <button
                                        type="submit"
                                        className='font-semibold text-sm bg-secondary text-white px-8 py-4 mr-10 rounded'>SEND MESSAGE</button>
                                    <button
                                        onClick={resetForm}
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
