import axios from "axios";

// URL del backend (cambia a tu dominio cuando lo despliegues)
const API_URL = "http://localhost:5000/api/courses";
const API_URL_FAQS = "http://localhost:5000/api/faqs";

// Obtener todos los cursos
export const getCourses = async () => {
	try {
		const response = await axios.get(API_URL);
		return response.data;
	} catch (error) {
		console.error("Error al obtener cursos", error);
		return [];
	}
};

// 🔹 Obtener un curso por ID con informe completo
export const getInformeCourses = async (id) => {
	try {
		const response = await axios.get(`${API_URL}/${id}`); // Llamada a la API correcta
		return response.data;
	} catch (error) {
		console.error(`Error al obtener el curso ${id}`, error);
		return null;
	}
};

export const getFaqs = async () => {
	try {
		const response = await axios.get(API_URL_FAQS);
		return response.data;
	} catch (error) {
		console.error("Error al obtener las preguntas frecuentes", error);
		return null;
	}
};
