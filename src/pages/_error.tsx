import React from 'react';
import Layout from "@/components/Layout";

export default function Custom404() {
    return (
        <>
            <Layout>
                <div className='container'>
                    <div className="grid lg:grid-cols-2 gap-0 py-16">
                        <div className="p-4 flex h-50 items-center justify-center">
                            <div>
                                <h1 className='my-10 font-semibold text-6xl'>Page Not Found</h1>
                                <p className='text-center mx-[-20px]'>The Link you followed might be broken or the page<br />may have been removed</p>
                                <div className="mt-5 flex flex-col sm:flex-row lg:py-6 lg:px-6">
                                    <a href="/" className="px-4 py-3 bg-secondary-2 mx-5 rounded-md text-white font-semibold mb-3 sm:mb-0 sm:mr-5">Go back to Homepage</a>
                                    <a href="#" className="px-4 text-sm py-3 bg-white rounded-md border-t-2 border-b-2 rounded-lg border border-secondary font-semibold mx-5">Contact us</a>
                                </div>
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