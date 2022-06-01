import styled from "@emotion/styled";


export const SidebarContainer = styled.div`
    width: 15%;
    color: white;
    margin-top: 3%;
    height: 100%;
    // border: 5px solid;
    @media(max-width: 768px) {
       display: none;
    }   
`;

 
 
export const ItemContainer = styled.ul`
    width: 100%;
    height: 50px;
    text-align: center;
    align-items: center;
    font-size: 20px;
    display: flex;
    font-weight: bold;
    &:hover{
        color: #C59D24;
        transition: 500ms;
        background-color: #231F20;
        border-left: 5px solid #C59D24;
        cursor: pointer;
    }
`;
 
export const Item = styled.li`
display: flex;
    width: 120px;
    height: 30px;
    align-items: center;
    font-size: 20px;
    margin-left: 20%;
`;