import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
    height: 80px;
    align-items: center;
    display:flex;
    flex-wrap:wrap;
`;

export const HeaderToggle = styled.li`
    background-color: #143040;
    width: 90%;
    height: 80px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: right;
    text-align: right;
    color:#E7B725;
`;
export const Item = styled.li`
    display: flex;
    width: 120px;
    // justify-content: space-between;
    height: 30px;
    align-items: center;
    font-size: 20px;
    margin-left: 20%;
`;

export const ItemContainer = styled.div`
    width: 100%;
    height: 50px;
    display:flex;
    align-items: center;
    margin-bottom: 10px;
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