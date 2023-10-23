import { ProductCard } from "@/components/molecules"
import products from "@/data/products"

export default function Home() {
  return (
    <main className="w-full h-full px-2 grid grid-cols-1 gap-4 xxs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-10 lg:px-10">
      {products.map((product, index) => (
        <ProductCard key={product.name + index} name={product.name} imageUrl={product.imageUrl} price={product.price} />
      ))}
    </main>
  )
}
