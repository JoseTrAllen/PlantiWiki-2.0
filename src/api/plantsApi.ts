export const fecthPlants = async () => {
  try {
    const response = await fetch("http://localhost:3000/plants");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("La llamada ha fallado");
  }
};
