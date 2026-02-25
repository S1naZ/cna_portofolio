import HeaderButton from "../Utils/Buttons.tsx";
import {LinkIcon,GithubIcon,LightModeIcon,DarkModeIcon} from '../svg/svgExport.tsx'
import {useEffect, useState} from "react";

const Header = () => {

    const [lightMode, setLightMode] = useState(true)
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(()=>{setCurrentTime(new Date())})


        return () => clearInterval(timer)

    }, []);

    return (
        <>
            <div className="
            sticky
            flex
            justify-center
            top-0
            w-full
            h-[60px]
            border-b-[1px]
            border-b-[#e4e4e7]/50


            bg-white/30 backdrop-blur-sm">

                <div className="

                bock
                
                flex
                justify-between


                w-[1750px]
                h-full
                m-auto
                border-x-[#e4e4e7]/50
                border-x-[1px]

                ">

                    <div className="
                    flex
                    items-center


                    w-150

                    ">

                        <img
                            src={'https://i1.sndcdn.com/avatars-000130915411-sbusk7-t500x500.jpg'}
                            alt="pfp"

                            className="
                                block
                                relative
                                p-2

                                rounded-full
                                h-full

                                "/>

                        <a href={"/"} className=" flex ml-2 font-bold">
                            Sina Zarei Portofolio
                        </a>

                        <a href="/"  className="ml-5">
                            home
                        </a>
                        <a href="/" className={"flex ml-5 items-center"}>
                            linkedin
                            <LinkIcon style={"scale-72"}/>
                        </a>
                        <a href="/" className={"flex ml-5 items-center"}>
                            Resume
                            <LinkIcon style={"scale-72"}/>
                        </a>

                    </div>  {/********************************* left section *************************************/}

                    <div className="

                    flex
                    flex-row-reverse
                    items-center

                    w-160


                    ">
                        <HeaderButton style="mx-2">
                            <GithubIcon />
                        </HeaderButton>

                        <HeaderButton
                            style={`mx-2 ${lightMode? "bg-white":"bg-black"}`}
                            onClick={()=>setLightMode(!lightMode)}
                        >
                            {lightMode?
                                <LightModeIcon/>
                                :
                                <DarkModeIcon/>
                            }
                        </HeaderButton>

                        {/*<HeaderButton style="mx-2">*/}
                        {/*    <MusicNoteIcon/>*/}
                        {/*</HeaderButton>*/}

                        <div className="
                            flex
                            items-center
                            justify-start
                            w-[120px]
                            pl-3
                            gap-4
                            h-[40px]
                            border
                            border-[#e4e4e7]
                            rounded-[20px]
                            bg-[#f4f4f580]
                        ">

                            <div className="flex justify-center">
                              <span className="relative flex h-3 w-3">
                                <span
                                    className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"
                                ></span>
                                <span
                                    className="relative inline-flex h-3 w-3 rounded-full bg-green-500"
                                ></span>
                              </span>
                            </div>
                            <span>
                                    {currentTime.toLocaleTimeString('en-IR', {
                                        hour12: false,
                                    })}
                                </span>

                        </div>


                    </div>
                    {/********************************* right section *************************************/}

                </div>
            </div>
        </>
    )
}

export default Header;