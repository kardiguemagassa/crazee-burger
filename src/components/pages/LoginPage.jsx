import { useState } from "react";

export default function LoginPage() {

  const [inputValue, setinputValue] = useState("Bob")

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour, ${inputValue} !`);
    setinputValue("");
  }

  const handleChange = (event) => {
    setinputValue(event.target.value);
  }

  return (
    <div>
      <h1>Bienvenue chez nous</h1>
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
          <input 
            value={inputValue} 
            onChange={handleChange} 
            type="text" 
            placeholder='Entrez votre prénom...' 
            required />
          <button type="submit">Accédez à votre espace</button>
      </form>
    </div>
  )
}
