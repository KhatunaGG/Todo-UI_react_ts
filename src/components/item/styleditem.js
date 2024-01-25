import styled from "styled-components";


export const STasklist = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    
`

export const STaskitem = styled.li`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    list-style: none;

`

export const SDetails = styled.div`
    flex: 83%;
    display: flex;
    flex-direction: column;
`

export const SEdit = styled.div`
    flex: 17%;
    display: flex;
    gap: 5px;
    justify-content: flex-end;

    @media screen and (width > 375px) {
        gap: 14px;
    } 
`

export const SItemtext = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: #0D0D0D;
`

export const SItemtime = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #888888;

`

export const  SCircleicon = styled.img`
    width: 20px;
    height: 20px;

`
export const  SDeleteicon = styled.img`
    width: 24px;
    height: 24px;

`
export const  SCompleted = styled.button`
  border: none;
  outline: none;
  background-color: transparent;

`
export const SDelete= styled.button`
 border: none;
  outline: none;
  background-color: transparent;

`