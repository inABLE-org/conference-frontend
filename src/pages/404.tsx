import React from "react";
import Layout from "@/components/Layout";
import NextImage from "@/components/NextImage";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Layout pageTitle="Page Not Found">
        <div className="container pt-44 pb-64">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="flex items-center">
              <div className="mb-20 lg:mb-0 text-center">
                <h1 className="mb-5 font-semibold text-6xl">Page Not Found</h1>
                <p className="lg:w-9/12 mx-auto">
                  The Link you followed might be broken or the page may have
                  been removed
                </p>
                <Link
                  href={"/"}
                  className="bg-secondary rounded py-4 px-8 font-semibold text-white mx-1 xs:mx-4 w-fit mt-10 inline-block"
                >
                  Go to Homepage
                </Link>
                <Link
                  href={"/contactus"}
                  className="border border-secondary rounded py-4 px-8 font-semibold mx-1 xs:mx-4 w-fit mt-10 text-sm inline-block"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div>
              <NextImage
                src="/assets/img/error404.png"
                className="h-[50vw] md:max-h-[41.5vw]"
                imgClass="object-contain"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
