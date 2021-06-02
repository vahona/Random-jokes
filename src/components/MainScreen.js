import  { useContext } from 'react'
import { Context } from '../Context'
import Select from 'react-select'
import Chuck from '../assets/Chuck-Norris-photo@3x.jpg'
import RandomPhoto from '../assets/Random-photo@3x.jpg'
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
            jokes,
            categories,
            getRandomJoke,
            firstName,
            lastName,
            setInputValue,
            setSelectedCategory
         }
     = useContext(Context)


    
    const options = categories.map((item) => { 
        return { value: item, label: item }
    }) 
    const  inputChange = (e) => {
        e.preventDefault();
        const newValue = e.target.value
        const [firstName, lastName] = newValue.split(' ')
        setInputValue({ firstName: firstName,  lastName: lastName})
        
    }

    const onSelectionChange = (e) => {
        const newValue = e.value
        setSelectedCategory([newValue])
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
                {firstName === '' && lastName === '' && categories.length < 1 ? <Image src={Chuck} /> : <Image src={ RandomPhoto }/>}
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
                <DrawButton onClick={getRandomJoke}> Draw a random Chuck Norris joke </DrawButton>
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