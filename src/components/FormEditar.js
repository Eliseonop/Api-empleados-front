import React, { useState, useEffect } from "react";
import { editarUsuarioPorId, obtenerUsuarioPorId } from "../service/apiService";

import { Modal, Button } from "react-bootstrap";
const FormEditar = ({ i, getUser }) => {
  // ////// ract bootstrap
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /////
  const [value, setValue] = useState({
    nombre: "",
    apellido: "",
    area: "",
    dni: 0,
    date: "",
  });
  const actualizarInput = (e) => {
    setValue({
      ...value, //cogiendo el estado de value, spreadoperator
      [e.target.name]: e.target.value,
    });
  };

  const obtenerUser = async () => {
    try {
      handleShow();
      const { data } = await obtenerUsuarioPorId(i);
      console.log(data);
      setValue(data);
    } catch (error) {}
  };
  const manejarSubmit = async (e) => {
    e.preventDefault();
    await editarUsuarioPorId(i, value);
    await getUser();
  };
  return (
    <div>
      <>
        <button className="btn btn-outline-primary" onClick={obtenerUser}>
          Editar
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar</Modal.Title>
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
                Guardar
              </button>
            </Modal.Footer>
          </form>
        </Modal>
      </>
    </div>
  );
};

export default FormEditar;
