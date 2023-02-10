import Image from "next/image";
import Link from "next/link";

import error from "../public/images/Custom-WordPress-404-Page-01-1024x536-1.png";
const ErrorPage = () => {
	return (
		<div className="text-center">
			<Image src={error} width={1500} height={50}></Image>
			
            <Link href="/">
				<button className="btn btn-secondary">Back to home</button>
			</Link>
            
		</div>
	);
};

export default ErrorPage;
