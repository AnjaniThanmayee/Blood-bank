import React from 'react'
import Donar from '../Donar/donar'
import Recipient from '../Recipient/recipient';
import Hospital from '../Hospital/hospital';
class Request extends React.Component{
    state= {
        val:"",
        recipient:false,
        req:true,
        donar:false,
        hospital:false
    }

    onValueChange=(event)=> {
        if (event.target.value==="Recipient"){
            this.setState({recipient: true});
            this.setState({donar:false});
            this.setState({hospital:false})
        }
        if (event.target.value==="Donar"){
            this.setState({donar: true});
            this.setState({recipient: false});
            this.setState({hospital:false})
            }
        if (event.target.value==="Hospital"){
            this.setState({hospital: true});
            this.setState({recipient: false});
            this.setState({donar:false});
            }
      }
    render(){
        const {recipient,donar,hospital}=this.state
        return(
            
            <div className='bgcon' >
            
            <label htmlFor='gender'>Who are You?</label>
            <div>
                <input type="radio" value="Recipient" name="gender" 
                checked={this.state.val==="Recipient"}
                onChange={this.onValueChange}
                /> Recipient<br/>
                <input type="radio" value="Hospital" name="gender"
                checked={this.state.val==="Hospital"}
                onChange={this.onValueChange}
                /> Hospital<br/>
                <input type="radio" value="Donar" name="gender"
                checked={this.state.val==="Donar"}
                onChange={this.onValueChange}
                /> Donar<br/>
                {recipient?<Recipient/>:""}
                {hospital?<Hospital/>:""}
                {donar ? <Donar/>:""}

              </div>
              </div>

        )
    }
}

export default Request