import styled from 'styled-components';
import { BreakpointSize, breakAt } from '../../styles/responsive';

const HeaderElement = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${breakAt(BreakpointSize.sm)} {
        display: block;
    }
`;

const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 297px;
    height: 55px;
    border-radius: 16px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    padding: 0px 16px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.295);

    }

    ${breakAt(BreakpointSize.sm)} {
        margin:0 auto;
        margin-top:40px;
    }
    `;
const Li = styled.li`
    
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Mulish', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: ${props => props.color || ''};
    &:not(:last-child){
        flex: 1;
        border-right: 1px solid #F2F2F2;
    }
    svg{
        margin-left: 10px;
    }
   
    
`;

export { HeaderElement, Ul, Li };