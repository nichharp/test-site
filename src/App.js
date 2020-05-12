import React from "react";
import Header from "./components/header/header";
import "./App.scss";

function App() {

    return (
        <div className="App">
            <Header />
            <main className="App-main">
                <h1 className="h1">Hello World</h1>
            </main>
        </div>
    );
}

export default App;
