import './index.scss'

export default function Banner({ imageUrl, desc }) {
  return (
    <div className="banner">
      <img className="banner__bg" src={imageUrl} alt={desc} />
    </div>
  )
}
