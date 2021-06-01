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
    IncreaseNumber,
    Icon,
    useStyles,
    Label
 } 
from "../components/Style";


function MainScreen() {
    const {
            isloading,
            setIsloading,
            jokes,
            categories,
            firstName,
            inputValue,
            lastName,
            setFirstName,
            setInputValue,
            setLastName,
            setCategories
         }
     = useContext(Contex)


    
    const options = categories.map((item) => { 
        return { value: item, label: item }
    }) 
    const  inputChange = (e) => {
        const newValue = e.target.value
        setInputValue({ firstName: newValue, lastName: newValue })
    }

    const onSelectionChange = (e) => {
        const newValue = e.value
        setCategories([newValue])
    }

    const Styles = {
        control: base => ({
            ...base,
            height: 58,
            minHeight: 35,
            
        })
    };

    const classes = useStyles()
    
    return (
        <Container>
            <MainContainer>
            <Image src={Chuck}/>
            { isloading === false ? jokes.map((joke) => {
                return (<TextContainer key={joke.value[0].id}>"{joke.value[0].joke}"</TextContainer>)}) : <div> Loading...</div> }
            <Form>
                <Select 
                styles={Styles}
                options={options} 
                components={{
                    IndicatorSeparator: () => null
                }}
                onChange={onSelectionChange}
                />
            </Form>
            <div className={classes.floatingLabelWrap}>
                <Input  onChange={inputChange}/>
                <Label className={classes.label}>Impersonate Chuck Norris</Label>
            </div>
            <DrawButtonContainer>
                <DrawButton> Draw a random Chuck Norris joke </DrawButton>
            </DrawButtonContainer>
            <ButtonContainer>
               <ButtonSubContainer>
                    <Button> <Icon src={Minus} /> </Button>
                        <IncreaseNumber> 0 </IncreaseNumber>
                    <Button> <Icon src={Plus} /> </Button>
                </ButtonSubContainer>
                <SaveButton> Save Jokes </SaveButton>
            </ButtonContainer>
            </MainContainer>
        </Container>
    )
}

export default MainScreen