import Layout from "@/components/Layout"
import BackButton from "@/components/BackButton"
export default function transcript() {
    return (
        <>
            <Layout>
                <div className="container pt-10">
                    <BackButton />
                    <ul className="flex py-10">
                        <li><a href="#">Home<span className="mx-2 font-bold">.</span></a></li>
                        <li><a href="#">Video Transcript</a></li>
                    </ul>
                </div>
            </Layout>
        </>
    )
}