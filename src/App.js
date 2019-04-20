import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { LocaleContext, ThemeContext } from "./context";

const Section = () => {
    return (
        <div>
            {/* <NestedControl theme={props.theme} /> */}
            <NestedControl />
        </div>
    );
};

class NestedControl extends React.Component {
    static contextType = ThemeContext;
    render() {
        // return <p>{this.props.theme} theme</p>;
        return (
            <>
                <p>{this.context} theme</p>
                <LocaleContext.Consumer>
                    {value => <p>locale: {value}</p>}
                </LocaleContext.Consumer>
            </>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <LocaleContext.Provider value="en">
                        <ThemeContext.Provider value="light">
                            <Section theme="dark" />
                        </ThemeContext.Provider>
                    </LocaleContext.Provider>
                </header>
            </div>
        );
    }
}

export default App;
