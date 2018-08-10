import React from 'react'
import {Link,Redirect} from 'react-router-dom'
import './user.css'
// import {ref} from '../config/firebase'
import {resetPassword} from '../config/user_manage'
let url_logo = require('../img/logo.jpg')
class resetPass extends React.Component{
    constructor(props){
      super(props)
      this.state={
          student_id:'',
          password:'',
          error:{},
          done:false,
          email:''
      }
      this.haadleInputChange = this.haadleInputChange.bind(this)
      this.handleClick = this.handleClick.bind(this)
}
haadleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
	if(!!this.state.error[event.target.name]){  
		let error = Object.assign({},this.state.error)
		delete error[event.target.name]
		this.setState({
			[event.target.name]:event.target.value,
			error
		})
	}else{
		this.setState({
			[name]: value
		  });
    }
 }
handleClick(){
   let error ={}
   if(this.state.email==="") error.student_id ="! email is empty";
   this.setState({error})
//    console.log(`${this.state.student_id}@recan.ac.th`)
//      toLowerCase();
   const inValid = Object.keys(error).length===0
   if(inValid){
      resetPassword(this.state.email).then(()=>{
        console.log("LOGIN SCCUSS!!")
        this.setState({done:true})
      }).catch((err)=>{
          console.log(err)
      })
    }
}
    render(){
        const Form_con =(
	 	   <div className="layout_login">
            <div className="logo_login">
                <figure className="image is-128x128">
                    <img src={url_logo} alt='img'/>
                </figure>
           
            </div>
             <h4 className="title is-4"><b>Reset Password</b></h4>
             <h4 className="title is-5">Check your email</h4>
				 <p className="field" style={{textAlign:'center'}}>
	 			    <Link to={'/signup'} ><a><u>Sign Up</u></a></Link>
				 </p>
                 <p className="field" style={{textAlign:'center'}}>
	 			    <Link to={'/login'} ><a><u>LOGIN</u></a></Link>
				 </p>
	 		</div>
	 		)
        const Form =(
	 	   <div className="layout_login">
            <div className="logo_login">
                <figure className="image is-128x128">
                    <img src={url_logo} alt='img'/>
                </figure>
           
            </div>
             <h4 className="title is-4"><b>Reset Password</b></h4>
	 			<p className="field is-center">
	 				<input  className="input is-success"
	 				    	type="email" 
                            name="email"
                            value={this.state.email}
                            placeholder="Email"
                            onChange={this.haadleInputChange}
	 				   		/>			 
                    <span className="noti">{this.state.error.student_id}</span>
	 			</p>
				
	 			<p className="field" style={{textAlign:'center'}}>
                  <br/>
	 			    <a  className="button is-info" onClick={this.handleClick}><b>Send</b></a>
	 			</p>
				 <p className="field" style={{textAlign:'center'}}>
	 			<Link to={'/signup'} ><a><u>Sign Up</u></a></Link>
				 </p>
	 		</div>
	 		)
        return(
            <div className="login">
                {this.state.done?Form_con:Form}
               
            </div>
        )
    }
}
export default resetPass