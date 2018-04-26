// carousel page
// by jason

import * as React from "react";
import { IPublicCarouselSlide } from "./";
import { Input, Button } from "../common";

interface ICarouselModalContent {
	leftColor: string;
	rightColor: string;
	selectedImage: IPublicCarouselSlide;
	onCaptionChange: (fieldName: string, fieldValue: string) => void;
	onClose: () => void;
}

export const CarousalModalContent: React.StatelessComponent<ICarouselModalContent> = (props: ICarouselModalContent) => {
	return (
		<React.Fragment>
			<div className="col-md-12" style={{ padding: "2%", height: "80%", display: "grid" }}>
				<img src={props.selectedImage.url} alt="image description" style={{ maxWidth: "100%", maxHeight: "100%", margin: "auto" }} />
				<div style={{
					top: "30%", width: "100%", position: "absolute", textTransform: "uppercase", fontFamily: "'Oswald', Arial, Helvetica, sans-serif",
					fontSize: "12vh", textAlign: "center", fontWeight: "bold"
				}}>
					<span style={{ color: props.leftColor }}>{props.selectedImage.leftText} </span>
					<span style={{ color: props.rightColor }}>{props.selectedImage.rightText} </span>
				</div>
			</div>
			<div className="col-md-12">
				<div className="col-md-6">
					<Input
						label=""
						name="leftText"
						value={props.selectedImage.leftText ? props.selectedImage.leftText : ""}
						onChange={props.onCaptionChange}
						style={{ width: "50%", marginLeft: "auto", marginRight: 0 }}/>
				</div>
				<div className="col-md-6">
					<Input
						label=""
						name="rightText"
						value={props.selectedImage.rightText ? props.selectedImage.rightText : ""}
						onChange={props.onCaptionChange}
						style={{ width: "50%" }}/>
				</div>
			</div>
			<div style={{ textAlign: 'center', bottom: "20px", right: "20px", position: 'absolute' }}>
				<Button label="Save" className="an-btn an-btn-primary" onClick={props.onClose} />
			</div>
		</React.Fragment>
	)
};