import styled from "styled-components";

const COLORS = {
  primary: {
    "--main": "#afdfd4",
    "--accent": "black",
  },
  secondary: {
    "--main": "#afdfd4",
    "--accent": "black",
  },
};

function Button({ variant = "fill", color = "primary", ...props }) {
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  }

  return <Component style={COLORS[color]} {...props} />;
}

const ButtonBase = styled.button`
    margin-bottom: 5px;
    margin-top: 10px;
    padding: 6px 20px 6px 20px;
    background: #afdfd4;
    border-radius: 20px;
    border: 2px solid #9fd0c1;
    font-family: Georgia, serif;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const FillButton = styled(ButtonBase)`
  background-color: var(--main);
  color: var(--accent);

  &:hover {
    background: #7fa69a;
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: white;
  color: var(--main);
  border: 2px solid var(--main);

  &:hover {
    background: #7fa69a;
  }
`;

export default Button;
