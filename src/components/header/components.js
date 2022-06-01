import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
    height: 80px;
    align-items: center;
    display:flex;
    flex-wrap:wrap;
`;

export const MenuItems = styled.ul`
    // width: 100%;
    margin-bottom: 30%;
    border: 5px solid red;
`;

export const HeaderToggle = styled.li`
    background-color: #143040;
    width: 100px;
    height: 80px;
    display: flex;
    align-items: center;
    text-align: center;
    color:#E7B725;
`;
export const Item = styled.li`
    display: flex;
    width: 140px;
    justify-content: space-between;
    height: 30px;
    align-items: center;
    font-size: 20px;
    margin-left: 70px;
    margin-top: 10px;
     
`;

export const ItemContainer = styled.div`
    margin-left: -20%;
    width: 106%;
    padding: 9px;
    margin-bottom: 10px;
    align-items: center;
     &:hover {
        background-color: #231F20;
        border-left: 7px solid #E7B725; 
        color: #E7B725;
     }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const Logo = styled.img`
    color: #FFF;
    // margin-right: 50px;
    width: 240px;
    height: 100%;
    @media(max-width: 768px) {
        display: none;
    }
`;

export const Mobilebar = styled.div`
    align-items: center;
    display :none;
    @media(max-width: 768px) {
        display:block;
    }
`