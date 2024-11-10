export const fecthPlants = async () => {
  try {
    const response = await fetch("http://localhost:3001/plantas");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    throw new Error("La llamada ha fallado");
  }
};
