import { useState, useEffect } from "react";
import React from "react";
import {
  eliminarUsuario,
  LaData,
  obtenerUsuarioPorDni,
} from "../service/apiService";
import Cargando from "./Cargando";
import FormUsuario from "./FormUsuario";
import Buscar from "./Buscar";
import FormEditar from "./FormEditar";
const Lista = () => {
  const [user, setUser] = useState([]);
  const [cargando, setCargando] = useState(true);
  const eliminar = async (id) => {
    try {
      // setCargando(false);
      user.splice(id, 1);
      await eliminarUsuario(id);
      await getUser();
      setCargando(true);
    } catch (error) {
      console.log(error);
    }
  };
  // aqui ontenemos lso usuarios
  const getUser = async () => {
    try {
      const { data } = await LaData();

      setUser(data);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  console.log(user);

  return (
    <>
      <div class="container">
        <div class="row">
          <div className="container-fluid mb-3">
            <FormUsuario getUser={getUser} />
            <Buscar setUser={setUser} getUser={getUser} user={user} />
          </div>

          <div className="col-11 card">
            <>
              {/* <ProductoCard key={i} item={item} /> */}
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Dni</th>
                    <th scope="col">Area</th>
                    <th scope="col">fecha de inicio</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((item, i) => (
                    <tr key={i}>
                      <th scope="row">{i + 1}</th>
                      <td>{item.nombre}</td>
                      <td>{item.apellido}</td>
                      <td>{item.dni}</td>
                      <td>{item.area}</td>
                      <td>{item.date}</td>
                      <td>
                        <div className="d-flex">
                          <span
                            className="btn btn-outline-danger me-2"
                            onClick={() => {
                              eliminar(i);
                            }}
                          >
                            eliminar
                          </span>
                          <span>
                            <FormEditar i={i} getUser={getUser} />
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lista;
