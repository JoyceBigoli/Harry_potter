import {createGlobalStyle} from 'styled-components'  

export const ResetCSS = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
};
button {
    cursor: pointer;
}
body {

    background-color: ${({theme}) => theme.colors.azul_900};
}
a {
    color:inherit;
    text-decoration: none;

    &:hover {
      filter: brightness(0.8);  
    }
}`