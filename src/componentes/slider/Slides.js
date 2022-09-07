import "./slider.css";
const slidesInfo = [
	{
		src: "https://d2fl3xywvvllvq.cloudfront.net/wp-content/uploads/2019/10/nutcache-image-2-600x360.jpg",
		alt: "Proyecto 1",
		desc: "Proyecto 1",
	},
	{
		src: "https://d2fl3xywvvllvq.cloudfront.net/wp-content/uploads/2019/10/nutcache-image-2-600x360.jpg",
		alt: "Proyecto 2",
		desc: "Proyecto 2",
	},
	{
		src: "https://d2fl3xywvvllvq.cloudfront.net/wp-content/uploads/2019/10/nutcache-image-2-600x360.jpg",
		alt: "Proyecto 3",
		desc: "Proyecto 3",
	},
];
const slides = slidesInfo.map((slide) => (
	<div className="slide-container">
		<img src={slide.src} alt={slide.alt} />
		<div className="slide-desc">
			<span>{slide.desc}</span>
		</div>
	</div>
));

export default slides;
