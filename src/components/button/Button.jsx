import './Button.css';

export function Button({type, onClick, caption}) {
    return (
        <button type={type} className="button-main" onClick={onClick}>
            {caption}
        </button>
    )
}