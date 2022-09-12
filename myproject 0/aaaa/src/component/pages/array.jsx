import { useState } from "react";

const App = () => {
    const [name, setName] = useState(Array);

    const handleClick = () => {
        setName((prevName) => [
            ...prevName,
            {
                name: "Debayan",
                age: 23
            },
        ]);
    };
        
    };

    return (
        <>
            <ul>
                
                
                <button onClick={handleClick}></button>
            </ul>
        </>
    );
    }

export default App;
