import styled from "@emotion/styled";

export const SearchIcon = styled.i`
    margin-top: 5%;
    margin-left: 0.5rem;
    width: 5px;
    height:10px;
`;

export const BellIcon = styled.i`

    color: left;
    margin-left: 2rem;
    color: white;
    font-size: 20px;
    &:hover{
        cursor: pointer;
        transform: scale(1.1);
        transition: 1s;
    }
`;

export const MobileIcon = styled.i`
    display: none;
    margin-right: 1rem;
    font-size: 2rem;
    @media(max-width: 768px) {
        color: #FFF;
        display: block;
    }
`;

export const Star = styled.i`
    color: black;
`;
export const Menubar = styled.div`
    // margin-left: 2rem;
    font-size: 3rem;
    color: white;
    display: none;
    @media(max-width: 768px) {
        display: block;
    }

`;
export const Hamburger = styled.div`
    margin-left: 2rem;
    font-size: 2rem;
    color: white;
`;

export const Close = styled.div`
    font-size: 2rem;
`;
