import { useState } from "react"

interface CartProductProps{
    id: string,
    name: string,
    price: number,
    imageUrl: string,
}

export function CartProduct({id, name, price, imageUrl}: CartProductProps) {
    const [value, setValue] = useState(1)
    return (
        <div className="container w-full h-auto grid grid-cols-4 items-center shadow-lg border border-neutral-400/50 rounded-lg p-4">
            <img className="aspect-square w-20 object-cover rounded-xl" src={imageUrl} alt={name} />
            <h3 className="font-bold text-black text-center">{name}</h3>
            <p className="text-black">R${price},00</p>
            <div className="text-black text-center grid justify-center">
                <p>Quantidade</p>
                <div className="flex items-center w-full border">
                    <button className="border p-1" onClick={() => setValue(value - 1)}>-</button>
                    <input className="bg-transparent m-auto w-6" disabled type="number" name="quantity" value={value} />
                    <button className="border p-1" onClick={() => setValue(value + 1)}>+</button>
                </div>
            </div>
        </div>
    )
}