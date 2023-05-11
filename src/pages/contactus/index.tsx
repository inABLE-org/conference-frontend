import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Fetcher } from "@/utils/fetcher";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function Contactus() {
  const [response, setResponse] = useState("");
  const [sending, setSending] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    // send contact form
    const formValues = {
      name: event.target.from_name.value,
      email: event.target.reply_to.value,
      message: event.target.message.value,
    };
    try {
      setSending(true);
      setResponse("Sending message.....");
      const res = fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then(async () => {
        //save data to CMS
        const MessageCreated: any = await Fetcher(
          `mutation CreateConferenceContactMessage($name: String!, $email: String!, $message: String!) {
                        create_conference_contact_messages_item(data: {
                            status:"published"
                            name: $name,
                            email: $email,
                            message: $message,
                        }) {
                            id
                        }
                    }
                `,
          { ...formValues }
        );
        event.target.reset();
        setResponse("Message Received! Thank you");
      });
    } catch (error) {
      setResponse("An Error occurred! Try again later.");
    }

    setSending(false);
  };
  return (
    <>
      <Layout pageTitle="Contact Us">
        <div className="container pt-28 pb-44">
          <div className="grid lg:grid-cols-2 gap-0 lg:px-20">
            <div className="flex items-center">
              <div className="pb-10">
                <p className="text-xl font-semibold mb-2">Hey There!</p>
                <h1 className="font-semibold text-5xl mb-14">
                  Get In Touch With us
                </h1>
                <dl className="text-xl flex flex-col space-y-14">
                  <div className="flex space-x-7">
                    <dt>
                      <PhoneIcon
                        className="h-7 w-7"
                        aria-label="Phone number"
                        aria-hidden="false"
                      />
                    </dt>
                    <dd>+254 703-619-044</dd>
                  </div>
                  <div className="flex space-x-7">
                    <dt>
                      <EnvelopeIcon
                        className="h-7 w-7"
                        aria-label="Email"
                        aria-hidden="false"
                      />
                    </dt>
                    <dd>
                      <a className="underline" href="mailto:a11y@inable.org">
                        a11y@inable.org
                      </a>
                    </dd>
                  </div>
                  <div className="flex space-x-7">
                    <dt>
                      <MapPinIcon
                        className="h-7 w-7"
                        aria-label="Location"
                        aria-hidden="false"
                      />
                    </dt>
                    <dd>
                      Adlife Plaza, Ring Road, Kilimani
                      <span className="block">Nairobi, Kenya</span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div>
              <form
                className="bg-white shadow-contact-card py-10 px-7 rounded"
                onSubmit={onSubmit}
              >
                <h2 className="text-4xl font-semibold">Contact Us</h2>
                <p role="text" className="my-3">
                  <span className="text-danger font-bold">*</span>
                  Required Fields
                </p>
                <p
                  className="font-semibold my-3"
                  aria-live="assertive"
                  id="alertresponse"
                >
                  {response}
                </p>
                <div className="flex flex-col space-y-7">
                  <div>
                    <label htmlFor="fullname" className="text-xl mb-2">
                      Full Name
                    </label>
                    <input
                      id="fullname"
                      className="border border-ash-7 w-full rounded p-3 h-11"
                      type="text"
                      autoComplete="name"
                      name="from_name"
                    />
                  </div>
                  <div>
                    <label className="text-xl mb-2" htmlFor="email">
                      <span role="text">
                        <span className="text-danger">*</span>Your Email Address
                      </span>
                    </label>
                    <input
                      type="email"
                      required
                      className="border border-ash-7 w-full rounded p-3 h-11"
                      id="email"
                      autoComplete="email"
                      name="reply_to"
                    />
                  </div>
                  <div>
                    <label className="text-xl mb-2" htmlFor="message">
                      <span role="text">
                        <span className="text-danger">*</span>Your Message
                      </span>
                    </label>
                    <textarea
                      id="message"
                      required
                      className="border border-ash-7 w-full rounded p-3"
                      name="message"
                      rows={3}
                    />
                  </div>
                  <div className="flex space-x-12">
                    <button
                      type="submit"
                      className="font-semibold bg-secondary text-white px-6 py-4 rounded"
                      disabled={sending}
                    >
                      Send Message
                    </button>
                    <button
                      type="reset"
                      className="border font-semibold border-secondary px-6 py-4 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
