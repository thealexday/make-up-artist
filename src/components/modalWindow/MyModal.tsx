import s from './MyModal.module.css';
import '../../common.css';

import { useAppDispatch } from '../../store/hooks';
import { hideModal } from '../../store/modalSlice/modalSlice';

interface MyModalProps{
    children?: React.ReactNode,
    
}

export const MyModal:React.FC<MyModalProps> = (props) => {
    const dispatch = useAppDispatch();
    return (
        <div>
            <div className='container'>
               <div className={s.modal}>
                   <div className={s.modalContent}>
                       {props.children}
                       <span onClick={() => dispatch(hideModal(false))} className={s.crossButton}>Закрыть</span>
                   </div>
                  
               </div>
            </div>
        </div>
    )
}