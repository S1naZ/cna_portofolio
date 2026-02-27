import SideBar from "./SideBar.tsx";

const MainPage = () => {
    return (
        <>
            <div className="

                flex

                w-[1750px]
                max-md:w-full

                mx-auto
                h-[1080px]

                border-x-[#e4e4e7]/50
                border-x-[1px]
          ">

                <SideBar/>

                <div className="flex flex-col w-[1510px] py-8 px-10 ">

                    <h2 className="text-[50px] font-bold">
                        Sina Zarei
                    </h2>

                    <h3 className="text-[30px] mb-4 font-bold text-black/50">
                        Writing code for the web and crafting stories for games
                    </h3>

                    <p className="block w-[95%] text-[1.3rem]">
                        CS Student & Full-Stack Developer. I prototype in Figma, code in React/Next.js, and power the backend with Express.js and MongoDB.
                        Building web apps that are as functional as they are beautiful. 🚀<br/>
                        Also passionate about game development—love exploring game mechanics, interactive storytelling, and the creative challenge of building immersive virtual worlds in my free time. 🎮✨

                    </p>

                </div>

            </div>
        </>
    )
}

export default MainPage;