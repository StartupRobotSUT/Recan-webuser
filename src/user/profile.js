import React, { Component } from 'react';
import './user.css'
import firebase from 'firebase'
import {ref} from '../config/firebase'
import {signOut} from '../config/user_manage'
import {Link} from 'react-router-dom'
class Profile extends Component {
constructor(props){
    super(props)
    this.state={
        uid:'',
        fullname:'',
        cash:0,
        hours:0,
        point:0,
        change:false,
        profileDetail:{}
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
    let profileDetail = {}
	if (user) {
     this.setState({uid:this.props.match.params.uid})  
          ref.child(`users/${this.props.match.params.uid.toLocaleUpperCase()}`).on('value',res=>{
            res.forEach(shot => {
                profileDetail[`${shot.key}`] = shot.val()
            })
            // console.log(data)
            this.setState({profileDetail:profileDetail})
            if(profileDetail.hours > 10){
                const hours = parseInt(profileDetail.hours) - 10
                ref.child(`users/${this.state.uid.trim().toLocaleUpperCase()}/hours`).set(10).then(()=>{
                    const point = hours * 70 + parseInt(profileDetail.point);
                    ref.child(`users/${this.state.uid.trim().toLocaleUpperCase()}/point`).set(point).then(()=>{
                            // console.log("Update SCCUSS!!")
                })
             })
               
            }
        })
    
        ref.child('relations').on('value',res =>{
            let data  = Object.keys(res.val())
            for(let i = 0 ;i<data.length;i++){
                //console.log(res.val()[data[i]])
                if(res.val()[data[i]] === this.state.uid){
                    if(data[i]!=user.uid){
                        // console.log(data[i])
                        ref.child(`relations/${data[i]}`).remove()
                    }
                }
            }
            // console.log(data)
            
        })
	} else { 
	       this.props.history.push('/login')
   }
   this.EnableChangeSystem()
}
EnableChangeSystem(){
    ref.child('Systems/change').on('value', res => {
        //  console.log(res.val())
         if(res.val() === 1)
            this.setState({change:true})
        else if(res.val() === 0) 
           this.setState({change:false})
    })
}

  render() {
    const {profileDetail} = this.state
    let url_logo = require('../img/logo.jpg')
    return (
      <div>
         <div className="layout_profile">
            <div className="logo_profile">
                    <img  className="image is-128x128" src={url_logo} alt='img'/>
            </div>
            <div className="App">
                <div className="title_profile"><i className="far fa-user-circle"></i>&nbsp;&nbsp;Profile</div>
            </div>
        <div className="detail">
            <div className="title_detail">
                <i className="fas fa-user"></i><b>&nbsp;&nbsp;&nbsp;&nbsp;</b><b>{profileDetail.fullname}</b>
            </div>
            <div className="title_detail">
                    <i className="fas fa-star"></i><b>&nbsp;&nbsp;Points&nbsp;&nbsp;</b>{profileDetail.point} <b>&nbsp;&nbsp;&nbsp;point</b>
            </div>
            <div className="title_detail">
            <i className="fas fa-money-bill-alt"></i><b>&nbsp;&nbsp;Cash&nbsp;&nbsp;</b>{profileDetail.cash}<b>&nbsp;&nbsp;&nbsp;THB</b>
            </div>
            <div className="title_detail">
                <i className="fas fa-clock"></i><b>&nbsp;&nbsp;Hours&nbsp;&nbsp;</b>{profileDetail.hours} <b>&nbsp;&nbsp;&nbsp;H</b>
            </div> 
                { this.state.change ? <Link to={`/user/change/${this.state.uid.trim()}`}><a className="btnetxt button is-success is-rounded"><i className="fas fa-exchange-alt"></i>&nbsp;&nbsp;Change Point to Hours</a></Link> : ""}
        </div>
               <a  onClick={this.SignOut} className="button is-danger is-outlined">LOGOUT</a>  
        <br/><br/>
         </div>
        
      </div>
    );
  }
}
export default Profile;