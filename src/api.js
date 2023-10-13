
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