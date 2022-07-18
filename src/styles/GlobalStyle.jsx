import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, 
    *:after,
    *:before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-size: 62.5%;
        

    }

    body{
        font-size: 100%;
        list-style-type: none;
    }

    ol, ul {
    list-style: none;
    } 

    a{
        text-decoration: none;
    } 
    button{
        cursor: pointer;
    } 
    #root{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .app{
       
        width: min(1220px, 95%);
        margin: 0 auto;
        padding:30px 0;
        
    }
`;

export default GlobalStyle;