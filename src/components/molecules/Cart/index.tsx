import { useAppSelector } from "@/redux/store";
import { XCircleIcon } from "@heroicons/react/24/outline";

interface CartProps{
    setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>

}

export function Cart({setIsCartOpen}: CartProps){
    const username = useAppSelector(state => state.authReducer.value.username)

    return(
        <div className="fixed bg-black/50 bottom-0 left-0 w-screen h-screen transition-all duration-200">
            <div className="bg-white shadow-2xl py-6 fixed z-10 top-0 right-0 w-1/3 h-screen">
                <div className="header flex justify-between text-slate-900 px-5">
                    <h2 className="font-bold text-2xl">Seu carrinho{username ? `(${username})` : ''}</h2>
                    <XCircleIcon onClick={() => setIsCartOpen(false)} className="hover:text-red-800 cursor-pointer duration-200" width={30}/>
                </div>
                <div className="grid grid-cols-1">
                    
                </div>
            </div>
        </div>
    )
}