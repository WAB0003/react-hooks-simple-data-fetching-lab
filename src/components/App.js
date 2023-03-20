// create your App component here
import React, {useState, useEffect} from "react";

function App () {
    const dogURL = "https://dog.ceo/api/breeds/image/random"
    const[currentImg,setCurrentImg]=useState("")
    const[isLoaded, setIsLoaded] = useState(false)
    
    useEffect(()=> {
        fetch(dogURL)
        .then((resp)=>resp.json())
        .then((data)=>{
            setCurrentImg(data.message)
            setIsLoaded(true)
        })
    },[])
    function displayDogs(){
        if(!isLoaded) return <p>Loading...</p>;

        return <img src={currentImg} alt="A Random Dog"/>
    }

    return(
        <div>
            {displayDogs()}
       </div>
    )
}

export default App;