import s from './CourseItem.module.css';
import '../../../common.css';


interface CourseItemProps {
    children: React.ReactNode,
}

export const CourseItem: React.FC<CourseItemProps> = ({ children }) => {
  
    return (
        <div>
            <section className={s.paket}>
                <div className="container">
                    <div className="wrapper">
                        <div>
                            <div className={s.paket__descriptionBox}>
                                <div className={s.paket__overlay}></div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}