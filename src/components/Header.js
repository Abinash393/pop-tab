import React from 'react'

class Header extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const {setSelectedLanguage ,languages, selectedLanguage,selectedDate,setSelectedDate} = this.props;
    console.log(languages)
    return (
        <header className='header'>
            <div className='wrapper'>
                <div className='container'>
                    <a href='https://github.com/Abinash393/pop-tab' target='_blank' 
                    rel="noopener noreferrer">
                        <img className='github-img' src='images/github-logo-face.svg' alt='github-img'/>
                    </a>
                    {/* right section */}
                    <div className='input-container'>
                        <div>
                            <select onChange={(e)=> setSelectedLanguage(e.target.value)} value={selectedLanguage} className='programming-language select' >
                                <option value={null}>All Languages</option>
                                {
                                    languages.map(lang =>{
                                        console.log(lang)
                                        return <option key={lang.urlParam} value={lang.urlParam}>{lang.name}</option>
                                    }
                                    )
                                }
                                
                            </select>

                        </div>
                         
                        <div>
                            <select className='trending-time select' onChange={(e) => setSelectedDate(e.target.value)} value={selectedDate}>
                                <option value="daily">Trending Today</option>
                                <option value="weekly">Trending This week</option>
                                <option value="monthly">Trending This Month</option>
                            </select>

                        </div>  
                        
                    </div>
                </div>
                
            </div>
        </header>
    )
}

}

export default Header 