type Props = {
    title:string
    onClick: () => void
    className: string
    disabled: boolean
}

export const Button = ({title, onClick, className, disabled}: Props) => {
    return (
        <button className={className} onClick={onClick} disabled={disabled}>{title}</button>
    )
}