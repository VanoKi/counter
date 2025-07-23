type Props = {
<<<<<<< HEAD
    count: number
}

export const CountDisplay = ({count}: Props) => {
    return (
        <div className={'counter-display'}>
            <span className={count >= 5 ? 'red' : 'black'}>{count}</span>
=======
    counter: number
}

export const CountDisplay = ({counter}: Props) => {
    return (
        <div className={'counter-display'}>
            <span className={counter >= 5 ? 'red' : 'black'}>{counter}</span>
>>>>>>> ver2
        </div>
    )
}