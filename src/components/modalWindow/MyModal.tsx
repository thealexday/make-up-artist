import s from './MyModal.module.css';
import '../../common.css';

interface MyModalProps{
    children?: React.ReactNode,
    setModal: (a: boolean) => void
}

export const MyModal:React.FC<MyModalProps> = (props) => {
    return (
        <div>
            <div className='container'>
               <div className={s.modal}>
                   <div className={s.modalContent}>
                       {props.children}
                       <span onClick={() => props.setModal(false)} className={s.crossButton}>Закрыть</span>
                   </div>
                  
               </div>
            </div>
        </div>
    )
}