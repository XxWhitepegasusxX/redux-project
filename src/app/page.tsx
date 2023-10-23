import products from "@/data/products"
export default function Home() {
  return (
    <main className="w-full h-full">
      {products.map(product => (
        <h1>{product.name}</h1>
      ))}
    </main>
  )
}
