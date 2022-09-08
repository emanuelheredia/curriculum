import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import "./icons.css";

const Icons = ({ icon }) => {
	return (
		<div className="icon-container">
			<img src={icon.imagen} />
			<div className="rating-container">
				<Stack spacing={0.5}>
					<Rating
						name="half-rating"
						value={icon.valoracion}
						precision={0.5}
						size="small"
					/>
				</Stack>
			</div>
		</div>
	);
};

export default Icons;
