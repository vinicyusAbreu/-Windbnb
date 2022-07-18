import styled from 'styled-components';
import { BreakpointSize, breakAt } from '../../styles/responsive';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    font-family: 'Montserrat', sans-serif;
  `;

const HeaderInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const H1 = styled.h1`
    color: #333333;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 29px;

    @media (max-width: ${BreakpointSize.sm}) {
        font-size: 1.8rem;
        line-height: 22px;
    }
`;

const Theamount = styled.p`
    color: #4F4F4F;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 17px;
`;

const ContainerCard = styled.ul`
    margin-top:30px;
    /* width: 100%; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap:32px;
    ${breakAt(BreakpointSize.lg)} {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }
    ${breakAt(BreakpointSize.sm)} {
        grid-template-columns: repeat(1, 1fr);
        gap: 32px;
    }
    
`;

const Card = styled.li`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
    
    img{
        width: min(395px, 100%);
        border-radius: 24px;
        margin-bottom: 15px;
        height: 269px;
    }
    .infoCard{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap:wrap;
        gap: 10px;
        margin-bottom:12px;
        ${breakAt(BreakpointSize.md)} {
                gap: 5px;
            }
        

        .superHost{
            font-size: 1.2rem;
            font-weight: 700;
            line-height: 15px;
            text-transform: uppercase;
            color: #4F4F4F;
            width: 100px;
            height: 28px;
            border: 1px solid #4F4F4F;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;

            ${breakAt(BreakpointSize.md)} {
                width: 80px;
                height: 20px;
                font-size: 1rem;
            }

            ${breakAt(BreakpointSize.sm)} {
                width: 88.61px;
                height: 24.81px;
                line-height: 12.19px;
            }
        }
        .info{
            font-weight: 500;
            font-size: 1.4rem;
            line-height: 17px;
            color: #828282;

            ${breakAt(BreakpointSize.md)} {
                font-size: 1.2rem;
                line-height: 15px;
            }
            ${breakAt(BreakpointSize.sm)} {
                flex:1;
            }
        }
        .star{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: 500;
            font-size: 1.4rem;
            line-height: 17px;
            color: #4F4F4F;
            gap: 7px;
            ${breakAt(BreakpointSize.md)} {
                font-size: 1.2rem;
                line-height: 15px;
                gap: 5px;
            }
            svg{
                font-size: 1.2rem;
            }
        }
    }
    h2{
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 20px;
        color: #333333;
        ${breakAt(BreakpointSize.sm)} {
            font-size: 1.4rem;
            line-height: 17px;
        }
    }

`;
const NoDisponible = styled.p`
    color: #4F4F4F;
    font-weight: 700;
    font-size: 2.4rem;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    position: absolute;
    bottom: -150px;
    transform: translateY(-50%);
`;

export {
    Container,
    HeaderInfo,
    H1,
    Theamount,
    ContainerCard,
    Card,
    NoDisponible
};