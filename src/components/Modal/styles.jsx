import styled from 'styled-components';
import { BreakpointSize, breakAt } from '../../styles/responsive';

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(79, 79, 79, 0.4);
    z-index: 5;
`;

export const ModalElement = styled.div`
    background-color:#FFFFFF;
    width: 100%;
    position: absolute;
    z-index: 10;
    min-height:  460px;
    left: 0;
    top: 0;
    animation: slideDown 0.5s ease-in-out;
    font-family: 'Mulish', sans-serif;
    
    @keyframes slideDown {
        0% {
            top: -100%;
        }
        100% {
            top: 0;
        }
    }
    ${breakAt(BreakpointSize.sm)} {
        height: 500px;
    }
`;

export const ModalContainer = styled.div`
    width:  min(1220px, 95%);
    margin: 0 auto;
    height: 30px;
    margin-top: 90px;
    ${breakAt(BreakpointSize.sm)} {
        margin-top: 18px;

    } 
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    ${breakAt(BreakpointSize.sm)} {
        flex-direction: column;
        height: auto;
        box-shadow: none;
       
    } 
`;

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;
    padding: 12px 27px;
    height: 100%;
    align-items: center;
    justify-content: center;
    &:not(:last-child){
        flex: 1;
        border-right: 1px solid #F2F2F2;
        &:focus-within {
            border: 1px solid #333333;
            
            border-radius: 16px;
        }
    }
    ${breakAt(BreakpointSize.sm)} {
        background: #FFFFFF;
        box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
        width: 100%;
    } 
    &:first-child{
        ${breakAt(BreakpointSize.sm)} {
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
        } 
    }
    &:nth-child(2){
        border-left: 1px solid #F2F2F2;
         ${breakAt(BreakpointSize.sm)} {
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
        } 
    }

    &:last-child{
        border-left: 1px solid #F2F2F2;
        ${breakAt(BreakpointSize.sm)} {
        background: none;
        box-shadow: none;
        width: 100%;
        position: absolute;
        bottom: -200px;
    } 
    }
    
    
    label{
        font-weight:800;
        font-size: .9rem;
        line-height: 11px;
        text-transform: uppercase;
        color: #333333;
        margin-bottom: 4px;
        width: 100%;
    }
    
`;

export const Input = styled.input`
    outline: none;
    border: none;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 18px;
    color: #333333;
    width: 100%;
    
    
`;

export const Button = styled.button`
    width: 126px;
    height: 48px;
    border: none;
    background: rgba(235, 87, 87, 0.9);
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #F2F2F2;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 18px;
    gap: 5px;
    padding:16px 0;
    transition: all 0.3s ease-in-out;
    &:hover{
        background: rgba(235, 87, 87, 0.7);

    }
`;

export const ContainerItens = styled.div`
    margin-top:48px;
    align-items: center;
    justify-content: space-between;
    display: grid;
    grid-template-columns: repeat(3,minmax(0,1fr));
    grid-template-areas: "location guests search";
    ;
    ${breakAt(BreakpointSize.sm)} {
        grid-template-columns: repeat(1,minmax(0,1fr));
        grid-template-areas: "location"
        "guests";
        margin-top: 30px;
    }
    `

export const ItensLocation = styled.ul`
  
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-left: 20px;
    grid-area:location;
    
`;

export const ItemLocation = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 18px;
    color: #4F4F4F;
    width:fit-content;
    cursor: pointer;
    &:not(:last-child){
        margin-bottom: 30px;
    }
`;

export const ItensGuests = styled.div`
    flex-direction: column;
    padding-left: 20px;
    grid-area: guests;
    
    
    .containerAdult, .containerChildren{
        margin-bottom: 50px;
        
        h3{
            font-weight: 700;
            font-size: 1.4rem;
            line-height: 18px;
            color: #333333;
        }
        p{
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 18px;
            color: #BDBDBD;;
        }
        .controls{
            display: flex;
            align-items: center;
            margin-top: 15px;

        }
        .valueControl{
            font-weight: 700;
            font-size: 1.4rem;
            line-height: 18px;
            color: #333333;
            margin:0 16px;

        }
    }
`;

export const ButtonControl = styled.button`
    width: 23px;
    height: 23px;
    border: 1px solid #828282;
    border-radius: 4px;
    font-size: 1.4rem;

    color: ${props => props.color ? props.color : '#333333'};

    background-color: #FFFFFF;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const TitleSearch = styled.div`
    display: none;
    ${breakAt(BreakpointSize.sm)} {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
        p{
            font-weight: 700;
            font-size: 1.2rem;
            line-height: 15px;
            color: #333333;
        }
        svg{
            cursor: pointer;
        }
    }
`;