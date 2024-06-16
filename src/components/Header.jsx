function Header() {
    return (
        <header className="bg-secondary w-full h-full pt-24 pb-20">
            <div>
                <div className="avatar w-52 h-52 rounded-full mx-auto mb-12">
                    {/* image goes here */}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-white mx-auto text-center text-5xl leading-snug font-extrabold">
                    I do code and specialised <br /> in <span className="about-it">frontend development!</span>
                </h1>
                <p className="text-center text-secondary-text text-lg flex items-center justify-center mt-10 max-w-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, saepe et, obcaecati optio quod amet eos asperiores tenetur nam ducimus placeat! Perferendis illum molestias quasi consequuntur. Dicta, consequuntur? Omnis, in.
                </p>
            </div>
            <div className="flex justify-center items-center mt-10 gap-4">
                <button
                    className="py-4 px-7 bg-white rounded-full text-black text-xl font-bold hover:bg-black hover:border-black hover:text-white duration-100"
                >
                    Get in Touch
                </button>
                <button
                    className="py-4 px-7 bg-primary rounded-full text-white text-xl font-bold hover:bg-white hover:border-white hover:text-black duration-100"
                >
                    Download CV
                </button>
            </div>
            <div className="flex flex-col justify-center items-center mt-16 mb-12">
                <h1 className="text-xl text-secondary-text tracking-[0.3em]">
                    EXPERIENCE WITH
                </h1>
                <div className="flex gap-12 mt-12">
                    <i className="fa-brands fa-js text-5xl text-gray-200"></i>
                    <i className="fa-brands fa-react text-5xl text-gray-200"></i>
                    <i className="fa-brands fa-node text-5xl text-gray-200"></i>
                    <i className="fa-brands fa-css3 text-5xl text-gray-200"></i>
                    <i className="fa-brands fa-vuejs text-5xl text-gray-200"></i>
                </div>
            </div>
        </header>
    );
}

export default Header