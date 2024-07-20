// import style from 'styled-components';



// export const Title = style.h1`
// @font-face {
//     font-family: Noto;
//     src: url('../../../fonts/NotoSerifDisplay-VariableFont_wdth\,wght.ttf');
// }
//     color: #3f3f3f; 
//     font-family: Noto
//     text-align: ${props => props.textAlign};
//     font-weight: ${props => props.fontWeight};
//     font-size: ${props => props.fontSize};
//     margin: ${props => props.margin};
// `;

import s from './Title.module.css';


interface TitleProps{
    children: React.ReactNode,
    centre?: boolean,
    left?: boolean,
    right?: boolean,
    titleTablet?: boolean,
}

export const Title:React.FC<TitleProps> = ({children, centre, left, right, titleTablet}) => {
    return (
        <h1 className={centre ? [s.center, s.title].join(' ') : left ? [s.left, s.title].join(' ') : right ? [s.right, s.title].join(' ') : titleTablet ? [s.titleTablet, s.title].join(' ') : s.title}>{children}</h1>
    )
}

