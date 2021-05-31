import react, { useContext } from 'react'
import { Contex } from '../Context'
import Select from 'react-select'
import Chuck from '../assets/Chuck-Norris-photo@3x.jpg'
import Minus from '../assets/minus.svg';
import Plus from "../assets/plus.svg";


import { 
    ButtonContainer, 
    Container, 
    Button, 
    ButtonSubContainer,
    Image,
    Input,
    Form,
    DrawButtonContainer,
    SaveButton,
    TextContainer,
    DrawButton,
    MainContainer,
    IncreaseNumber
 } 
from "../components/Style";
import styled from 'styled-components';

function MainScreen() {
    const {
            loading,
            setLoading,
            jokes,
            category,
            firstName,
            inputValue,
            lastName,
            setFirstName,
            setInputValue,
            setLastName,
         }
     = useContext(Contex)


   
    
    const options = category.map((item) => { 
        const firstCategory = item.value[0]
        const secondCategory = item.value[1]
        return [{ value: firstCategory, label: firstCategory }, { value: secondCategory, label: secondCategory }]
    }) 

    const  inputChange = (e) => {
        setInputValue(prevValue => {
            const newValue  = e.target.value
            return { firstName: newValue, lastName: newValue }})
    }


   
  
    const Styles = {
        control: base => ({
            ...base,
            height: 58,
            minHeight: 35,
            
        })
    };
    
    return (
        <Container>
            <MainContainer>
            <Image src={Chuck}/>
            {jokes.map((joke) => {
                return (<TextContainer key={joke.value[0].id}>"{joke.value[0].joke}"</TextContainer>)})}
            <Form>
                <Select 
                styles={Styles}
                options={options[0]} 
                components={{
                    IndicatorSeparator: () => null
                }}
                />
            </Form>
            <Input placeholder="Impersonate Chuck Norris" onChange={inputChange}/>
            <DrawButtonContainer>
                <DrawButton> Draw a random Chuck Norris joke </DrawButton>
            </DrawButtonContainer>
            <ButtonContainer>
               <ButtonSubContainer>
                    <Button> <img src={Minus} /> </Button>
                        <IncreaseNumber> 0 </IncreaseNumber>
                    <Button> <img src={Plus} /> </Button>
                </ButtonSubContainer>
                <SaveButton> Save Jokes </SaveButton>
            </ButtonContainer>
            </MainContainer>
        </Container>
    )
}

export default MainScreen