// create your App component here
import react, { useState, useEffect } from "react";

function App() {
    const [dogImage, setDogImage] = useState(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setDogImage(data.message);
        })
        .catch((error) => {
            console.log("Error fetching dog image:", error);
        });
    }, []);

    return (
        <div>
            {!dogImage ? (
                <p>Loading...</p>
            ) : (
                <img src={dogImage} alt=" A Random Dog" />
            )}
        </div>
    );
}

export default App;
