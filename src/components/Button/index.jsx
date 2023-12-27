export default function index(props) {
  return (
    <button
      className={props.className}
      onClick={props.onClick}  
    >
        {props.children}
    </button>
  )
}
