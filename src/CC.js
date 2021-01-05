import React from "react";

class CC extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            check: props.check
        }
    }
    NewState = () =>{
        this.setState({check: !this.state.check});
    }
    Another = (num) => {
        return num + 1;
    }
    render(){
        return (
            <div>
                This is working
            </div>
        )
    }
}

export default CC;