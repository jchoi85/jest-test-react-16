// carousel page
// by jason

import * as React from "react";
import { Scrollbars } from "react-custom-scrollbars";

import { CarouselSideImage, IPublicCarouselSlide } from "./";

interface ICarouselSidebar {
	images: IPublicCarouselSlide[];
	onSideAdd: (id: number) => void;
	onSideRemove: (id: number) => void;
	displayOrder: number[];
	onDeleteImage: (imageId: number) => void;
	onUploadClick: () => void;
}

export const CarouselSidebar: React.StatelessComponent<ICarouselSidebar> = (props: ICarouselSidebar) => {

	return (
		<div className="col-md-2" style={{ borderRight: "2px solid #e2e2e2", height: "100%", paddingTop: "3%" }}>
			<Scrollbars autoHide>
				{props.images.map((image, index) =>
					<CarouselSideImage
						key={index}
						image={image}
						onSideAdd={props.onSideAdd}
						onSideRemove={props.onSideRemove}
						included={props.displayOrder.indexOf(image.id!) !== -1}
						onDeleteImage={props.onDeleteImage} />)}
			</Scrollbars>
			<div className="glyphicon glyphicon-plus" style={{ position: "absolute", color: "green", top: "10px", right: "10px", cursor: "pointer" }} onClick={props.onUploadClick} />
		</div>
	)
};