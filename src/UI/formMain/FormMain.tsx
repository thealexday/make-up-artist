import { useState } from 'react';
import { MyModal } from '../../components/modalWindow/MyModal';
import s from './FormMain.module.css';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { showModal } from '../../store/modalSlice/modalSlice';

import { hideFormModal } from '../../store/formModalSlice/formModalSlice';
import { DescriptionText } from '../../components/decriptionText/DescriptionText';

interface FormMainProps{
    children?: React.ReactNode,
    formModalStyle?: boolean,
}

export const FormMain:React.FC<FormMainProps> = ({children, formModalStyle}) => {

  const modal = useAppSelector(state => state.modal.modal);
  const dispatch = useAppDispatch();

    const [form, setForm] = useState({
        name: '',
        phone: '',
        message: '',
    })

    const [formError, setFormError] = useState({
        nameError: false,
        phoneError: false,
    })


    const onSubmit = async (event: any) => {
        event.preventDefault();

        // проверка номера телефона:
        const requiredPhone = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/gi;
        const requiredName = /^[А-Я][а-яё]*$/;
        const targetTel = form.phone;
        const targetName = form.name;
        
        if (!targetName.match(requiredName) && form.name.length <= 1){
            setFormError({...formError, nameError: true})
            setForm({...form, name: ''})
            return
        }

        if (!targetTel.match(requiredPhone)){
            setFormError({...formError, phoneError: true})
            setForm({...form, phone: ''})
            return 
        } 


        const formData = new FormData(event.target);
    
        formData.append("access_key", "cd172bbc-44de-4033-bbf4-198fa8d2c491");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
        setForm({...form, name: '', message: '', phone: ''})
        dispatch(showModal(true))
        dispatch(hideFormModal(false))
        
      };
    
      const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        setFormError({...formError, phoneError: false})
        setForm({...form, phone: e.target.value})
      }

      const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        setFormError({...formError, nameError: false})
        setForm({...form, name: e.target.value})
      }
    
    return(
      <>
      {formModalStyle && (
        <form onSubmit={onSubmit} className={s.reservationForm__modal} action="">
            <h2>{children}</h2>
            <input className={formError.nameError ? [s.reservationForm__inputModal, s.error].join(' ') : s.reservationForm__inputModal} 
            type="text" 
            name='имя клиента:' 
            placeholder={formError.nameError ? 'Вы ввели некорректное имя' : 'Ваше имя'}
            value={form.name}
            onChange={handleNameChange}
            /> 
            <br />
            <input className={formError.phoneError ? [s.reservationForm__inputModal, s.error].join(' ') : s.reservationForm__inputModal}
             type="tel" 
             name='номер клиента:' 
             placeholder={formError.phoneError ? 'Нам кажется, что вы ввели некорректный номер, попробуйте еще раз' : 'Введите номер телефона' }
             value={form.phone}
            onChange={handlePhoneChange}
             /> 
             <br />
            <textarea className={s.reservationForm__inputModal} 
            name="сообщение:"  
            cols={20} rows={10} 
            placeholder="Написать сообщение (не обязательно)"
            value={form.message}
            onChange={(e) => setForm({...form, message: e.target.value})}
            >
                </textarea> <br />
              {modal && <MyModal><p className={s.modalText}>Спасибо, визажист скоро с вами свяжется</p></MyModal>}
            <button type="submit" className={s.reservationForm__buttonModal}>ЗАПИСАТЬСЯ</button>
        </form>
      )}

      {!formModalStyle && (
        <form onSubmit={onSubmit} className={s.reservationForm} action="">
            <h2 className={s.reservation__title}>{children}</h2>
            <input className={formError.nameError ? [s.reservationForm__input, s.error].join(' ') : s.reservationForm__input} 
            type="text" 
            name='имя клиента:' 
            placeholder={formError.nameError ? 'Вы ввели некорректное имя' : 'Ваше имя'}
            value={form.name}
            onChange={handleNameChange}
            /> 
            <br />
            <input className={formError.phoneError ? [s.reservationForm__input, s.error].join(' ') : s.reservationForm__input}
             type="tel" 
             name='номер клиента:' 
             placeholder={formError.phoneError ? 'Нам кажется, что вы ввели некорректный номер, попробуйте еще раз' : 'Введите номер телефона' }
             value={form.phone}
            onChange={handlePhoneChange}
             /> 
             <br />
            <textarea className={s.reservationForm__input} 
            name="сообщение:"  
            cols={20} rows={10} 
            placeholder="Написать сообщение (не обязательно)"
            value={form.message}
            onChange={(e) => setForm({...form, message: e.target.value})}
            >
                </textarea> <br />
              {modal && <MyModal ><DescriptionText margin={10} color='#3f3f3f' >Спасибо, визажист скоро с вами свяжется</DescriptionText></MyModal>}
            <button type="submit" className={s.reservationForm__button}>ЗАПИСАТЬСЯ</button>
        </form>
      )}

</>
    )
}