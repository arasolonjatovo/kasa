import './index.scss'

export default function Card({ imgUrl, title }) {
  return (
    <article className="accommodation">
      <img src={imgUrl} alt="un de nos logements" />
      <div className="accommodation__layer">
        <p className="accommodation__title">{title}</p>
      </div>
    </article>
  )
}
