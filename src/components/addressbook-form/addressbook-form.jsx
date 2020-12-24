import React, {Component} from 'react'
import './addressbook-form.scss';
import { useParams,Link, withRouter } from 'react-router-dom';
import logo from '../../assets/book.jpeg';
import cross from '../../assets/cross.jpeg';
import AddressbookService from '../../services/addressbook-service';
import { checkFullName,checkAddress,checkZip ,checkPhoneNumber} from "./validations.js";


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
            phoneNumber:'',
            fullNameError: "",
            addressError: "",
            zipError: "",
            phoneNumberError: ""
        }
        this.changeFullNameHandler=this.changeFullNameHandler.bind(this);
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
        this.changeCityHandler=this.changeCityHandler.bind(this);
        this.changeStateHandler=this.changeStateHandler.bind(this);
        this.changeZipHandler=this.changeZipHandler.bind(this);
        this.changePhoneNumberHandler=this.changePhoneNumberHandler.bind(this);
    }

    componentWillMount(){
        if(this.state.id === 'new'){
            return
        }else{
            AddressbookService.getContactById(this.state.id).then((res) =>{
                let contact = res.data.data;
                let Updatefullname=contact.fullName;
                let Updateaddress=contact.address;
                let Updatecity=contact.city;
                let Updatestate=contact.state;
                let Updatezip=contact.zip;
                let Updatephonenumber=contact.phoneNumber;

                this.setState({
                    fullName: Updatefullname,
                    address: Updateaddress,
                    city: Updatecity,
                    state: Updatestate,
                    zip: Updatezip,
                    phoneNumber: Updatephonenumber
                });
            });
        }     
    }

    saveOrUpdateContact = (event) => {
        console.log("Inside save");
        event.preventDefault();
        let contact = {
            fullName: this.state.fullName,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            phoneNumber: this.state.phoneNumber,
        };
        console.log('contact => ' + JSON.stringify(contact));
        if(this.state.id === 'new'){
            AddressbookService.createContact(contact).then(res =>{
                this.props.history.push('/home');
            });
        }else{
            AddressbookService.updateContact(contact, this.state.id).then( res => {
                this.props.history.push('/home');
            });
        }
        alert("Contact Saved");
    }

    validateData =(data)=>{
        if(data.fullNameError!=""){
            return false;
        }
        return true;

    }

    allFieldAdded = () =>{

        if(this.state.fullNameError != "")
          return false;
       
        if(this.state.addressError != "")
          return false;

        if(this.state.zipError != "")
          return false;

        if(this.state.phoneNumberError != "")
          return false;

        if(this.state.fullName == "")
          return false;

        if(this.state.address == "")
          return false;

        if(this.state.city == "")
          return false;

        if(this.state.state == "")
          return false;

        if(this.state.zip == "")
          return false;

        if(this.state.phoneNumber == "")
          return false;
          
        return true;

    }

    changeFullNameHandler =(event)=>{
        this.setState({fullName:event.target.value});
        try {
            checkFullName(event.target.value);
            this.setState({ fullNameError: "" });
        } catch (error) {
            this.setState({ fullNameError: error });
        }
    }
    changeAddressHandler =(event)=>{
        this.setState({address: event.target.value});
        try {
            checkAddress(event.target.value);
            this.setState({ addressError: "" });
        } catch (error) {
            this.setState({ addressError: error });
        }
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
        try {
            checkZip(event.target.value);
            this.setState({ zipError: "" });
        } catch (error) {
            this.setState({ zipError: error });
        }
    }
    changePhoneNumberHandler =(event)=>{
        this.setState({phoneNumber: event.target.value});
        try {
            checkPhoneNumber(event.target.value);
            this.setState({ phoneNumberError: "" });
        } catch (error) {
            this.setState({ phoneNumberError: error });
        }
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
                <div class = "form-image" ><Link to="/home"><img src={cross} /></Link></div>
            </div>
            <div class="row-content">
                <input class="input" value={this.state.fullName} onChange={this.changeFullNameHandler} type="text" id="fullName" name="fullName" placeholder="Full Name" required/>
                <error-output class="text-error" for="text" value={this.state.fullNameError}>{this.state.fullNameError}</error-output>
            </div>
            <div class="row-content">
                <textarea class="input" id="address" value={this.state.address} onChange={this.changeAddressHandler} name="address" placeholder="Address" styles="height:100px"></textarea>
                <error-output class="text-error" for="text" value={this.state.addressError}>{this.state.addressError}</error-output>
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
                <error-output class="text-error" for="text" value={this.state.zipError}>{this.state.zipError}</error-output>
              </div>
            </div>
            <div class="row-content">
                <input class="input" type="text" name="phoneNumber" id="phoneNumber" value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler} placeholder="Phone Number" required/>
                <error-output class="text-error" for="text" value={this.state.phoneNumberError}>{this.state.phoneNumberError}</error-output>
            </div>
            <div class = "buttonParent">
                <div class = "submit-reset">
                    <button type = "submit" class = "button submitButton" id="submitButton" disabled ={!this.allFieldAdded()} onClick={this.saveOrUpdateContact} >Add</button>
                    <button type ="button"  class = "button resetButton" id ="resetButton">Reset</button>
                </div>
            </div>
            </form>
            </div>
        </div>    
    );
}
}
export default withRouter(AddBookForm);