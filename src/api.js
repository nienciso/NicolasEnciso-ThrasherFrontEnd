


const BASE_URL = 'http://localhost:3000';

export const getAllProductos = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/productos`);
    if (!response.ok) {
      throw new Error('No se pudieron cargar los productos.');
    }
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getDetallesProducto = async (productId) => {
  try {
    const response = await fetch(`${BASE_URL}/api/productos/detalles/${productId}`);
    if (!response.ok) {
      throw new Error('No se pudieron cargar los detalles del producto.');
    }
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error('Error al iniciar sesión');
    }

    const data = await response.json();

    // Extraer el token y rol directamente de 'data'
    const { token, rol } = data;

    return { token, rol };
  } catch (error) {
    throw error;
  }
};
