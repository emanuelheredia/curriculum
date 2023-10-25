import tiendaGuitar from "../../media/guitar-tienda.jpg";
import controlGastos from "../../media/control-gastos.jpg";
import crmClientes from "../../media/crm-clientes.jpg";
import citasVeterinaria from "../../media/seguimiento-pacientes.jpg";
import cryptoCoversor from "../../media/conversor-cypto.jpg";
import crmRedux from "../../media/Redux.jpg";
import futbol from "../../media/viva-futbol.png";
import imgPowerTrack1 from "../../assets/projectsImages/power-track/image-1.png";
import imgPowerTrack2 from "../../assets/projectsImages/power-track/image-2.png";
import imgPowerTrack3 from "../../assets/projectsImages/power-track/image-3.png";
import imgPowerTrack4 from "../../assets/projectsImages/power-track/image-4.png";
import imgPowerTrack5 from "../../assets/projectsImages/power-track/image-5.png";
import imgPowerTrack6 from "../../assets/projectsImages/power-track/image-6.png";
import imgPowerTrack7 from "../../assets/projectsImages/power-track/image-7.png";

const projectsInfo = [
	{
		projectName: "Power Track",
		images: [
			imgPowerTrack1,
			imgPowerTrack2,
			imgPowerTrack3,
			imgPowerTrack4,
			imgPowerTrack5,
			imgPowerTrack6,
			imgPowerTrack7,
		],
		imagesDirectoryName: "power-track",
		hrefGitHub: "",
		hrefApp: "",
		tecnologies: "REACT JS - REDUX - NODE JS - MONGODB - FIREBASE - ",
		detalles:
			"Power Track App es una solución integral para la gestión de precios y productos en el negocio de accesorios vehiculares. Permite a los clientes cargar archivos Excel de proveedores, extrayendo eficientemente los datos a Firebase Firestore mediante Node.js y MongoDB. La aplicación presenta listas de precios detalladas con información, imágenes y precios actualizados, respaldados por MongoDB. Los visitantes pueden filtrar productos de manera rápida y sólida por categoría, color, código o vehículo gracias a Node.js y MongoDB. Además, los administradores pueden gestionar listas de precios y modificar fotos de productos a través de MongoDB, ofreciendo una administración completa. La aplicación está desplegada en Vercel (Front) y Render (Servidor) con una conexión a la nube de MongoDB y es plenamente funcional para el cliente.",
	},
	/* 
	{
		src: futbol,
		alt: "Proyecto 0",
		desc: "Prode futbol",
		href: "https://github.com/emanuelheredia/viva-futbol",
	},
	{
		src: tiendaGuitar,
		alt: "Proyecto 1",
		desc: "Tienda de Guitarras",
		href: "https://github.com/emanuelheredia/tienda-Guitar",
	},
	{
		src: crmClientes,
		alt: "Proyecto 2",
		desc: "CRM Clintes",
		href: "https://github.com/emanuelheredia/CRM-Clientes",
	},
	{
		src: cryptoCoversor,
		alt: "Proyecto 3",
		desc: "Conversor Crypto",
		href: "https://github.com/emanuelheredia/cotizador-cryptomonedas",
	},
	{
		src: crmRedux,
		alt: "Proyecto 4",
		desc: "Listado Productos",
		href: "https://github.com/emanuelheredia/CRUD---React-Redux-REST-API-Axios",
	},
	{
		src: citasVeterinaria,
		alt: "Proyecto 5",
		desc: "Seguim. Pacientes",
		href: "https://github.com/emanuelheredia/Citas-veterinaria",
	},
	{
		src: controlGastos,
		alt: "Proyecto 6",
		desc: "Control Gastos",
		href: "https://github.com/emanuelheredia/control-gastos",
	}, */
];

export default projectsInfo;
