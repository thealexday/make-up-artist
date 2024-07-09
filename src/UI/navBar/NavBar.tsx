import s from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const NavBar:React.FC = () => {
    const [marker, setMarker] = useState<boolean>(false);
    return (
        <>
        <nav className={s.navigation}>
            <Link onClick={() => setMarker(true)} className={marker ? [s.whiteMarker, s.navigation__link].join(' ') : s.navigation__link} to={'/'}>Главная</Link>
            <Link className={s.navigation__link} to={'/course'}>Курс</Link>
            <Link className={s.navigation__link} to={'/works'}>Портфолио</Link>
            <Link className={s.navigation__link} to={'/contacts'}>Контакты</Link>
        </nav>
        <Link className={[s.headerTitleLogo, s.focusInExpand].join(' ')} to={'/'}>Polina Eremina</Link>
        </>
    )
}