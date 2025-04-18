import {Button} from "../Button/Button.tsx";

type Props = {
    onclickIncHandler: () => void
    onclickResetHandler:  () => void
    a: number
}

export const ButtonPanel = ({onclickIncHandler, onclickResetHandler, a}: Props) => {
    return (
        <div className={'button-panel'}>
            <Button className={'counter-button'} title={'inc'} onClick={onclickIncHandler} disabled={a === 5}/>
            <Button className={'counter-button'} title={'reset'} onClick={onclickResetHandler} disabled={a === 0}/>
        </div>
    )
}