// carousel page
// by jason

import * as React from "react";
import { IPublicCarouselSlide } from "./";

interface ICarouselSideImage {
	image: IPublicCarouselSlide;
	onSideAdd: (image: number) => void;
	onSideRemove: (image: number) => void;
	included: boolean;
	onDeleteImage: (imageId: number) => void;
}

export const CarouselSideImage: React.StatelessComponent<ICarouselSideImage> = (props: ICarouselSideImage) => {
	return (
		<div style={{ padding: "5%", position: "relative" }}>
			<img src={props.image.url} alt="image description" style={{ maxWidth: "100%", minWidth: "100%" }} onClick={onSideAdd(props)} />
			<div className="overlay" style={{ position: "absolute", width: "90%", height: "100%", background: "rgba(255,255,255,.7)", top: 0 }} hidden={!props.included} onClick={onSideRemove(props)} />
			<div>
				<i className="glyphicon glyphicon-trash" style={{ position: "absolute", top: "20px", right: "20px", color: "#d61919", cursor: "pointer" }} hidden={!props.included} onClick={onDelete(props)} />
			</div>
		</div>
	)
};

const onSideAdd = (props: ICarouselSideImage) => (e: React.MouseEvent<HTMLImageElement>) => {
	props.onSideAdd(props.image.id!);
}

const onSideRemove = (props: ICarouselSideImage) => (e: React.MouseEvent<HTMLDivElement>) => {
	props.onSideRemove(props.image.id!);
}

const onDelete = (props: ICarouselSideImage) => (e: React.MouseEvent<HTMLDivElement>) => {
	props.onDeleteImage(props.image.id!);
}