import React from 'react'

class Bomb extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            count:0,
            display: 'loading...'
        }
    }

    updateDisplay(){
        let count = this.state.count
        if(count>=8){
            clearInterval(this.interval)
            return('BOOOM!')
        } else if (count % 2 === 0){
            return('tick')
        } else{
            return('tock')
        }
    }

    render(){
        return(
            <div>
                <p>
                    {this.updateDisplay()}
                </p>
            </div>
        )
    }

    componentDidMount(){
        this.interval = setInterval(()=>(this.setState({
            count: this.state.count + 1
        })), 1000)
        }

    componentWillUnmount() {
        clearInterval(this.interval)
      }

}

export default Bomb