import React, { Component } from 'react'

class FormEdit extends Component{
    constructor(props){
        super(props)

        this.state= {
            firstName: "John",
            lastName: "Doe",
            toggle1: true ,
            toggle2: false 
        }

        this.dirtyState={
            firstName: '', 
            lastName: ''
        }

    this.handleFirstChange = this.handleFChange.bind(this);
    this.handleFirstChange = this.handleLChange.bind(this);
}

toggleEdit =() => {
    if (this.state.toggle1 === true) {
      this.setState({
          toggle1: false,
          toggle2: true
        })
      } else {
        this.setState({
            toggle1: true,
            toggle2: false
          })
      }
    }

handleFChange(e) {
    this.dirtyState.firstName=e.target.value;
}

handleLChange(e) {
    this.dirtyState.lastName=e.target.value;
}

updateState = () => {
    this.setState({
      firstName: this.dirtyState.firstName,
      lastName: this.dirtyState.lastName
    })
}

handleSubmit=(event)=> {
    event.preventDefault();
    this.updateState();
    this.toggleEdit();
  }

render() {
    return(
        <div>
            <div>
            {this.state.toggle1 && (
                <div>
                    First Name: {this.state.firstName} <br/>
                    Last Name: {this.state.lastName} <br/>
                    <button class="btn" onClick={this.toggleEdit}>edit</button>
                </div>
                )}
                {this.state.toggle2 && (
                <form onSubmit={this.handleSubmit}>
                <label>First Name:</label>
                <input type="text" name="FirstName" onChange={this.handleChange}/><br/>
                <label>Last Name:</label>
                <input type="text" name="LastName" onChange={this.handleChange} /><br/>
                <button class="btn" type="submit">Submit</button>  
                <button class="btn" onClick={this.toggleEdit}>Cancel</button>
                </form>
                )}
            </div>

           
        </div>
    );
}

}

export default FormEdit; 