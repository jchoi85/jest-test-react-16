// carousel page
// by jason

import * as React from "react";
import { IPublicCarouselSlide } from "./";
import { CarouselMainImage } from "./carouselMainImage";
import * as dragula from "react-dragula";
import { SketchPicker } from "react-color";

interface ICarouselMain {
	images: IPublicCarouselSlide[];
	onDragEnd: (container: HTMLDivElement) => void;
	onClick: (id: number, index: number) => void;
	leftColor: string;
	rightColor: string;
	leftColorChange: (color: string) => void;
	rightColorChange: (color: string) => void;
}

interface ICarouselMainState {
	imagesTop: IPublicCarouselSlide[];
	imagesBot: IPublicCarouselSlide[];
	imagesSplit: boolean;
	showLeftColor: boolean;
	showRightColor: boolean;
}

export class CarouselMain extends React.Component<ICarouselMain, ICarouselMainState> {
	container: HTMLDivElement;

	constructor(props: ICarouselMain) {
		super(props);
		this.state = {
			imagesTop: [],
			imagesBot: [],
			imagesSplit: true,
			showLeftColor: false,
			showRightColor: false
		}
		this.showLeftColor = this.showLeftColor.bind(this);
		this.showRightColor = this.showRightColor.bind(this);
		this.onHideColor = this.onHideColor.bind(this);
	}

	public componentDidMount() {
		this.setState({
			imagesTop: this.props.images
		})

		dragula([this.container]).on("dragend", () => {
			this.props.onDragEnd(this.container);
		})
	}

	private showLeftColor() {
		this.setState({
			showLeftColor: true
		})
	}

	private showRightColor() {
		this.setState({
			showRightColor: true
		})
	}

	private onHideColor() {
		this.setState({
			showLeftColor: false,
			showRightColor: false
		})
	}

	public render() {
		return (
			<React.Fragment>
				<div className="col-md-10" style={{ display: "grid", height: "100%" }}>
					<div style={{ position: "absolute", width: "100%", textAlign: "center", top: "20px" }}>
						Minimum 3 images, maximum 9 images
					</div>
					<div style={{ margin: "auto" }}>
						<div className="top" ref={(input) => this.container = input!}>
							{this.state.imagesTop.map((image, index) => <CarouselMainImage key={index} index={index} image={image} onClick={this.props.onClick} leftColor={this.props.leftColor} rightColor={this.props.rightColor} />)}
						</div>
					</div>
					<div style={{ position: "absolute", bottom: (this.props.images.length < 7 ? "15vh" : "5vh"), left: "46%", height: "2vh", width: "2vw", borderRadius: "5px", backgroundColor: this.props.leftColor, border: "2px solid black" }} onClick={this.showLeftColor}>
						<div style={{ position: "relative", bottom: "27.5vh", left: "10px", zIndex: 2 }} hidden={!this.state.showLeftColor} >
							<SketchPicker
								color={this.props.leftColor}
								disableAlpha
								onChangeComplete={(color: any, event: any) => this.props.leftColorChange(color.hex)} />
						</div>
					</div>
					<div style={{ position: "absolute", bottom: (this.props.images.length < 7 ? "15vh" : "5vh"), right: "46%", height: "2vh", width: "2vw", borderRadius: "5px", backgroundColor: this.props.rightColor, border: "2px solid black" }} onClick={this.showRightColor}>
						<div style={{ position: "relative", bottom: "27.5vh", left: "10px", zIndex: 2 }} hidden={!this.state.showRightColor} >
							<SketchPicker
								color={this.props.rightColor}
								disableAlpha
								onChangeComplete={(color: any, event: any) => this.props.rightColorChange(color.hex)} />
						</div>
					</div>
				</div >
				<div style={{ position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px", zIndex: 1 }} hidden={!this.state.showLeftColor && !this.state.showRightColor} onClick={this.onHideColor}>
				</div>
			</React.Fragment>
		)
	}
};

