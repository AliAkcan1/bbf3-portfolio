function Footer() {
    return (
        <footer className="w-full pt-20 pb-10 bg-primary flex justify-center">
            <div className="max-w-[676px]">
                <h1 className="text-white font-extrabold font-5xl">Contact</h1>

                <p className="text-secondary-text text-sm mt-6 font-extralight">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum omnis sapiente quibusdam quaerat illo, sit modi culpa, eius eligendi cumque natus, excepturi odio itaque voluptate. Suscipit commodi excepturi quae cumque!</p>
                <span className="flex mt-4 items-center">
                    <i className="fa-sharp fa-regular fa-envelope text-white h-fit mr-1"></i>
                    <p className="text-secondary-text text-sm font-semibold">ali406akcan@gmail.com</p>
                </span>
                <ul className="flex gap-6 mt-8">
                    <li>
                        <a href="/">
                            <i className="fa-brands fa-x-twitter text-white text-xl"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/AliAkcan1">
                            <i className="fa-brands fa-github text-white text-xl"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ali-akcan-41ba0925b/">
                            <i className="fa-brands fa-linkedin text-white text-xl"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer