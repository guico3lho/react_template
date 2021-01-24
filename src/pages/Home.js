import { Link } from "react-router-dom"
import { ResumoRecipe } from "../assets/strings"
import Quadro from "../components/Quadro"

const Home = () => {
    return (
        <div>

            <Quadro/>
            <div>
                {ResumoRecipe}
            </div>

        </div>
    )
}

export default Home;