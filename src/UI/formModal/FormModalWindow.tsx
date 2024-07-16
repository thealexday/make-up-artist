import s from './FormModalWindow.module.css';
import '../../common.css';

import { useAppDispatch } from '../../store/hooks';
import { hideFormModal } from '../../store/formModalSlice/formModalSlice';

interface FormModalProps{
    children?: React.ReactNode,
}

export const FormModalWindow:React.FC<FormModalProps> = (props) => {
    const dispatch = useAppDispatch();
    return (
        <div>
            <div className='container'>
               <div className={s.modal}>
                   <div className={s.modalContent}>
                       {props.children}
                       <span onClick={() => dispatch(hideFormModal(false))} className={s.crossButton}>Закрыть</span>
                   </div>
                  
               </div>
            </div>
        </div>
    )
}