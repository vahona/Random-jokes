import react, { useContext } from 'react'
import { Contex } from '../Context'
import Select from 'react-select'
// import Chuck from '../assets/Chuck-Norris-photo.jpg'

function MainScreen() {
    const { num, jokes, setJokes, setNum, randomeJoke } = useContext(Contex)


    const options = [{ value: "kk", label: "kk" }, { value: "ll", label: "ll" }, { value: "oo", label: "oo" }]

    return (
        <div>
            {/* <img src={Chuck} alt={chuck}/> */}
            {jokes.map((joke) => {
            return (<div key={joke.value[0].id}>"{joke.value[0].joke}"</div>)})}
            <form>
                <Select options={options}/>
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