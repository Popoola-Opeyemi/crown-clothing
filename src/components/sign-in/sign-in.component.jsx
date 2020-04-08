import React from "react"
import "./sign-in.styles.scss"
import {signInWithGoogle} from "../../firebase/firebase.utils"
import FormInput from "../../components/form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

class SignIn extends React.Component{
  constructor(){
    super()
    this.state = {
      email:"",
      password:""
    }
  }
  handleSubmit = (event) => {
    event.PreventDefault();

    this.setState({email:'', password:''})
  }
  handleChange = (event) => { 
    const {value, name} = event
    this.setState({[name]:value})
  }
  render(){
    return (
      <div className="sign-in">
        <h1>I already have an  account </h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput type="email" handleChange={this.handleChange} value={this.state.email} label="email" required/>
          <FormInput type="password" handleChange={this.handleChange} value={this.state.password} label="password" required/>
          <div className="buttons">
            <CustomButton type="submit"> Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle } isGoogleSignIn > Sign In with Google</CustomButton>

          </div>
        </form>
      </div>
    )
  }
}

export default SignIn