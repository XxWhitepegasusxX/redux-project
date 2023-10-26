import { remove } from "@/redux/features/cart-slice"
import { useAppDispatch } from "@/redux/store"
import { useState } from "react"
import toast from "react-hot-toast"

interface CartProductProps{
    id: string,
    name: string,
    price: number,
    imageUrl: string,
}

export function CartProduct({id, name, price, imageUrl}: CartProductProps) {
    const [value, setValue] = useState(1)
    const dispatch = useAppDispatch()
    const handleMinus = () => {
        if(value > 1){
            setValue(value - 1)
            return;
        }
        dispatch(remove(id))
        toast.success("Item removido")
    }
    return (
        <div className="container w-full h-auto grid grid-cols-4 gap-0.5 items-center shadow-lg border border-neutral-400/50 rounded-lg p-1 xs:p-2 sm:p-4">
            <img className="aspect-square w-20 object-cover rounded-xl" src={imageUrl} alt={name} />
            <h3 className="font-bold text-black text-center">{name}</h3>
            <p className="text-black">R${price * value},00</p>
            <div className="text-black text-center grid justify-center">
                <p>Quantidade</p>
                <div className="flex items-center w-full border">
                    <button className="border p-1" onClick={handleMinus}>-</button>
                    <p className="bg-transparent m-auto w-6">{value}</p>
                    <button className="border p-1" onClick={() => setValue(value + 1)}>+</button>
                </div>
            </div>
        </div>
    )
}