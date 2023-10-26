import { add } from "@/redux/features/cart-slice";
import { useAppDispatch } from "@/redux/store";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

interface ProductCardProps{
    id: string;
    name: string,
    price: number,
    imageUrl: string,
}

export function ProductCard({id, name, price, imageUrl}: ProductCardProps){
    const dispatch = useAppDispatch()
    
    const item: ProductCardProps = {id, name, price, imageUrl}

    const handleAddToCart = () => {
        toast.success("Item adicionado ao carrinho!")
        dispatch(add(item))
    }

    return (
        <div className="container mb-10 w-full h-auto">
            <div className="image cursor-pointer group relative w-full h-full">
                <img className="rounded-lg h-full shadow-lg object-cover" src={imageUrl} alt={name} />
                <div className="absolute rounded-lg bottom-0 flex justify-center py-4 items-end w-full h-full bg-slate-800/50 transition-all duration-200 opacity-0 group-hover:opacity-100">
                    <button onClick={handleAddToCart} className="bg-gray-800 px-2 py-3 text-sm rounded-full flex items-center justify-center text-neutral-200 gap-1">
                        <ShoppingCartIcon width={20}/>
                        <p>Adicionar ao carrinho</p>
                    </button>
                </div>
            </div>
            <div className="flex items-center mt-1 justify-between font-semibold w-full text-sm">
                <p className="cursor-pointer">{name}</p>
                <p className="cursor-pointer">R${price},00</p>
            </div>
        </div>
    )
}