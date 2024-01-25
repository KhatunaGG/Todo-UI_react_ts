import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

body, #root{
    width: 100%;
    height: 100vh;
    background-color: #EBEFF2;
    /* display: flex;
    
    align-items: center;
    justify-content: center; */
}
#root {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    /* @media screen and (width > 375px) {
        #root {
            display: flex;
            flex-direction: row;
            gap:296px;

        }
    } */

}


.main {
    width: 92%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    font-family: 'Inter', sans-serif;
    /* background-color: #333; */
   

   
}


    @media screen and (width > 375px) {
        .main {
            /* width: 1000px; */
            display: flex;
            flex-direction: row;
            /* gap:296px; */

        }
    }

    
`



