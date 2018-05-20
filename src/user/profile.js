import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './user.css'
import firebase from 'firebase'
import {ref} from '../config/firebase'
import {signOut} from '../config/user_manage'
class Profile extends Component {
constructor(props){
    super(props)
    this.state={
        uid:'',
        fullname:'',
        cash:0,
        hours:0,
        point:0,
        data:[]
    }
    this.SignOut = this.SignOut.bind(this)
}
SignOut(){
    signOut().then(()=>{
        this.props.history.push('/')
    })

}
componentDidMount() {
    let user = firebase.auth().currentUser;
    let than = this   
    let data=[]
	if (user) {
        //   console.log(this.props.match.params.uid)
    
     this.setState({uid:this.props.match.params.uid})  
          ref.child(`users/${this.props.match.params.uid}`).on('value',res=>{
            data=[];
            res.forEach(shot => {
                let key = shot.key
                let value = shot.val()
                // console.log(key ,value)
                data.push(shot.val()) 
            })
            // console.log(data)
           this.setState({data:data})
        })
       
	} else { 
	       this.props.history.push('/login')
   }
}
  render() {
    const {data} = this.state
    let url_logo = require('../img/logo.jpg')
    return (
      <div>
         <div className="layout_profile">
            <div className="logo_profile">
                    <img  className="image is-128x128" src={url_logo} alt='img'/>
            </div>
            <div className="App">
                <h4 className="title is-3">Profile</h4>
            </div>
        <div className="detail">
            <div className="title_detail">
                <i className="fas fa-user"></i><b>&nbsp;&nbsp;Full Name&nbsp;&nbsp;</b><b>{data[1]}</b>
            </div>
            <div className="title_detail">
                    <i class="fas fa-star"></i><b>&nbsp;&nbsp;Points&nbsp;&nbsp;</b>{data[3]} <b>&nbsp;&nbsp;&nbsp;point</b>
            </div>
            <div className="title_detail">
            <i class="fas fa-money-bill-alt"></i><b>&nbsp;&nbsp;Cash&nbsp;&nbsp;</b>{data[0]}<b>&nbsp;&nbsp;&nbsp;THB</b>
            </div>
            <div className="title_detail">
                <i class="fas fa-clock"></i><b>&nbsp;&nbsp;Hours&nbsp;&nbsp;</b>{data[2]} <b>&nbsp;&nbsp;&nbsp;H</b>
            </div>
        </div>
         </div>
         <br/>
         <br/>
         <a  onClick={this.SignOut} className="button is-danger is-outlined">LOGOUT</a>
      </div>
    );
  }
}
export default Profile;