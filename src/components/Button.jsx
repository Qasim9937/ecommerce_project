export default function Button({onClick,  style, target, href, className = '', text=''}){


    return(
        <a href={href} target={target}>
            <button onClick={onClick} className={className} style={style}>{text}</button>
        </a>
    )
}