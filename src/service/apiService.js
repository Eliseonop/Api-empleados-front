import axios from "axios";

const URL = "http://127.0.0.1:5000/";
const LaData = async () => {
  try {
    const { data } = await axios.get(`${URL}/usuarios`);

    return data;
  } catch (error) {
    throw error;
  }
};
const crearUsuario = async (nuevoUsuario) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const { data } = await axios.post(`${URL}/usuarios`, nuevoUsuario, {
      headers,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

const obtenerUsuarioPorId = async (id) => {
  try {
    const { data } = await axios.get(`${URL}/usuarios/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
const obtenerUsuarioPorDni = async (dni) => {
  try {
    const { data } = await axios.get(`${URL}/usuario/${dni}`);
    return data;
  } catch (error) {
    throw error;
  }
};

const editarUsuarioPorId = async (id, objProducto) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    await axios.put(`${URL}/usuarios/${id}`, objProducto, { headers });
    return;
  } catch (error) {
    throw error;
  }
};

const eliminarUsuario = async (id) => {
  try {
    await axios.delete(`${URL}/usuarios/${id}`);
    return "Usurio eliminado";
  } catch (error) {
    throw error;
  }
};

export {
  LaData,
  eliminarUsuario,
  editarUsuarioPorId,
  obtenerUsuarioPorId,
  crearUsuario,
  obtenerUsuarioPorDni,
};
