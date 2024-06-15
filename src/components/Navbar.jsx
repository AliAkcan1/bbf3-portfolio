function Navbar() {
    return (
        <nav className="h-20 bg-primary flex justify-center items-center">
            <ul className="text-white flex gap-20 text-base">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Projects</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar