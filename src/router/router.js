import React from 'react'
import{Switch,Route} from 'react-router-dom'
import Info from '../info'
import  Login from '../user/login'
import  Signup from '../user/signup'
import Profile from '../user/profile'
class Routes extends React.Component{
	render(){
		return (
			<div>
				<Switch>
				    <Route exact path={'/'} component={Info}/>
                    <Route exact path={'/login'} component={Login}/>
                    <Route exact path={'/signup'} component={Signup}/>
                    <Route exact path={'/user/profile/:uid'} component={Profile}/>
				</Switch>
			</div>
		)
	}
}
export default Routes