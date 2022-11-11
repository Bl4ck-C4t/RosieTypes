import {useNavigate} from "react-router-dom";

export default function HomePage(){
    const navigate = useNavigate();

    const beginTest = () => {
        navigate("/test")
    }

    return (
        <>
            <h1>Welcome to the Rosie types website!!</h1>
            <div id="site-info">
                Use the button below to find out which Rosie type are you!
            </div>
            <button id="start-button" onClick={beginTest}> Begin Test </button>
        </>
    );
}