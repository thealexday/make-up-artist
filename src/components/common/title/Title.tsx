import style from 'styled-components';

interface TitleProps {
    align?: 'center' | 'right' | 'left',
    weight?: 200 | 300 | 400 | 500 | 600 | 700,
    size?: number,
    margin?: number,
    color?: string,
    alignmobile?: 'center' | 'right' | 'left',
    marginmobile?: number,
    sizemobile?: number,
    colormobile?: string,
}

export const Title = style.h1<TitleProps>`
@font-face {
    font-family: Noto;
    src: url('../../../fonts/NotoSerifDisplay-VariableFont_wdth\,wght.ttf');
}
    color: ${props => props.color ? props.color : '#3f3f3f'}; 
    font-family: Noto, san-serif;
    text-align: ${props => props.align}
    font-weight: ${props => props.weight};
    font-size: ${props => props.size ? props.size + 'px' : '30px'};
    margin: ${props => props.margin};

    @media (max-width: 516px){
        text-align: ${props => props.alignmobile};
        color: ${props => props.colormobile};
        margin-bottom: ${props => props.marginmobile};
        font-size: ${props => props.sizemobile + 'px'};
    }
    
`;

// import s from './Title.module.css';


// interface TitleProps{
//     children: React.ReactNode,
//     centre?: boolean,
//     left?: boolean,
//     right?: boolean,
//     titleTablet?: boolean,
// }

// export const Title:React.FC<TitleProps> = ({children, centre, left, right, titleTablet}) => {
//     return (
//         <h1 className={centre ? [s.center, s.title].join(' ') : left ? [s.left, s.title].join(' ') : right ? [s.right, s.title].join(' ') : titleTablet ? [s.titleTablet, s.title].join(' ') : s.title}>{children}</h1>
//     )
// }

