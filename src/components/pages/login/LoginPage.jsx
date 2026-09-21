import LoginForm from "../login/LoginForm.jsx";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {
  return (
      <LoginPageStyled>
        <Logo />
        <LoginForm />
      </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ::before {
    content: "";
    background-size: cover;
    background: rgba(0, 0, 0, 0.7) url("/images/burger-and-fries-background.jpg") center;
    background-blend-mode: darken;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`
