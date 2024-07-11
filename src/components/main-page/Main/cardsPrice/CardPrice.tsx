import s from './CardPrice.module.css';
import '../../../../common.css';
import { TitleLine } from '../../../common/titleLine/TitleLine';
// import { cardsPrice } from '../../../../store/cardsStore/cardsStore';
// import { cardDescription } from '../../../../store/cardsStore/cardsStore';
import { Card } from '../../../common/card/Card';
import { useAppSelector } from '../../../../store/hooks';

export const CardPrice:React.FC = () => {
    const cards = useAppSelector(state => state.card.cards)
    return (
        <section className={s.cardSection}>
            <div className="container">
                <div className="wrapper">
                    <TitleLine/>
                    <section className={s.cardsPrice}>
                        {cards.map(card => <Card key={card.id} {...card}/>)}
                    </section>
                </div>
            </div>

        </section>
    )
}