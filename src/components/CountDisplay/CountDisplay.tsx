type Props = {
    a: number
}

export const CountDisplay = ({a}: Props) => {
    return (
        <div className={'counter-display'}>
            <span className={a >= 5 ? 'red' : 'black'}>{a}</span>
        </div>
    )
}