import React, {Component} from 'react'
import './addressbook-form.scss';
import { useParams,Link, withRouter } from 'react-router-dom';
import logo from '../../assets/book.jpeg';
import cross from '../../assets/cross.jpeg';
class AddBookForm extends Component{
    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,
            fullName: '',
            address:'',
            city:'',
            state:'',
            zip:'',
            phoneNumber:''
        }
        this.changeFullNameHandler=this.changeFullNameHandler.bind(this);
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
        this.changeCityHandler=this.changeCityHandler.bind(this);
        this.changeStateHandler=this.changeStateHandler.bind(this);
        this.changeZipHandler=this.changeZipHandler.bind(this);
        this.changePhoneNumberHandler=this.changePhoneNumberHandler.bind(this);
    }

    changeFullNameHandler =(event)=>{
        this.setState({fullName:event.target.value});
        console.log(this.state.fullName);
    }
    changeAddressHandler =(event)=>{
        this.setState({address: event.target.value});
        console.log(this.state.address);
    }
    changeCityHandler =(event)=>{
        this.setState({city: event.target.value});
        console.log(this.state.city);
    }
    changeStateHandler =(event)=>{
        this.setState({state: event.target.value});
        console.log(this.state.state);
    }
    changeZipHandler =(event)=>{
        this.setState({zip: event.target.value});
        console.log(this.state.zip);
    }
    changePhoneNumberHandler =(event)=>{
        this.setState({phoneNumber: event.target.value});
        console.log(this.state.phoneNumber);
    }
    render(){
    return(
        <div>
           <header class="header-content header">
            <div class="logo-content">
                <img src={logo} alt="" />
                <div>
                    <span class="add-text">ADDRESS</span><br/>
                    <span class="add-text add-book">BOOK</span>
                </div>
            </div>
        </header>
        <div class="form-content">
            <form class="form" action="#">
                <div class="form-head-content">
                <div class="form-head">
                    PERSON ADDRESS FORM
                </div>
                <div class = "form-image" ><a href = "./addressBook_home.html"><img src={cross} /></a></div>
            </div>
            <div class="row-content">
                <input class="input" value={this.state.fullName} onChange={this.changeFullNameHandler} type="text" id="fullName" name="fullName" placeholder="Full Name" required/>
                <error-output class="text-error" for="text"></error-output>
            </div>
            <div class="row-content">
                <textarea class="input" id="address" value={this.state.address} onChange={this.changeAddressHandler} name="address" placeholder="Address" styles="height:100px"></textarea>
                <error-output class="address-error" for="address"></error-output>
            </div>
            <div class="single-row-content">
                <div class="inner-single-row">
                    <select class="select-input" id="city" name="city" value={this.state.city} onChange={this.changeCityHandler} required>
                  <option value="" selected disabled hidden>Select City</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Pune">Pune</option>
                  <option value="Bhopal">Bhopal</option>
                  <option value="Jaipur">Jaipur</option>
                </select>
              </div>
              <div class="inner-single-row">
                <select class="select-input" id="state" name="state" value={this.state.state} onChange={this.changeStateHandler}required>
                  <option value="" selected disabled hidden>Select State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Rajasthan">Rajasthan</option>
                </select>
              </div>
              <div class="inner-single-row">
                <input class="input" type="text" name="zip" id="zip" value={this.state.zip} onChange={this.changeZipHandler} placeholder="Zip" />
              </div>
            </div>
            <div class="row-content">
                <input class="input" type="text" name="phoneNumber" id="phoneNumber" value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler} placeholder="Phone Number" required/>
                <error-output class="phone-error" for="text"></error-output>
            </div>
            <div class = "buttonParent">
                <div class = "submit-reset">
                    <button type = "submit" class = "button submitButton" id="submitButton">Add</button>
                    <button type ="button" onclick="resetForm()"  class = "button resetButton" id ="resetButton">Reset</button>
                </div>
            </div>
            </form></div>
        </div>    
    );
}
}
export default withRouter(AddBookForm);