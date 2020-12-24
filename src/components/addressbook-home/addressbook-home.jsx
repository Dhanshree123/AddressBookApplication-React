import React, {Component} from 'react'
import './addressbook-home.scss';
import logo from '../../assets/book.jpeg';
import add from '../../assets/icons/add-24px.svg';
import deleteIcon from '../../assets/icons/delete-black-18dp.svg';
import updateIcon from '../../assets/icons/create-black-18dp.svg';
import {useParams,Link,withRouter} from 'react-router-dom';
import AddressbookService from '../../services/addressbook-service';

class AddressbookHome extends Component{
    constructor(props) {
        super(props)
        this.state = {
                contacts: [],
                allContacts: [],
        }
        this.deleteContact = this.deleteContact.bind(this);
        this.updateContact = this.updateContact.bind(this);
    }

    componentWillMount(){
        AddressbookService.getContact().then((res) => {
            console.log(res);
            console.log("message : "+res.message);
            console.log(res.data.data);
            this.setState({ contacts: res.data.data});
            this.setState({ allContacts: res.data});
        })
        .catch(err => console.log(err));
        console.log("all" +this.state.contacts);
    }


    deleteContact(id){
        AddressbookService.deleteContact(id).then( res => {
            this.setState({contacts: this.state.contacts.filter(contact => contact.id !== id)});
        });
    }
    updateContact(id){
         this.props.history.push(`/form/${id}`);
    }

    render(){
        return(
            <div>
                <header class="header-content header">
            <div class="logo-content">
                <img src={logo} alt="" />
                <div>
                    <span class="add-text">ADDRESS</span><br />
                    <span class="add-text add-book">BOOK</span>
                </div>
            </div>
        </header>
        <div class="main-content">
            <div class="header-content">
              <div class="person-detail-text">
                Person Details <div class="person-count">{this.state.contacts.length}</div>
              </div>
              <Link to="/form/new" class="add-button">
              + Add Person</Link>
            </div>
            <table id="table-display" class="table">
                        <th>Full Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Phone Number</th>
                        <th>Actions</th>
                        {
                            this.state.contacts.map(
                                (contact,id) =>(
                                <tr>
                                    <td>{contact.fullName}</td>
                                    <td>{contact.address}</td>
                                    <td>{contact.city}</td>
                                    <td>{contact.state}</td>
                                    <td>{contact.zip}</td>
                                    <td>{contact.phoneNumber}</td>
                                    <td>
                                    <img id={contact.id} onClick={()=>this.deleteContact(contact.id)} alt="delete" src={deleteIcon} />
                                    <img id={contact.id} onClick={()=>this.updateContact(contact.id)} alt="update" src={updateIcon} />

                                    </td>
                                </tr>
                                )
                            )
                        }
                    </table>
            </div>
            </div>

        )
    }
}

export default withRouter(AddressbookHome) 