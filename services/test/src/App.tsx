import "./App.css";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { vars, classes } from "@fastcampus/themes";

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
      <Text className="heading4xl">
        Edit <code>src/App.tsx</code> and save to reload.
      </Text>
    </div>
  );
};

const Text = styled.p`
  ${classes.typography.heading.xl}
  color: ${({ theme }) => {
    //@ts-ignore
    return theme.colors.gray[900];
  }};
`;
