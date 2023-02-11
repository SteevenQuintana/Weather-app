interface Props {
  title: string
  img: string
  description: string
  unit: string
}

const Highlight = ({ title, img, description, unit }: Props) => {
  return (
    <div className="highlights">
      <h3>{title}</h3>
      <img src={img} alt="" />
      <p>
        {description} <span>{unit}</span>
      </p>
    </div>
  )
}

export default Highlight
