
export default function Features() {
  const items = [
    'פורמולות פרימיום',
    'משלוחים מהירים',
    'טיפוח מקצועי',
    'חוויית יוקרה'
  ]

  return (
    <section className="features">
      {items.map((item, i) => (
        <div className="featureCard" key={i}>
          <h3>{item}</h3>
        </div>
      ))}
    </section>
  )
}
