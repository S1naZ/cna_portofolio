const SideBar =()=>{
    return (
        <>
            <div className="
                flex
                w-[239px]
                h-full
                border-r-1
                border-r-[#e4e4e7]/50

                 [&_a:hover]:bg-[#f4f4f5]
                 [&_a:active]:bg-[#f4f4f5]

                   [&_a]:w-full
                   [&_a]:block
                   [&_a]:mt-2
                   [&_a]:text-[16px]
                   [&_a]:rounded-lg
                   [&_a]:px-3
                   [&_a]:py-1
                   [&_a]:transition
                ">

                <ul
                    className= "flex flex-col h-fit w-[80%] ml-6 mt-8  text-[20px] ">

                    <div className="font-bold ml-3 mb-2">
                            Sections
                    </div>

                    <li>
                        <a href="">
                            Introductions
                        </a>
                    </li>
                    <li>
                        <a href="">
                            About me
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Projects
                        </a>

                    </li>
                    <li>
                        <a href="">
                            Skills & Tools
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Education
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Stats
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SideBar;