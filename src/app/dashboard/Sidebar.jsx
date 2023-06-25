import Link from "next/link";

const navLinks=[
    {
        path:'/dashboard',
        title:'Dashboard'
    },
    {
        path:'/dashboard/addProduct',
        title:'Add product'
    },
    {
        path:'/dashboard/manageProduct',
        title:'Manage product'
    },
    {
        path:'/',
        title:'Home'
    }
]
const Sidebar = () => {
    return (
        <aside className="mr-10">
            <h2 className="2xl font-semibold">Dashboard</h2>
            <ul>
               {
                navLinks.map(({path,title})=><li key={path}>
                    <Link href={path}>{title}</Link>
                </li>)
               }
            </ul>
        </aside>
    );
};

export default Sidebar;
