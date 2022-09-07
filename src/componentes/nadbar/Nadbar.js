import "./nadbar.css";

const Nadbar = ({ scrollHeight }) => {
	const toTheTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};
	return (
		<div className={`nadbar ${scrollHeight > 20 && "scrolling"}`}>
			<div className="nadbar-logo" onClick={toTheTop}>
				E H
			</div>
		</div>
	);
};

export default Nadbar;
