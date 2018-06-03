import React from 'react'
import{Route,Switch} from 'react-router'
import Info from '../info'
import  Login from '../user/login'
import  Signup from '../user/signup'
import Profile from '../user/profile'
// import NotFound from './404not'
class Routes extends React.Component{
	render(){
		return (
			<div>
				<Switch>
				    	<Route exact path={'/'}  component={Info}/>
                    	<Route exact path={'/login'}  component={Login}/>
                    	<Route exact path={'/signup'}   component={Signup}/>
                    	<Route exact path={'/user/profile/:uid'} component={Profile}/>
						<Route component={Info}/>
				</Switch>
			</div>
		)
	}
}
export default Routes