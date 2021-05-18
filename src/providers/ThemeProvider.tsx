import React, { PropsWithChildren, useState } from "react";
const { Provider, Consumer } = React.createContext({ theme: 'Day', toggleTheme: () => console.log('123')});

const ThemeContextProvider: React.FC = (props: PropsWithChildren<unknown>) => {

  const [state, setState] = useState({ theme: 'Day', })

  const toggleTheme = () => {
    setState({theme: state.theme === "Day" ? "Night" : "Day"});
  };

    return (
      <Provider
        value={{ theme: state.theme, toggleTheme }}
      >
        {props.children}
      </Provider>
    );
  }

export { ThemeContextProvider, Consumer as ThemeContextConsumer };