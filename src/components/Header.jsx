
const Header =()=>{
    const navLinks = [
        {
            id:1,
            title: "ABOUT",
            Link: "/"
        },
        {
            id:2,
            title: "EXPERIENCE",
            Link: "#experience"
        },
        {
            id:3,
            title: "PROJECTS",
            Link: "#projects"
        },
        {
            id:4,
            title: "SKILLS",
            Link: "#skills"
        },
        {
            id:5,
            title: "CONTACT",
            Link: "#contact"
        },
    ]
    return( 
        <>
        <header className="fixed w-full flex justify-around items-center bg-header py-2">
            <div className="py-2 px-3 bg-background text-black font-semibold rounded-3xl text-base">
                <p className="">ZMS</p>
            </div>
            <nav>
            <ul className="flex justify-between gap-4 text-white text-medium text-sm ">
                {navLinks.map(ele => (
                    <li key={ele.id}>
                        <a href={ele.Link}>{ele.title}</a>
                    </li>
                ))}
            </ul>
            </nav>
        </header>
        <header className="flex justify-around items-center bg-header ">
            <div className="py-2 px-3 bg-background text-black font-semibold rounded-3xl text-base">
                <p className="">ZMS</p>
            </div>
            <nav>
                <ul className="flex justify-between gap-4 text-white text-medium text-sm ">
                    {navLinks.map(ele => (
                        <li key={ele.id}>
                            <a href={ele.Link}>{ele.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header;