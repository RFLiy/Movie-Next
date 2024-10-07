import Link from "next/link"
import InputSearch from "./Input Search"

const Navbar = () => {
    return (
        <header className="bg-color-secondary">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
                <Link href="/" className="font-bold text-2xl text-color-accent">Anime List</Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default Navbar