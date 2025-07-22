import {Button} from "../Button/Button.tsx";

type Props = {
    onclickIncHandler: () => void
    onclickResetHandler:  () => void
  onclickDecHandler: () => void
    count: number
}

export const ButtonPanel = ({onclickIncHandler, onclickDecHandler, onclickResetHandler, count}: Props) => {
    return (
        <div className={'button-panel'}>
            <Button className={'counter-button'} title={'inc'} onClick={onclickIncHandler} disabled={count === 5}/>
            <Button className={'counter-button'} title={'dec'} onClick={onclickDecHandler} disabled={count === 0}/>
            <Button className={'counter-button'} title={'reset'} onClick={onclickResetHandler} disabled={count === 0}/>
        </div>
    )
}