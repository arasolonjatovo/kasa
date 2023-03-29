import './index.scss'

export default function Card({ imageUrl, title }) {
  return (
    <article className="accommodation">
      <img src={imageUrl} alt="un de nos logements" />
      <div className="accommodation__layer">
        <p className="accommodation__title">{title}</p>
      </div>
    </article>
  )
}
