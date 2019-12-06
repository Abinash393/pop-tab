import React from 'react'
import ReactDOM from 'react-dom'

// importing components
import Header from './components/Header'
import Main from './components/Main'

// importing sass & stylesheets & fonts
import './sass/index.scss'

function App() {
    return(
        <> 
            <Header/>
            <Main/>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));