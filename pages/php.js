import { useState } from "react";
import axios from "axios";


function App() {
	const [name, setName] = useState("");
	const [result, setResult] = useState("");

	const handleChange = (e) => {
		setName(e.target.value);
	};

	const handleSumbit = async (e) => {
       //console.log(name)
		e.preventDefault();
        const message = "Hello"
		const info ={name,message}
        await axios({
            method: 'post',
            url:'https://jendie.co.ke/jplus/b2b.php',
            data:info,
         
        })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (response) {
            console.log(response);
        });
		
	};

	return (
		<div className="App">
			<form
			
				onSubmit={(event) => handleSumbit(event)}
			>
				<label htmlFor="name">Name: </label>
				<input
					type="text"
					id="name"
					name="name"
					value={name}
					onChange={(event) => handleChange(event)}
				/>
				<br />
				<button type="submit">Submit</button>
			</form>
			
		</div>
	);
}

export default App;

