import { useState } from "react";
import { useNavigate } from "react-router";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Header from "./Header";
import styled from "styled-components";
import { Button } from "./styles";

function Login({ onLogin }) {

  const [showLogin, setShowLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([])

  const history = useNavigate()

  function handleSubmit(e, route, bodyObj) {
    e.preventDefault();
    setIsLoading(true);
    fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyObj),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user)
          history.push('/home')
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <BackgroundStyle>
      <Header />
      <FormWrapper>
        <Logo>Log In</Logo>
        {showLogin ? (
          <>
            <LoginForm handleSubmit={handleSubmit} isLoading={isLoading} errors={errors} />
            <Divider />
            <div>
              <div className="account-create">
                Don't have an account? &nbsp;
              </div>
              <Button color="secondary" onClick={() => setShowLogin(false)}>
                Sign Up
              </Button>
            </div>
          </>
        ) : (
          <>
            <SignUpForm handleSubmit={handleSubmit} isLoading={isLoading} errors={errors} />
            <Divider />
            <div>
              <div className="account-create">
                Already have an account? &nbsp;
              </div>
              <Button color="secondary" onClick={() => setShowLogin(true)}>
                Log In
              </Button>
            </div>
          </>
        )}
      </FormWrapper>
    </BackgroundStyle>
  );
}

const Logo = styled.h1`
  font-family: Georgia, serif;
  font-size: 36px;
  color: black;
  margin: 8px 0 16px;
  text-align: center;
`;

const FormWrapper = styled.section`
    font-family: Georgia, serif;
    background: #f3eedb;
    padding: 10px;
    width: 50%;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 25px;
    border-radius: 5px;
    border: 5px solid #afdfd4;
    box-shadow: 0 0 0 10px #f3eedb;

    .account-create {
      text-align: center;
    }
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

const BackgroundStyle = styled.div`
  background: #ecf6f3;
  height: 100vh;
`

export default Login;
