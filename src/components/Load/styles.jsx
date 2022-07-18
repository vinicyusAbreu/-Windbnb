import styled from 'styled-components';

const LoadContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    position: absolute;
    bottom: -150px;
    animation: rotation 1s infinite linear;
    @keyframes rotation {
    from {-webkit-transform: rotate(0deg);}
    to   {-webkit-transform: rotate(359deg);}
}
`;

export { LoadContainer };