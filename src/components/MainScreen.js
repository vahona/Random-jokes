import react, { useContext } from 'react'
import { Contex } from '../Context'
import Select from 'react-select'
import Chuck from '../assets/Chuck-Norris-photo.jpg'

function MainScreen() {
    const { jokes, category,  } = useContext(Contex)
    const options = category.map((item) => { 
        const firstCategory = item.value[0]
        const secondCategory = item.value[1]
        return [{ value: firstCategory, label: firstCategory }, { value: secondCategory, label: secondCategory }]
    })    
    return (
        <div>
            <img src={Chuck}/>
            {jokes.map((joke) => {
            return (<div key={joke.value[0].id}>"{joke.value[0].joke}"</div>)})}
            <form>
                <Select options={options[0]} />
            </form>
            <input/>
            <div>
               <button>Draw a random Chuck Norris joke</button>
            </div>
            <div>
               <button><div>zero</div></button>
                <button>Save Jokes </button>
            </div>
        </div>
    )
}

export default MainScreen