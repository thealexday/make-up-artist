import style from "styled-components";

interface DescriptionTextProps{
    color?: string,
    size?: number,
    weight?: 200 | 300 | 400 | 500 | 600 | 700,
    margin?: number,
    sizemobile?: number,
}

export const DescriptionText = style.p<DescriptionTextProps>`
@font-face {
    font-family: Roboto;
    src: url('../../fonts/RobotoCondensed-VariableFont_wght.ttf');
}
font-family: 'Roboto', sans-serif;
color: ${props => props.color};
font-size: ${props => props.size + 'px'};
font-weight: ${props => props.weight};
margin-top: ${props => props.margin + 'px'};

@media(max-width: 766px) and (min-width: 517px){
    font-size: ${props => props.sizemobile + 'px'}
}

@media(max-width: 516px){
    font-size: ${props => props.sizemobile + 'px'}
}
`;