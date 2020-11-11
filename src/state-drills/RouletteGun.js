import React from 'react'

class RouletteGun extends React.Component{

    constructor(props){

        super(props)
      
        this.state={
            chamber: null,
            spinningTheChamber: false
        }
    }

    updateDisplay(){
        if(this.state.spinningTheChamber === true){
            return(
                'spinning the chamber and pulling the trigger! ...'
            )
        }else if (this.state.chamber !== this.props.bulletInChamber){
            return(
                `you're safe!`
            )
        }else{
            return(
                `BANG!!!!`
            )
        }

    }

    render(){
        return(
            <div>
                <p>
                    {this.updateDisplay()}
                </p>
                <button onClick={()=>this.handleClick()}>
                    Pull the Trigger!
                </button>
            </div>
        )
    }

    handleClick(){
        this.setState({spinningTheChamber: true})

        this.timeout = setTimeout(()=>(
            this.setState({
                chamber: Math.ceil(Math.random()) * 8, spinningTheChamber: false
            })

        ), 2000)
        }

    componentWillUnmount() {
        clearTimeout(this.timeout)
      }



}

RouletteGun.defaultProps = {
    bulletInChamber: 2
}


export default RouletteGun