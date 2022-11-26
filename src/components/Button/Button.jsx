export const Button = ({onClick}) => {
    return (
        <button type="button" className="Button" onClick={onClick}>
          <span>Load more</span>
        </button>
    )
}