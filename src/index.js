import React from 'react'
import ReactDOM from 'react-dom'

// importing components
import Header from './components/Header'
import Main from './components/Main'

// importing sass & stylesheets & fonts
import './sass/index.scss'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            repo: [],
            allLanguages:[],
            selectedLanguage:null,
            selectedDate:'daily'
            }
    }

    setSelectedLanguage=(value)=>{
        this.setState({selectedLanguage:value},()=>{
            this.fetchrepo()
        })
    }

    setSelectedDate=(value)=>{
        this.setState({selectedDate:value},()=>{
            this.fetchrepo()
        })
    }

    componentDidMount() {
        this.fetchrepo();
        this.fetchLang()
    }

    fetchrepo() {
        const {selectedLanguage,selectedDate} = this.state;
        let query = ''
        const url = 'https://github-trending-api.now.sh/repositories'
        if(selectedLanguage){
            query += `?language=${selectedLanguage}`
        }
        if(selectedDate) {
            query += query ? '?' : '&'
            query+= `since=${selectedDate}`
        }
        fetch(url+query)
        .then(res => {
            return res.json()})
        .then(data => {
            this.setState({repo:data})
        })
    }

    fetchLang() {
        const url = 'https://github-trending-api.now.sh/languages'
        fetch(url)
        .then(res => {
            return res.json()})
        .then(data => {
            this.setState({allLanguages:data})
        })
    }

    render(){
        const {repo,allLanguages,selectedLanguage, selectedDate} = this.state

        return(
            <> 
            <Header setSelectedLanguage={this.setSelectedLanguage} 
             selectedLanguage={selectedLanguage}
              languages={allLanguages}
              selectedDate={selectedDate}
              setSelectedDate={this.setSelectedDate}
              />
            <Main repo={repo}/>
        </>
    )
}
}

ReactDOM.render(<App />, document.getElementById('root'));