import {Button} from "../Button/Button.tsx";

type Props = {
    onclickIncHandler: () => void
    onclickResetHandler:  () => void
    count: number
}

export const ButtonPanel = ({onclickIncHandler, onclickResetHandler, count}: Props) => {
    return (
        <div className={'button-panel'}>
            <Button className={'counter-button'} title={'inc'} onClick={onclickIncHandler} disabled={count === 5}/>
            <Button className={'counter-button'} title={'reset'} onClick={onclickResetHandler} disabled={count === 0}/>
        </div>
    )
}