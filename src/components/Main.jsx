function Main() {
    return (
        <div className="flex flex-col justify-center items-center pb-24 bg-secondary">
            <h1 className="text-2xl font-black projects tracking-wider">
                PROJECTS
            </h1>
            <div className="mt-7 flex gap-7">
                <div className="w-80 h-72 bg-primary rounded-lg">
                    <div className="w-full h-60 bg-red-500 rounded-t-lg">

                    </div>
                    <div className="w-full px-[24px] py-1 flex">
                        <div className="flex flex-col">
                            <a href="/" className="font-bold text-secondary-text text-[10px]">CLICK HERE TO VISIT</a>
                            <a href="/" className="font-bold text-white text-[18px]">PROJECT ONE</a>
                        </div>
                        <div className="ml-auto flex items-center">
                            <a href="/">
                                <i className="fa-solid fa-sharp fa-arrow-right text-white font-5xl rotateArrow  "></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-80 h-72 bg-primary rounded-lg">
                    <div className="w-full h-60 bg-sky-500 rounded-t-lg">

                    </div>
                    <div className="w-full px-[24px] py-1 flex">
                        <div className="flex flex-col">
                            <a href="/" className="font-bold text-secondary-text text-[10px]">CLICK HERE TO VISIT</a>
                            <a href="/" className="font-bold text-white text-[18px]">PROJECT TWO</a>
                        </div>
                        <div className="ml-auto flex items-center">
                            <a href="/">
                                <i className="fa-solid fa-sharp fa-arrow-right text-white font-5xl rotateArrow  "></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main