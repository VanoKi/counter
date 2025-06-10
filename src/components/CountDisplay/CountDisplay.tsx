type Props = {
    count: number
}

export const CountDisplay = ({count}: Props) => {
    return (
        <div className={'counter-display'}>
            <span className={count >= 5 ? 'red' : 'black'}>{count}</span>
        </div>
    )
}