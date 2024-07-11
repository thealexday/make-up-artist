import s from './Card.module.css';
import { Button } from '../../../UI/button/Button';
import { showCardInfo } from '../../../store/cardsScile'
import { useAppDispatch } from '../../../store/hooks';
// import { cardsDescription } from '../../../store/cardsScile';

interface CardProps{
    id: number,
    title: string,
    img?: any,
    description?: string,
    price: string,
    buttonText: string,
}

export const Card:React.FC<CardProps> = (props) => {
    const dispatch = useAppDispatch()
    return (
        <>
        {props.img && (
            <div className={s.priceCard}>
            <h3 className={s.priceCard__title}>{props.title}</h3>
            <img width="100%" height="auto" src={props.img} alt="иконка карточки товара" /> 
            <p className={s.priceCard__price}>{props.price}</p>
            <Button onClick={() => dispatch(showCardInfo(props.id))}>{props.buttonText}</Button>
        </div>
        )}
        {props.description && (
            <div className={[s.priceCardDescription, s.priceCard].join(' ')}>
                <div className={s.overlay}></div>
            <h3 className={s.priceCardDescription__title}>{props.title}</h3>
            <p className={s.cardDescription}>{props.description}</p>
            <Button buttonWhite={true} onClick={() => dispatch(showCardInfo(props.id))}>{props.buttonText}</Button>
        </div>
        )}
        </>
        // <div className={s.priceCard}>
        //     <h3 className={s.priceCard__title}>{props.title}</h3>
        //     {props.description ? <p className={s.cardDescription}>{props.description}</p> : null}
        //     {props.img ? <img width="100%" height="auto" src={props.img} alt="иконка карточки товара" /> : null}
        //     <p className={s.priceCard__price}>{props.price}</p>
        //     <Button onClick={() => dispatch(showCardInfo(props.id))}>{props.buttonText}</Button>
        // </div>
    )
}