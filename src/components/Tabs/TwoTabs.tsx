import { useState } from "react";
export default function TwoTabs(props:{linkOne:JSX.Element,linkTwo:JSX.Element,tab1content:JSX.Element,tab2Content:JSX.Element}) {
    const [openTab, setOpenTab] = useState(1);
    return (
        <>
          <div className="bg-primary pb-2">
            <div>
                <div className="flex flex-col items-center justify-center pt-6 ">
                    <ul className="flex space-x-2">
                        <li>
                            <a
                                href="#"
                                onClick={() => setOpenTab(1)}
                                className={` ${openTab === 1 ? "border-b-4 border-secondary" : ""} inline-block px-4 py-2`}
                            >
                                {props.linkOne}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                onClick={() => setOpenTab(2)}
                                className={` ${openTab === 2 ? "border-b-4 border-secondary" : ""} inline-block px-4 py-2`}
                            >
                                {props.linkTwo}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        {/*Tab content*/}
        <div className={`bg-white ${openTab === 1 ? "block" : "hidden"} min-h-300`}>
                {props.tab1content}
          </div>
          <div className={`${openTab === 2 ? "block" : "hidden"} bg-white`}>
                {props.tab2Content}
          </div>
        </>
    )
}