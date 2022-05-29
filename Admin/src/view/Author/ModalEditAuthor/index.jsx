import React,{useState} from 'react';
import axios from "axios";
import {Modal,Button,Form,Row,Col} from "react-bootstrap";
export default function ModalEditAuthor(props) {
    const [show, setShow] = useState(false);  
    const [values,setValue] = useState();
    const [isDisable,setDisabled] = useState(true);
    const [validated,setValidated] = useState(false);
    const handleClose = () => setShow(false);
        
    const handleShow = () => setShow(true);
    const handleEdit = async (event) =>{
      const token = localStorage.getItem('accessToken');
      event.preventDefault();
      await axios.patch("http://localhost:5000/authors/"+props.dataModal._id,values,{
        headers:{
          'Authorization' : `Bearer ${token}` 
        }
      }).then(response=>{
          alert(response.data.Message)
          props.handleEdit();
          handleClose();
      })
    }
    const inputChange = (event) =>{
      setValidated(true)
      const target = event.target;
      const name = target.name;
      const value = target.value;
      setValue((values)=> ({
        ...values,
        [name] : value
      })
      );
      setDisabled(false);
      if(value === "") {
        setDisabled(true);
      } 
    }
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          <i className="fa fa-edit"></i>
        </Button>
        <Modal show={show} onHide={handleClose} animation={false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title>Sửa tác giả</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                    <Form noValidate validated={validated} className="FormEditAuthor" onSubmit={(event)=> handleEdit(event)}>
                            <Row>
                                <Form.Group as={Col} controlId="formGridId">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type='text' name="id" defaultValue={props.dataModal._id} readOnly required/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridNameAuthor">
                                    <Form.Label>Tên tác giả</Form.Label>
                                    <Form.Control type='text' name="name" defaultValue={props.dataModal.name} required onChange={(event)=>inputChange(event)}/>
                                    <Form.Control.Feedback type="invalid">Vui lòng nhập tên tác giả</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <div className="btnSubmit d-flex justify-content-end">
                                  <Button variant="primary" type="submit" disabled={isDisable}>
                                      Lưu
                                  </Button>
                            </div>
                    </Form>
          </Modal.Body>
        </Modal>
      </>
    )
}
