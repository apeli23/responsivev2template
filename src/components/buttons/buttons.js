import styled from "@emotion/styled";

export const RegularButton = styled.button`
    width: 300px;
    height: 60px;
    padding: 20px;
    font-size: 18px;
    color: white;
    cursor: pointer;
    background-color: #AE2424;
    border-radius: 1rem;
    border: 0px;
    text-decoration: none;
    &:hover {
        transform: translateY(-3px);
        transition: 1s;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
`

export const OutlineButton = styled.button`
  padding: 15px;
  color: #7b7b7b;
  background-color: #fff;
  border-radius: 1rem;
  border: 1px solid;
  font-size: 20px;
  width: 300px;
  height: 60px;
  align-items: center;
  cursor: pointer;

  text-align: center;
  text-decoration: none;
  &:hover {
    transform: translateY(-3px);
    transition: 2s;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const DropdownButton = styled.select`
    padding: 15px;
    color: #7B7B7B;
    background-color: #FFF;
    border-radius: 1rem;
    border: 1px solid;
    font-size: 20px;
    width: 100%;
    height: 60px;
    align-items: center;
    text-align: center;
    text-decoration: none;
    &:hover {
        transform: translateY(-3px);
        transition: 1s;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
`;

export const GroupButton = styled.button`
    font-size: 20px;
    border: 2px solid;
    cursor: pointer;
    padding: 20px 30px;
    transition: background 0.2s ease-in-out;
    background-color: transparent;
    width: 200px;
        &:hover {
            background-color: #AE2424;
                color: #FFF;
        }

        &:first-of-type {
            border-radius: 10px 0 0 10px;
            transition: none;
            position: relative;
            overflow: hidden;
            background-color: #AE2424;
            color: white;
            &:hover{
               background-color: #FFF;
               color: black;
            }
        }

        &:last-of-type {
            border-radius: 0 10px 10px 0;
            transition: none;
            position: relative;
            overflow: hidden;
            border: 2px solid;
        }
    }
`;