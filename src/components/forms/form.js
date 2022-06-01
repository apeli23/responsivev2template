import styled from "@emotion/styled";


export const SearchBar = styled.input`
    text-color: white;
    border-radius: 1rem;
    padding:1rem;
    border: 0px;
    height:50px;
    width: 350px;
    font-size: 20px;
    font-weight:300;
    @media(max-width: 768px) {
        display: none;
    }
`;