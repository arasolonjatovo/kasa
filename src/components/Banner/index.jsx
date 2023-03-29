import './index.scss'

export default function Banner({ imageUrl, desc, textLayout, className }) {
  return (
    <div className={className}>
      <img className="banner__bg" src={imageUrl} alt={desc} />
      <h1 className="banner__text-layout">{textLayout}</h1>
    </div>
  )
}
