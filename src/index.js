import React from 'react'
import ReactDOM from 'react-dom'

// importing components
import Header from './components/Header'
import Main from './components/Main'

// importing sass & stylesheets
import './sass/index.sass'

function App() {
    return(
        <>
            <Header/>
            <Main/>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));