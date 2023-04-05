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
                            <div className='my-10 mx-12'>
                                <a href="/"className='bg-secondary-2 p-3'>Go back to Homepage</a>
                                <a href="#" className="bg-white rounder border-secondary p-3 mx-10">Contact Us</a>
                            </div>
                            
                            </div>        
                        </div>
                        <div className="p-4 h-50">
                            <img alt="" height="200px" src='/assets/img/error404.png'/>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}