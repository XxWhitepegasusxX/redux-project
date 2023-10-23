import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function Header(){
    return (
        <header className="w-full fixed top-0 text-neutral-200 bg-slate-700 flex items-center justify-between p-4">
            <Link href={"/"}>
                <h1 className="hover:text-neutral-400 duration-200 cursor-pointer font-bold text-2xl">Redux Shopping</h1>
            </Link>
            <div className="actions text-lg flex items-center gap-4">
                <p className="hover:text-neutral-400 duration-200 cursor-pointer">Login</p>
                <ShoppingCartIcon className="hover:text-neutral-400 duration-200 cursor-pointer" width={25}/>
            </div>
        </header>
    )
}