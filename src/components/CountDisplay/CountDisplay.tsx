type Props = {
    counter: number
}

export const CountDisplay = ({counter}: Props) => {
    return (
        <div className={'counter-display'}>
            <span className={counter >= 5 ? 'red' : 'black'}>{counter}</span>
        </div>
    )
}