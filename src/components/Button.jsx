const Button = ({color, icon, click, disabled = false, children}) => {
  return (
    <button onClick={click} type="button" className={`btn ${color}`} disabled={disabled ? true : false}><span className={icon}></span> {children}</button>
  )
}

export default Button;