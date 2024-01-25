
import styled from "styled-components";

export const STodobodyDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #fff;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  
    @media screen and (width > 375px) {
        width: 430px;
    }
`

export const SBgImg = styled.img`
    width: 324px;
    height: 202px;
`

export const STask = styled.div`
  padding: 0 9px;
  margin-bottom: 78px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (width > 375px) {
    padding: 0 19px;
    } 
`

export const SAddtask = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   position: relative;
   margin-bottom: 26px;

   @media screen and (width > 375px) {
        gap: 2%;
        margin-bottom: 36px;
    } 
`

export const SInput = styled.input`
    flex: 72%;
    padding: 13px 0 13px 43px;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: #EBEFF2;
`

export const SSubmit = styled.button`
    flex: 22%;
    padding: 8px 0;
    font-size: 22px;
    background-color: #20EEB0;
    border: none;
    outline: none;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    transition: .4s;

    &:hover {
        border: 1px solid #20EEB0;
        background-color: #fff;
        color: #20EEB0;
    }
`

export const SGreenicon = styled.img`
    width: 24px;
    height: 24px;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(50%, 33%);
`
