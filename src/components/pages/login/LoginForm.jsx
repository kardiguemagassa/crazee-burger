import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { theme } from "../../../theme"

export default function LoginForm() {

  const [inputValue, setinputValue] = useState("")
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    //alert(`Bonjour, ${inputValue} !`);
    setinputValue("");
    navigate(`order/${inputValue}`);
  }

  const handleChange = (event) => {
    setinputValue(event.target.value);
  }

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
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
      </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.P0};
    margin-left: 10px;
  }
`