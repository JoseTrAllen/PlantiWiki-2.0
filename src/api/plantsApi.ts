export const fecthPlants = async () => {
  try {
    const response = await fetch("http://localhost:3000/plantas");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("La llamada ha fallado");
  }
};
