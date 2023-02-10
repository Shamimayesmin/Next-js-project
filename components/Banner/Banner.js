import img1 from "../../public/images/botol1.jpg"
import img2 from "../../public/images/lake-green-light-nature.jpg"
import img3 from "../../public/images/pic1.jpg"

const Banner = () => {
	return (
		<div>
			<div className="carousel w-full h-96">
				<div id="item1" className="carousel-item w-full">
					<img
						src="https://i.ibb.co/5220YGZ/lake-green-light-nature.jpg"
						className="w-full"
					/>
				</div>
				<div id="item2" className="carousel-item w-full">
					<img
						src="https://i.ibb.co/MB3yXYg/botol1.jpg"
						className="w-full"
					/>
				</div>
				<div id="item3" className="carousel-item w-full">
					<img
						src="https://i.ibb.co/dmk7wkp/kit2.jpg"
						className="w-full"
					/>
				</div>
				<div id="item4" className="carousel-item w-full">
					<img
						src="https://i.ibb.co/P9smk2Z/Students-University.jpg"
						className="w-full"
					/>
				</div>
			</div>
			<div className="flex justify-center w-full py-2 gap-2">
				<a href="#item1" className="btn btn-xs">
					1
				</a>
				<a href="#item2" className="btn btn-xs">
					2
				</a>
				<a href="#item3" className="btn btn-xs">
					3
				</a>
				<a href="#item4" className="btn btn-xs">
					4
				</a>
			</div>
		</div>
	);
};

export default Banner;
