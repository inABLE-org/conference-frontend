import React from "react";
import Layout from "@/components/Layout";
import NextImage from "@/components/NextImage";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Layout>
        <div className="container pt-44 pb-64">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="flex items-center">
              <div className="mb-20 lg:mb-0">
                <h1 className="mb-5 font-semibold text-6xl text-center">
                  Page Not Found
                </h1>
                <p className="text-center lg:w-9/12 mx-auto">
                  The Link you followed might be broken or the page may have
                  been removed
                </p>
                <Link
                  href={"/"}
                  className="bg-secondary rounded py-4 px-8 font-semibold text-white mx-auto block w-fit mt-10"
                >
                  Go to Homepage
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
