import React from 'react'

function Header() {
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
                            <select className='programming-language select' >
                                <option value='alllanguages'>All Languages</option>
                                <option value="python">Python</option>
                                <option value="javascript">JavaScript</option>
                            </select>

                        </div>
                         
                        <div>
                            <select className='trending-time select'>
                                <option value="volvo">Trending Today</option>
                                <option value="volvo">Trending This week</option>
                                <option value="volvo">Trending This Month</option>
                            </select>

                        </div>  
                        
                    </div>
                </div>
                
            </div>
        </header>
    )
}

export default Header 