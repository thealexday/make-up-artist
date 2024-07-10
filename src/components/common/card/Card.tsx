import s from './Card.module.css';
import { Button } from '../../../UI/button/Button';

interface CardProps{
    id: number,
    title: string,
    img: any,
    price: string,
    buttonText: string,
}

export const Card:React.FC<CardProps> = (props) => {
    return (
        <div className={s.priceCard}>
            <h3 className={s.priceCard__title}>{props.title}</h3>
            <img width="100%" height="auto" src={props.img} alt="иконка карточки товара" />
            <p className={s.priceCard__price}>{props.price}</p>
            <Button>{props.buttonText}</Button>
        </div>
    )
}