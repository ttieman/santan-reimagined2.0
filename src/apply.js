import React  from "react";
import $ from "jquery";
import { ReactDOM } from "react";
import { Modal,
         Form,
         Card,
         Container
             } from "react-bulma-components";

const applyPopup = $('#applyModal');

document.addEventListener('DOMContentLoaded' , () => {
    
    function openModal(applyPopup){
        applyPopup.classList.add('is-active');
    }
    function closeModal(applyPopup){
        applyPopup.classList.remove('is-active');
    } 
    function closeAllModals(){
        (document.querySelectorAll)('.modal')
    }
})

function buttonClick() {
 return  ( <Modal id="applyModal">
        
            <Modal.Card.Header>
                <Modal.Card.Title><p>This is the modal!</p></Modal.Card.Title>
            </Modal.Card.Header>
       
    </Modal>);
 }

 export default buttonClick;
