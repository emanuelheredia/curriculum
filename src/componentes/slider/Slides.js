import "./slider.css";
import tiendaGuitar from "../../media/guitar-tienda.jpg";
import controlGastos from "../../media/control-gastos.jpg";
import crmClientes from "../../media/crm-clientes.jpg";
import citasVeterinaria from "../../media/seguimiento-pacientes.jpg";
import cryptoCoversor from "../../media/conversor-cypto.jpg";

const goToURL = (url) => {};

const slidesInfo = [
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
		src: citasVeterinaria,
		alt: "Proyecto 4",
		desc: "Seguimiento Pacientes",
		href: "https://github.com/emanuelheredia/Citas-veterinaria",
	},
	{
		src: controlGastos,
		alt: "Proyecto 5",
		desc: "Control Gastos",
		href: "https://github.com/emanuelheredia/control-gastos",
	},
];
const slides = slidesInfo.map((slide) => (
	<div className="slide-container">
		<a href={slide.href} target="_blank">
			<img src={slide.src} alt={slide.alt} />
		</a>
		<div className="slide-desc">
			<span>{slide.desc}</span>
		</div>
	</div>
));

export default slides;
