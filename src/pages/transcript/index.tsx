import Layout from "@/components/Layout"
import BackButton from "@/components/BackButton"
export default function transcript() {
    return (
        <>
            <Layout>
                <div className="container pt-10">
                    <div className="-ml-5">
                        <BackButton />
                    </div>
                    <ul className="flex py-10">
                        <li><a href="/">Home<span className="mx-2 font-bold text-secondary-2">.</span></a></li>
                        <li><a href="#">Video Transcript</a></li>
                    </ul>
                    <h1 className="mb-8 font-medium text-2xl">Video Transcript - Resist Ableism by Haben Girma (Keynote Speaker, 2022 Conference)</h1>
                    <div className="mb-12">
                        <p> <span className="ml-12">And</span> through a friend of a friend,a manager believed in my abilities and hired me to work at the front desk of a small gym in Juneau,Alaska.And that summer I learned a lot about gym equipment.</p>
                        <p className="my-5"><span className="ml-12">A woman </span>came up to the front desk and said a treadmill isn't working. I followed her to the treadmill.I put down my white cane and I felt the machine from top to bottom,near the bottom. There was a switch. I flicked the switch and the machine were to life. She told me,oh my goodness.I didn't see that switch.I told her I didn't see it either.
                        </p>
                        <p className="my-5"><span className="ml-12">Sometimes</span>tactile techniques,beat visual techniques.We want employers to know that disabled people are talented.If we can't see the button or switch,we'll feel the button or switch.Disabled people are talented and we need to fight ableism.
                        </p>
                        <p><span className="ml-12">The beliefs </span>that only able bodied people can be successful.That's the problem.Those beliefs are the problem.We need to remove them.And instead believe that disabled people are talented.
                        </p>
                        <p className="my-5"> <span className="ml-12">Ableism</span> is a system of beliefs and practices that say disabled people are inferior to non disabled people.We're not inferior.Everyone is different. Disability is part of the human experience. But ableism has been so widespread that a lot of employers assume that disabled people can't do jobs and people who design apps and websites assume that blind and disabled people would never be able to use them.Those assumptions,those practices are ableism and we have to learn to resist ableism.
                        </p>
                    </div>
                </div>
            </Layout>
        </>
    )
}