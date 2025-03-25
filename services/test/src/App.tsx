import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { vars } from "@fastcampus/themes";
import styled from "@emotion/styled";

function App() {
  const theme = {
    colors: vars.colors.$static.light,
  };
  return (
    <ThemeProvider theme={theme}>
      <View />
    </ThemeProvider>
  );
}

export default App;

const View = () => {
  return (
    <div className="App">
      <Text>
        Edit <code>src/App.tsx</code> and save to reload.
      </Text>
    </div>
  );
};

const Text = styled.p`
  color: ${({ theme }) => {
    //@ts-ignore
    return theme.colors.gray[900];
  }};
`;
