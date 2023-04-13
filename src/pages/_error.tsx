import React from 'react';
import Layout from "@/components/Layout";

export default function Custom404() {
    return (
        <>
            <Layout>
                <div className='container'>
                    <div className="grid lg:grid-cols-2 gap-0 py-10">
                        <div className="p-4">
                            <div>
                                <h1 className='my-10 font-semibold text-6xl lg:text-center md:text-center sm:mx-5'>Page Not Found</h1>
                                <p className='text-center mx-[-20px]'>The Link you followed might be broken or the page<br />may have been removed</p>
                            </div>
                            <div className="flex justify-center mt-11">
                                <a
                                    href="/"
                                    className="bg-secondary rounded py-4 px-8 font-semibold text-white"
                                >
                                    Go to Homepage
                                </a>
                            </div>
                        </div>
                        <div className="p-4 h-50">
                            <img alt="" height="200px" src='/assets/img/error404.png' />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}