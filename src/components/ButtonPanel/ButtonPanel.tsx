import {Button} from "../Button/Button.tsx";

type Props = {
    onclickIncHandler: () => void
    onclickResetHandler:  () => void
    counter: number
}

export const ButtonPanel = ({onclickIncHandler, onclickResetHandler, counter}: Props) => {
    return (
        <div className={'button-panel'}>
            <Button className={'counter-button'} title={'inc'} onClick={onclickIncHandler} disabled={counter === 5}/>
            <Button className={'counter-button'} title={'reset'} onClick={onclickResetHandler} disabled={counter === 0}/>
        </div>
    )
}