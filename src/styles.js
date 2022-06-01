import { css } from "@emotion/react";


export const globalStyles = css`
body  {
    background: #143040;
    height:100%;
    margin:10px;
    overflow:hidden;
    resize:horizontal;
    font-family: "Montserrat";
}

* {
    margin: 0;
    padding: 0;
}

.nav-menu {
    background-color: #143040;
    width: 250px;
    height: 100vh;
    display: block;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
    color: #FFF;
}
  
.nav-menu.active {
    display:block;
    left: 0;
    transition: 350ms;
}

#mobileremove {
        display: none;
}
`;