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
    Input
 } 
from "../components/Style";

function MainScreen() {
    const {
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
    
    return (
        <Container>
            <Image src={Chuck}/>
            {jokes.map((joke) => {
            return (<div key={joke.value[0].id}>"{joke.value[0].joke}"</div>)})}
            <form>
                <Select options={options[0]} />
            </form>
            <Input placeholder="Impersonate Chuck Norris" onChange={inputChange}/>
            <div>
               <button>Draw a random Chuck Norris joke</button>
            </div>
            <ButtonContainer>
               <ButtonSubContainer>
                    <Button> <img src={Minus} /></Button>
                   <div> 0 </div>
                    <Button><img src={Plus} /></Button>
                </ButtonSubContainer>
                <button>Save Jokes </button>
            </ButtonContainer>
        </Container>
    )
}

export default MainScreen