import s from './CardPrice.module.css';
import '../../../../common.css';
import { TitleLine } from '../../../common/titleLine/TitleLine';
import { cardsPrice } from '../../../../store/cardsStore/cardsStore';
import { Card } from '../../../common/card/Card';

export const CardPrice:React.FC = () => {
    return (
        <section className={s.cardSection}>
            <div className="container">
                <div className="wrapper">
                    <TitleLine/>
                    <section className={s.cardsPrice}>
                        {cardsPrice.map(card => <Card key={card.id} {...card}/>)}
                    </section>
                </div>
            </div>

        </section>
    )
}