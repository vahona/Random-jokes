import styled from "styled-components";

import { createUseStyles } from 'react-jss'


export const useStyles = createUseStyles({
    floatingLabelWrap: {
        display: "flex",
        flexDirection: 'column',
        position: "relative",
        transformOrigin: 'top left',
        transition: "all 0.5s ease-out",
        "&:focus-within label": {
            transform: "translate(0, 12px) scale(0.75)"
        }


    },

    input: {
        position: "absolute",
        transform: "translate(0, 26px) scale(1)",
    },

    label: {
        position: "absolute",
        transform: "translate(0, 26px) scale(1)",
        color: "#c4c4c4",
        fontSize: '16px'
    }


})

export const Label = styled.label`
    font-size: 16px;
    padding-left: 16px;
    font-weight: normal;
    text-align: left;
    letter-spacing: -0.52px;
`

export const IncreaseNumber = styled.input`
  border: none;
  background-color: #f5f6f8;
  width: 23px;
  margin: 2%;
    ::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }

     &:focus {
        outline: none;
     }

     @media (max-width: 550px) {
     width: 11px;
  }
`

export const Icon = styled.img`
  width: 24px;
  height: 24px;
   @media (max-width: 550px) {
    width: 12px;
    height: 12px;
  }
`

export const MainContainer = styled.div`
margin-left: 10.5%;
margin-right: 10.5%;

`

export const BodyContainer = styled.div`
    background-color: #f5f6f8;
`

export const TextContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
    font-style: italic;
    font-size: 18px;
    font-weight: 600;
`

export const ButtonSubContainer = styled.div`
    display: flex;
    background-color: #f5f6f8;
    padding-top: 7px;
    padding-bottom: 7px;
    margin-top: 2rem;
    height: 45px;
    width: 26.3%;
    justify-content: center;
     @media (max-width: 550px) {
     display: block;
     justify-content: center;
  }
    
    

`

export const DrawButton = styled.button`
    width : 100%;
    background-color: #34394f;
    border: none;
    color: #fff;
    height: 58px;
    font-size: 16px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.63;
    letter-spacing: -0.52px;
    text-align: center;
    
`

export const Image = styled.img`
    width: 100%;
    height: 18.5%;
    margin-top: 6.8%;

`
export const SaveButton = styled.button`
    height: 58px;
    width: 80.4%;
    border: none;
    margin-top: 2rem;
    margin-left: 8px;
    margin-bottom: 10.2%;
    color: var(--dark);
`

export const Input = styled.input`
    width: 94.5%;
    height:49px;
    margin-top: 2.3%;
    border: 1.5px solid gainsboro;
    padding-left: 3.5%;
    
`

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
`

export const DrawButtonContainer = styled.div`
    margin-top: 4.5%;
    width: 100%;
`

export const Container = styled.div`
    background-color: #ffff;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
    width: 555px;
    height: 72.2%;
    margin-inline-start: auto;
    margin-inline-end: auto;
    margin-block-start: 4%;
    border-radius: 10px;

    @media (max-width: 600px) {
     width: 90%;
  }

`


export const Button = styled.button`
    border: none;
    background: transparent;
`
export const Form = styled.form`
    margin-top: 2rem;
    margin-right: 0;
    
`

