import { CartProduct, If } from "@/components/atoms";
import { useAppSelector } from "@/redux/store";
import { XCircleIcon } from "@heroicons/react/24/outline";

interface CartProps{
    setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function Cart({setIsCartOpen}: CartProps){
    const cartList = useAppSelector(state => state.cartReducer.value)
    console.log(JSON.stringify(cartList))

    return(
        <div className="fixed bg-black/50 bottom-0 left-0 w-screen h-screen transition-all duration-200">
            <div className="bg-slate-100 shadow-2xl py-6 fixed z-10 top-0 right-0 w-full sm:w-2/3 lg:w-1/3 h-screen">
                <div className="header flex justify-between text-slate-900 px-5">
                    <h2 className="font-bold text-2xl">Seu carrinho</h2>
                    <XCircleIcon onClick={() => setIsCartOpen(false)} className="hover:text-red-800 cursor-pointer duration-200" width={30}/>
                </div>
                <div className="grid grid-cols-1 mt-10 justify-center w-full p-0 xs:px-2">
                    <If condition={cartList}>
                        {cartList.map((product, index) => (
                            <CartProduct key={product.name + index} name={product.name} id={product.id} imageUrl={product.imageUrl} price={product.price} />
                        ))}
                    </If>
                </div>
                <div className="absolute flex justify-center pb-5 w-full h-auto bottom-0">
                    <button className="bg-gray-800 text-neutral-200 px-5 py-2 rounded-full">Finalizar compra</button>
                </div>
            </div>
        </div>
    )
}