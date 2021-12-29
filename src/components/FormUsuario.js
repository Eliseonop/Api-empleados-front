import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { crearUsuario } from "../service/apiService";
// import Swal from "sweetalert2";

const FormUsuario = ({ getUser }) => {
  // ////// ract bootstrap
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //////////////////////////
  const [value, setValue] = useState({
    nombre: "",
    apellido: "",
    area: "",
    dni: "",
    date: "",
  });
  const actualizarInput = (e) => {
    // console.log(e.target.name, e.target.value);
    setValue({
      ...value, //cogiendo el estado de value, spreadoperator
      [e.target.name]: e.target.value,
    });
  };
  console.log(value);
  const manejarSubmit = async (e) => {
    e.preventDefault();

    // const usuario = JSON.stringify(value);
    try {
      await crearUsuario(value);
      await getUser();
      setValue({
        nombre: "",
        apellido: "",
        area: "",
        dni: "",
        date: "",
      });
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button className="btn btn-primary mt-5  " onClick={handleShow}>
        Agregar Nuevo Empleado
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear</Modal.Title>
        </Modal.Header>
        <form
          onSubmit={(e) => {
            manejarSubmit(e);
          }}
        >
          <Modal.Body>
            <div className="input-group  my-2">
              <span className="input-group-text">Nombre</span>
              <input
                type="text"
                aria-label="First name"
                className="form-control"
                name="nombre"
                value={value.nombre}
                onChange={(e) => {
                  actualizarInput(e);
                }}
              />
            </div>
            <div className="input-group my-2">
              <span className="input-group-text">Apellido</span>
              <input
                type="text"
                aria-label="First name"
                className="form-control"
                name="apellido"
                value={value.apellido}
                onChange={(e) => {
                  actualizarInput(e);
                }}
              />
            </div>
            <div className="input-group my-2">
              <span className="input-group-text">DNI</span>
              <input
                type="number"
                aria-label="First name"
                className="form-control"
                name="dni"
                value={value.dni}
                onChange={(e) => {
                  actualizarInput(e);
                }}
              />
            </div>
            <div className="input-group my-2">
              <span className="input-group-text">Area</span>
              <input
                type="text"
                aria-label="First name"
                className="form-control"
                name="area"
                value={value.area}
                onChange={(e) => {
                  actualizarInput(e);
                }}
              />
            </div>
            <div className="input-group my-2">
              <span className="input-group-text">Fecha de Inicio</span>
              <input
                type="date"
                aria-label="First name"
                className="form-control"
                name="date"
                value={value.date}
                onChange={(e) => {
                  actualizarInput(e);
                }}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button
              type="submit"
              className="btn btn-success"
              onClick={handleClose}
            >
              Crear
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default FormUsuario;
