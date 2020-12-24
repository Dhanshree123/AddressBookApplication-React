import axios from 'axios';

const ADDRESSBOOK_API_BASE_URL = "http://localhost:8081/addressbook";

class AddressbookService {

    getContact(){
        console.log("service hit");
        return axios.get(ADDRESSBOOK_API_BASE_URL+'/get');
    }

    createContact(contact){
        return axios.post(ADDRESSBOOK_API_BASE_URL+'/create', contact);
    }

    getContactById(contactId){
        return axios.get(ADDRESSBOOK_API_BASE_URL + '/get/' + contactId);
    }

    updateContact(contact, contactId){
        return axios.put(ADDRESSBOOK_API_BASE_URL + '/update/' + contactId, contact);
    }

    deleteContact(contactId){
        return axios.delete(ADDRESSBOOK_API_BASE_URL + '/delete/' + contactId);
    }
}

export default new AddressbookService()