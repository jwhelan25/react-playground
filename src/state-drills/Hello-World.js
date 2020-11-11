import React from 'react'

class HelloWorld extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            who:'wld'
        }
    }

    worldClicked (){
        this.setState({who:'World'})
    }
    freindClicked (){
        this.setState({who:'freind'})
    }
    reactClicked (){
        this.setState({who:'react'})
    }

    render(){
       
        return(
        <div>
            <p>
                Hello {this.state.who}
            </p>
            <button onClick={()=>this.worldClicked()}>
                World
            </button>
            <button onClick={()=>this.freindClicked()}>
                Friend
            </button>
            <button onClick={()=>this.reactClicked()}>
                React
            </button>
        </div>
        )
    }
}


export default HelloWorld