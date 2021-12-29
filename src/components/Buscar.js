import React, { useState } from "react";
import { obtenerUsuarioPorDni } from "../service/apiService";
const Buscar = ({ setUser, getUser }) => {
  // aqui va las funciones  del input
  const [value, setValue] = useState();
  const actualizarInput = (e) => {
    setValue(
      //cogiendo el estado de value, spreadoperator
      e.target.value
    );
  };

  const userDni = async (value) => {
    try {
      const valor = parseInt(value);
      const data = await obtenerUsuarioPorDni(valor);
      console.log(data);
      if (data.ok == false) {
        console.log(data);
        getUser();
      } else {
        setUser([data]);
      }
    } catch (error) {
      getUser();
      console.log(error);
    }
  };
  return (
    <div>
      <div className="col-7 my-3">
        <h4 className="text-white">Ingrese Dni para buscar</h4>
        <div className="input-group ">
          <input
            type="number"
            aria-label="First name"
            className="form-control"
            name="dni"
            value={value}
            onChange={(e) => {
              actualizarInput(e);
            }}
            required
          />
          <button
            class="btn btn-info"
            type="submit"
            onClick={() => {
              userDni(value);
            }}
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buscar;
