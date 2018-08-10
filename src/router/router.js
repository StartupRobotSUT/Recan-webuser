import React from 'react'
import{Route,Switch} from 'react-router'
import Info from '../info'
import  Login from '../user/login'
import  Signup from '../user/signup'
import resetPass from '../user/resetPass'
import Profile from '../user/profile'
import {ref} from '../config/firebase'
import ChangePointToHous from '../user/change'
// import NotFound from './404not'
class Routes extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			change:false
		}
	}
	componentDidMount(){
		ref.child('Systems/change').on('value', res => {
			//  console.log(res.val())
			 if(res.val() === 1)
				this.setState({change:true})
			else if(res.val() === 0) 
			   this.setState({change:false})
		})
	}
	render(){
		return (
			<div>
				<Switch>
				    	<Route exact path={'/'}  component={Info}/>
                    	<Route  path={'/login'}  component={Login}/>
                    	<Route  path={'/signup'}   component={Signup}/>
						<Route  path={'/resetpassword'}   component={resetPass}/>
                    	<Route exact path={'/user/profile/:uid'} component={Profile}/>
						{ this.state.change ? <Route exact path={'/user/change/:uid'} component={ChangePointToHous}/> : "" }
						<Route component={Info}/>
				</Switch>
			</div>
		)
	}
}
export default Routes