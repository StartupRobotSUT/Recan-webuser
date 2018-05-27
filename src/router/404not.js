import React from 'react';
import {Link} from 'react-router-dom'
class NotFound extends React.Component{
	render(){
		return (
			<div>
				<h1 className="title is-2">มันบัคคคคคค</h1>
                <img src="https://thumbs.gfycat.com/LeafyHorribleFlicker-size_restricted.gif" alt="img"/>
				<p><Link to='/'><h1>Home page</h1></Link></p>
			</div>
		)
	}
}
export default NotFound