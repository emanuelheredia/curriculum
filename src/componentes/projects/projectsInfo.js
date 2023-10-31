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
import imgVivaFutbol1 from "../../assets/projectsImages/viva+futbol/prode.png";
import imgVivaFutbol2 from "../../assets/projectsImages/viva+futbol/resultadosPorPartido.png";
import imgVivaFutbol3 from "../../assets/projectsImages/viva+futbol/matchsDay.png";
import imgVivaFutbol4 from "../../assets/projectsImages/viva+futbol/posiciones.png";
import imgVivaFutbol5 from "../../assets/projectsImages/viva+futbol/login.png";
import imgVivaFutbol6 from "../../assets/projectsImages/viva+futbol/alertLogin.png";
import imgUptask1 from "../../assets/projectsImages/up-task/image-1.png";
import imgUptask2 from "../../assets/projectsImages/up-task/Captura desde 2023-10-30 22-51-09.png";
import imgUptask3 from "../../assets/projectsImages/up-task/Captura desde 2023-10-30 22-51-18.png";
import imgUptask4 from "../../assets/projectsImages/up-task/Captura desde 2023-10-30 22-51-40.png";
import imgUptask5 from "../../assets/projectsImages/up-task/Captura desde 2023-10-30 22-52-00.png";

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
		hrefGitHub: "https://github.com/emanuelheredia/power-tracker",
		hrefApp: "https://power-tracker.vercel.app/",
		tecnologies: "REACT JS - REDUX - NODE JS - MONGODB - FIREBASE - ",
		detalles:
			"Power Track App es una solución integral para la gestión de precios y productos en el negocio de accesorios vehiculares. Permite a los clientes cargar archivos Excel de proveedores, extrayendo eficientemente los datos a Firebase Firestore mediante Node.js y MongoDB. La aplicación presenta listas de precios detalladas con información, imágenes y precios actualizados, respaldados por MongoDB. Los visitantes pueden filtrar productos de manera rápida y sólida por categoría, color, código o vehículo gracias a Node.js y MongoDB. Además, los administradores pueden gestionar listas de precios y modificar fotos de productos a través de MongoDB, ofreciendo una administración completa. La aplicación está desplegada en Vercel (Front) y Render (Servidor) con una conexión a la nube de MongoDB y es plenamente funcional para el cliente.",
	},
	{
		projectName: "Viva Futbol",
		images: [
			imgVivaFutbol1,
			imgVivaFutbol2,
			imgVivaFutbol3,
			imgVivaFutbol4,
			imgVivaFutbol5,
			imgVivaFutbol6,
		],
		hrefGitHub: "https://github.com/emanuelheredia/viva-futbol",
		hrefApp: "",
		tecnologies: "REACT JS - REDUX - FIREBASE ",
		detalles:
			"Viva Futbol es un apasionante proyecto que combina la emoción del fútbol con la tecnología, permitiéndote pronosticar los resultados de la Liga Profesional del Fútbol Argentino y otras ligas destacadas de todo el mundo. Regístrate con tu correo y contraseña, completa tu perfil con tus datos personales y equipo favorito, luego predice los resultados de los partidos antes de cada fecha. Consulta tu puntaje y posición en la tabla de clasificación al final de cada jornada, todo respaldado por una seguridad sólida en Firebase. Desarrollado con tecnología de vanguardia, este proyecto en constante crecimiento te ofrece una experiencia única para los amantes del fútbol y la tecnología.",
	},
	{
		projectName: "Up Task",
		images: [imgUptask1, imgUptask2, imgUptask3, imgUptask4, imgUptask5],
		hrefGitHub: "https://github.com/emanuelheredia/front_upTask_MERN",
		hrefApp: "https://front-up-task-mern.vercel.app/",
		tecnologies: "REACT JS - REDUX - MONGODB - NODEJS",
		detalles:
			"Aplicación web creada con MongoDB, React JS, Express JS y Node JS. La misma es una UpTask para la gestión de proyectos, seguimiento de errores e incidencias dirigida a una empresa IT. La misma permite el registro de usuarios con validación y confirmación por email . La aplicación permite crear proyectos con asignación de tareas , definición de fecha de entregas, prioridades y la asignacion de colaboradores al proyecto. Las modificaciones tienen actualización instantánea mediante la utilización de socket io en tiempo real. Otras tecnologías utilizadas son : TailwindCSS, Mongoose,SocketIO,MaterialIU.Compruebe esta versión beta con los siguientes permisos: usuario : ema_359@hotmail.com - password: pass123. Todos los formularios poseen validaciones.",
	},
	/* 
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
