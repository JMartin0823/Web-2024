import './Button.css'
export const Button = (props) => {
  const { title, type, onClick, uid } = props

  const handleClick = () => onClick(type)

  return (
    <button
      onClick={handleClick}
      className='button'
      id={uid}
    >
      {title}

    </button>
  )
}
