import './index.scss'

export default function Card({ bgUrl, title }) {
  return (
    <article className="accommodation">
      <img src={bgUrl} alt="un de nos logements" />
      <div className="accommodation__layer">
        <p className="accommodation__title">{title}</p>
      </div>
    </article>
  )
}
