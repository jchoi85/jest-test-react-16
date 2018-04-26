// carousel page
// by jason

import * as React from "react";
import { IPublicCarouselSlide } from "./";

interface ICarouselMainImage {
	image: IPublicCarouselSlide;
	onClick: (id: number, index: number) => void;
	leftColor: string;
	rightColor: string;
	index: number;
}

export const CarouselMainImage: React.StatelessComponent<ICarouselMainImage> = (props: ICarouselMainImage) => {

	return (
		<div image-id={props.image.id} className="col-md-4" style={{ padding: "2%", height: "250px", display: "grid" }} onClick={onClick(props)}>
			<img src={props.image.url} alt="image description" style={{ maxWidth: "100%", maxHeight: "100%", margin: "auto" }} />
			<div style={{
				top: "30%", width: "90%", left: "5%", position: "absolute", textTransform: "uppercase", fontFamily: "'Oswald', Arial, Helvetica, sans-serif",
				fontSize: "48px", textAlign: "center", fontWeight: "bold"
			}}>
				<span style={{ color: props.leftColor }}>{props.image.leftText} </span>
				<span style={{ color: props.rightColor }}>{props.image.rightText} </span>
			</div>
		</div>
	)
};

const onClick = (props: ICarouselMainImage) => (e: React.MouseEvent<HTMLDivElement>) => {
	if (props.onClick) {
		props.onClick(props.image.id!, props.index);
	}
}