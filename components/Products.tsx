
const products = [
  {
    name: 'Hair Serum',
    price: '₪149',
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Luxury Shampoo',
    price: '₪119',
    image: 'https://images.unsplash.com/photo-1556228578-dd6f1c74d7a2?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Beauty Cream',
    price: '₪179',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop'
  }
]

export default function Products() {
  return (
    <section className="productsSection">
      <div className="sectionTitle">
        <h2>המוצרים שלנו</h2>
      </div>

      <div className="productsGrid">
        {products.map((product, i) => (
          <div className="productCard" key={i}>
            <img src={product.image} alt={product.name} />
            <div className="productInfo">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button>הוסף לסל</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
