import React from 'react'
import Toprow from './Toprow'
import Bottomrow from './Bottomrow'
import Midrow from './Midrow'
import LoadingBar from './LoadingBar'
import Contact from './Contact'
import Music from './Music'
import About from './About'
import RowOne from './RowOne'
import RowTwo from './RowTwo'
import RowThree from './RowThree'
import RowFour from './RowFour'



class HomeWrapper extends React.Component{
    state = {
        loadingDone: false,
        entered: true,
        moduleEntered: {
            contact: false,
            music: false,
            about: false
        }

    }


    setActiveOverlay = (page) => {
        this.setState({ activeOverlay: page })
    }

   

    closeModule = (name) => {
        let modules = {...this.state.moduleEntered}
        modules = false
        this.setState({
            moduleEntered: modules
            
        })
    }

    openModule = (name) => {
        console.log('CLICK', name)
        const modules = {...this.state.moduleEntered}
        Object.keys(modules).forEach(module => modules[module] = false)
        modules[name] = true
        this.setState({ moduleEntered: modules})

    }
    


    loadHomepage = () => {
        this.setState({ loadingDone: true })
    }


    componentDidMount(){
        setTimeout(this.loadHomepage, 4000)
    }

    render(){
        const { loadingDone, entered } = this.state
    return(
        <React.Fragment>
            <div className="HomeWrapper">
                {!loadingDone ? 
                    <LoadingBar />
                :
                    <React.Fragment>
                        <Toprow in={entered} />
                        <Midrow 
                            in={entered} 
                            openModule={this.openModule}
                        />
                        <Bottomrow 
                            in={entered}
                            openModule={this.openModule}
                            />
                    </React.Fragment>
                }
            </div>
            <React.Fragment>
                <Contact 
                    in={this.state.moduleEntered.contact}
                    closeModule={this.closeModule}
                />
                <Music
                    in={this.state.moduleEntered.music}
                    closeModule={this.closeModule}
                />
                <About                                   
                    in={this.state.moduleEntered.about}
                    closeModule={this.closeModule}
                />
            </React.Fragment>
                <div   className="HomeWrapperMobile">
                    {!loadingDone ? 
                        <LoadingBar />
                    :
                    <React.Fragment>
                        <RowOne 
                            in={entered}
                            openModule={this.openModule}

                        />
                        <RowTwo
                            in={entered}
                        />
                        <RowThree 
                            openModule={this.openModule}
                            in={entered}
                        />
                        <RowFour 
                            in={entered}
                            openModule={this.openModule}

                        />

                    </React.Fragment>
                    }
                </div>
        </React.Fragment>

    )
        }
}



export default HomeWrapper