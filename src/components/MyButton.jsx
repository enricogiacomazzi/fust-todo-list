import {clsx} from 'clsx';


export const MyButton = ({btnStyle, icon, clickHandler}) => {
    return (
        <button type="button" className={clsx('btn', btnStyle)} onClick={clickHandler}>
            <i className={clsx('fa', icon)}></i>
        </button>
    )
}