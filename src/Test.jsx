import {useParams} from "react-router-dom";



const Test = () =>{
    const {id} = useParams()
    return(
        <div>
            <div>Привет</div>
            {id}
        </div>
    )
}

export default Test