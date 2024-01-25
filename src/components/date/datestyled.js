import styled from "styled-components";

export const SFullDateDiv = styled.div`
    padding: 117px 24px 13px 170px;
    color: white;
    background-image: url(/assets/image.png);
    background-size: cover; 
    background-repeat: no-repeat;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;

    @media screen and (width > 375px) {
       gap: 23px;
    }
`

export const STimewrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`


export const SDaySpan = styled.span`
    font-size: 18px;
    font-weight: 400;
    font-family: 'Russo One', sans-serif;
`

export const STimeSpan = styled(SDaySpan)`
  font-size: 32px;
  text-transform: uppercase;
`

export const SdayInnerDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
`