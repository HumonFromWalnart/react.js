import React from "react";

export function TEST (){
class LoggingButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    handleClick = () => {
      console.log('this is:', this);
    };
    render() {
      return (
        <button style={{width:'100px', height:'100px'}} onClick={this.handleClick}>
          Click me
        </button>
      );
    }
  }
}