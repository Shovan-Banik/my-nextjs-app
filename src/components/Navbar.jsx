import Link from "next/link";

const navLinks=[
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/about',
        title: 'About'
    },
    {
        path: '/profile',
        title: 'Profile'
    },
    {
        path: '/blog',
        title: 'Blog'
    },
    {
        path: '/dashboard',
        title: 'Dashboard'
    },

]
const Navbar = () => {
    return (
        <nav className="flex items-center justify-between container mx-auto">
            <h1 className="text-2xl font-semibold">My-nextjs-app</h1>
            <ul className="flex items-center justify-center">
                {navLinks.map(({path,title})=>(
                    <li className="mx-2" key={path}>
                        <Link href={path}>{title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;