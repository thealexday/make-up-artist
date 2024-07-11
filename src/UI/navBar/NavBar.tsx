import s from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const NavBar:React.FC = () => {
    
    const [marker, setMarker] = useState({
        main: false,
        course: false,
        works: false,
        contacts: false,
    });

    
    return (
        <>
        <nav className={s.navigation}>
            <Link 
            className={marker.main ? [s.navigation__link, s.whiteMarker].join(' ') : s.navigation__link} 
            to={'/'}
            onClick={() => setMarker({...marker, main: true})}
            >Главная</Link>
            <Link 
            className={marker.course ? [s.navigation__link, s.whiteMarker].join(' ') : s.navigation__link} 
            to={'/course'}
            onClick={() => setMarker({...marker, main: false, course: true})}
            >Курс</Link>
            <Link 
            className={marker.works ? [s.navigation__link, s.whiteMarker].join(' ') : s.navigation__link} 
            to={'/works'}
            onClick={() => setMarker({...marker, course: false, works: true})}
            >Портфолио</Link>
            <Link
            className={marker.contacts ? [s.navigation__link, s.whiteMarker].join(' ') : s.navigation__link} 
            to={'/contacts'}
            onClick={() => setMarker({...marker, works: false, contacts: true})}
            >Контакты</Link>
        </nav>
        <Link className={[s.headerTitleLogo, s.focusInExpand].join(' ')} to={'/'}>Polina Eremina</Link>
        </>
    )
}