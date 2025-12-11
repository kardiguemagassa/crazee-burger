import { useState } from 'react';

export default function LoginForm() {

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
    <form action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous</h1>
        <br />
        <h2>Connectez-vous</h2>
          <input 
            value={inputValue} 
            onChange={handleChange} 
            type="text" 
            placeholder='Entrez votre prénom...' 
            required />
          <button type="submit">Accédez à votre espace</button>
      </form>
  )
}
