export default function Header() {
    return (
        <header className="bg-white p-4 flex justify-between h-[80px]">
            <div><h1 className="text-pink-400 font-bold text-3xl pl-28">Prehqsy</h1></div>
            <div>
                <nav className="text-gray-500 pt-3">
                    <ul className="list-none flex">
                        <a href="#about"><li className="pr-10 hover:text-pink-500">ABOUT</li></a>
                        <a href="#"><li className="pr-10 hover:text-pink-500">SKILLS</li></a>
                        <a href="#"><li className="pr-10 hover:text-pink-500">EXPERIENCE</li></a>
                        <a href="#"><li className="pr-10 hover:text-pink-500">PROFILE</li></a>
                        <a href="#"><li className="pr-10 hover:text-pink-500">PORTFOLIO</li></a>
                        <a href="#"><li className="pr-28 hover:text-pink-500">CONTACT</li></a>
                    </ul>
                </nav>
            </div>
        </header>
    );
}