import React from "react"
import "./sign-in.styles.scss"
import {auth, signInWithGoogle} from "../../firebase/firebase.utils"
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

  handleSubmit = async event => {
    event.preventDefault();

    const {email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email,password)
      this.setState({email:'', password:''})

    } catch (error) {
      console.log(error)
    }

    this.setState({email:'', password:''})
  }
  
  handleChange = event => {
    const {name, value }  = event.target
    this.setState({[name]:value})
  }
  
  render(){
    const {email, password} = this.state
    return (
      <div className="sign-in">
        <h1>I already have an  account </h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
        <FormInput type="text" name="email" value={email} onChange={this.handleChange} label="Email" required></FormInput>
        <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="Password" required></FormInput>

          <div className="buttons">
            <CustomButton type="submit" value="Submit"> Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle } isGoogleSignIn > Sign In with Google</CustomButton>

          </div>
        </form>
      </div>
    )
  }
}

export default SignIn