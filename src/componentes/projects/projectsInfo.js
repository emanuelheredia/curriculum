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
import imgPortfolio1 from "../../assets/projectsImages/portfolio/Captura desde 2023-11-02 12-13-37.png";
import imgPortfolio2 from "../../assets/projectsImages/portfolio/Captura desde 2023-11-02 12-13-55.png";
import imgPortfolio3 from "../../assets/projectsImages/portfolio/Captura desde 2023-11-02 12-14-27.png";
import imgPortfolio4 from "../../assets/projectsImages/portfolio/Captura desde 2023-11-02 12-14-32.png";
import imgPortfolio5 from "../../assets/projectsImages/portfolio/Captura desde 2023-11-02 12-14-01.png";
import imgPortfolio6 from "../../assets/projectsImages/portfolio/Captura desde 2023-11-02 12-14-07.png";
import imgControlGastos1 from "../../assets/projectsImages/control-gastos/control-gastos.gif";
import imgControlGastos2 from "../../assets/projectsImages/control-gastos/Captura desde 2023-11-02 13-48-47.png";
import imgControlGastos3 from "../../assets/projectsImages/control-gastos/Captura desde 2023-11-02 13-49-27.png";
import imgControlGastos4 from "../../assets/projectsImages/control-gastos/Captura desde 2023-11-02 13-49-35.png";
import imgControlGastos5 from "../../assets/projectsImages/control-gastos/Captura desde 2023-11-02 13-49-42.png";
import imgCitasVeterinaria1 from "../../assets/projectsImages/citas-veterinaria/citas-veterinaria.gif";
import imgCitasVeterinaria2 from "../../assets/projectsImages/citas-veterinaria/Captura desde 2023-11-02 14-34-24.png";
import imgCitasVeterinaria3 from "../../assets/projectsImages/citas-veterinaria/Captura desde 2023-11-02 14-35-09.png";
import imgCitasVeterinaria4 from "../../assets/projectsImages/citas-veterinaria/Captura desde 2023-11-02 14-35-18.png";
import imgAgenda1 from "../../assets/projectsImages/agenda/Captura desde 2024-02-26 14-45-13.png";
import imgAgenda2 from "../../assets/projectsImages/agenda/Captura desde 2024-02-26 14-45-30.png";
import imgAgenda3 from "../../assets/projectsImages/agenda/Captura desde 2024-02-26 14-45-41.png";
import imgAgenda4 from "../../assets/projectsImages/agenda/Captura desde 2024-02-26 14-45-54.png";
import imgAgenda5 from "../../assets/projectsImages/agenda/Captura desde 2024-02-26 14-46-04.png";
import imgAgenda6 from "../../assets/projectsImages/agenda/Captura desde 2024-02-26 14-46-10.png";
import imgAgenda7 from "../../assets/projectsImages/agenda/Captura desde 2024-02-26 14-46-23.png";

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
		projectName: "Agenda Boot",
		images: [
			imgAgenda1,
			imgAgenda2,
			imgAgenda3,
			imgAgenda4,
			imgAgenda5,
			imgAgenda6,
			imgAgenda7,
		],
		hrefGitHub: "https://github.com/emanuelheredia/front-psico_calendar",
		hrefApp: "https://mi-agenda.vercel.app/login",
		tecnologies: "REACT JS - NODEJS - MONGODB - WHATSAPPWEB-JS - NODE-CRON",
		detalles:
			"La aplicación desarrollada combina tecnologías como React, Node.js, MongoDB y WhatsAppWeb-JS para ofrecer una solución integral de gestión de turnos y comunicación con pacientes. Aquí está un resumen detallado de sus características y funcionalidades principales > - Gestión de Pacientes: Los usuarios pueden agregar pacientes a la base de datos con sus datos personales, lo que facilita el seguimiento y la organización de la información. - Agenda de Turnos:Permite agendar turnos de manera manual o con renovación automática cada 15 o 7 días, según las preferencias del usuario. La disponibilidad de horarios se muestra dinámicamente, teniendo en cuenta los turnos ya asignados y la disponibilidad de los profesionales. - Visualización de Turnos: Los usuarios pueden acceder a una sección donde se muestra un calendario con todos los turnos asignados por día, facilitando la visualización y gestión de la agenda. - Envío de Mensajes: Ofrece la posibilidad de enviar mensajes predeterminados para difusión de aumento de precios o recordatorio de pago, así como mensajes personalizados con el nombre del paciente. Los mensajes se envían de manera automática mediante la librería node-Cron, lo que elimina la necesidad de recordatorios manuales. La sesión de WhatsApp se registra para enviar mensajes 24 horas antes del turno a cada paciente que cumpla con la condición establecida. - Cancelación de Turnos: Los usuarios tienen la capacidad de cancelar los turnos asignados, lo que permite una gestión eficiente de la agenda y la disponibilidad de horarios. - Modificación de Datos del Paciente: Se ofrece la opción de modificar los datos de los pacientes almacenados en la base de datos, lo que garantiza la actualización de la información cuando sea necesario. - Automatización y Personalización: La aplicación automatiza el proceso de gestión de turnos y comunicación con pacientes, permitiendo que los profesionales se desliguen de los avisos manuales y los recordatorios de turnos o aumentos de precios",
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
	{
		projectName: "Portfolio",
		images: [
			imgPortfolio1,
			imgPortfolio2,
			imgPortfolio3,
			imgPortfolio4,
			imgPortfolio5,
			imgPortfolio6,
		],
		hrefGitHub: "https://github.com/emanuelheredia/curriculum",
		hrefApp: "https://emanuel-heredia.vercel.app/",
		tecnologies: "REACT JS",
		detalles:
			"Aplicación web llamada PortFolio, la cual es una plataforma personal creada con el fin de para mostrar mis habilidades como programador. Consta de cuatro secciones: la portada, donde doy la bienvenida con mi nombre y título, la sección Acerca de Mí que detalla mis experiencias y tecnologías dominadas, una sección de proyectos presentados en un carrousel 3D que destaca mis logros, y una característica especial que facilita la navegación en pantalla grande de escritorio. Utilicé tecnologías como React y librerías externas para crear una experiencia de usuario atractiva y fluida, lo que hace que mi portfolio sea una ventana a mi pasión por la programación y mi trabajo en el mundo digital.",
	},
	{
		projectName: "Control de Gastos",
		images: [
			imgControlGastos1,
			imgControlGastos2,
			imgControlGastos3,
			imgControlGastos4,
			imgControlGastos5,
		],
		hrefGitHub: "https://github.com/emanuelheredia/control-gastos",
		hrefApp: "https://control-gastos-eta.vercel.app/",
		tecnologies: "REACT JS",
		detalles:
			"App elaborada con la librería React, utilizando hooks propios de la mismas y algunas librería externas para mejorar la experiencia de usuario. No se utilizó ningún framework para dar estilos CSS en esta oportunidad. La APP permite extablecer un presupuesto sobre el cual se irán efetuando y almacenando gastos, devolviendonos valores de importes total gastado, remanente y porcentages mediante un grafico circular. Los gastos pueden editarse y eliminarse impactando en los calculos antes descriptos. Los estados de la App son sustentables mediante el uso de localStorage",
	},
	{
		projectName: "Citas Veterinaria",
		images: [
			imgCitasVeterinaria1,
			imgCitasVeterinaria2,
			imgCitasVeterinaria3,
			imgCitasVeterinaria4,
		],
		hrefGitHub: "https://github.com/emanuelheredia/Citas-veterinaria",
		hrefApp: "https://citas-veterinaria-kappa.vercel.app/",
		tecnologies: "REACT JS - TAILWINDCSS - VITE",
		detalles:
			"Proyecto para administrar citas y realizar seguimiento para un establecimiento Veterinaria. Se Utilizó React, Vite, TailwindCss y hooks brindados por la libreria React. La aplicación permite cargar una cita detallando nombre de mascota, propietario, fecha y sintomas. Al agregarlo queda almacenado en memoria, teniendo el respaldo de almacenamiento en localStorage para no perder los datos al actualizar. Las citas pueden modificarse o eliminarse. Posee validacion de campos de formulario. No se utilizó redux por la sencillez del proyecto.",
	},
];

export default projectsInfo;
