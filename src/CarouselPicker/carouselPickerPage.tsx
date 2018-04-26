// carousel page
// by jason

import * as React from "react";
import { IPublicCarouselSlide } from "./";
import { CarouselSidebar, CarouselMain, PictureModal, CarousalModalContent, SuccessModal, DeleteModal, CarouselUploadModalContent } from "./";
import { Button } from "../common";

interface ICarouselPickerPage {
	images: IPublicCarouselSlide[];
	includedImages: IPublicCarouselSlide[];
	onDragEnd: (container: HTMLDivElement) => void;
	showModal: boolean;
	showSuccessModal: boolean;
	onClose: () => void;
	onMainClick: (id: number, index: number) => void;
	onSideAdd: (id: number) => void;
	onSideRemove: (id: number) => void;
	leftColor: string;
	rightColor: string;
	selectedImage: IPublicCarouselSlide;
	onCaptionChange: (fieldName: string, fieldValue: string) => void;
	onSubmit: () => void;
	displayOrder: number[];
	leftColorChange: (color: string) => void;
	rightColorChange: (color: string) => void;
	showDeleteModal: boolean;
	deleteImageId: number;
	onDeleteImage: (imageId: number) => void;
	confirmDelete: () => void;
	onGetBlobFile: (blobFile: File) => void;
	progress: number;
	onUploadClick: () => void;
	showUploadModal: boolean;
	onUpload: () => void;
	onAddImage: () => void;
}

export const CarouselPickerPage: React.StatelessComponent<ICarouselPickerPage> = (props: ICarouselPickerPage) => {
	return (
		<div className="an-content-body no-padding" style={{ height: "100%" }}>
			<CarouselSidebar
				images={props.images}
				onSideAdd={props.onSideAdd}
				onSideRemove={props.onSideRemove}
				displayOrder={props.displayOrder}
				onDeleteImage={props.onDeleteImage}
				onUploadClick={props.onUploadClick}
				/>
			{(props.images.length > 0) ? <CarouselMain
				images={props.includedImages}
				onDragEnd={props.onDragEnd}
				onClick={props.onMainClick}
				leftColor={props.leftColor}
				rightColor={props.rightColor}
				leftColorChange={props.leftColorChange}
				rightColorChange={props.rightColorChange} />
				: ""}
			<PictureModal
				showModal={props.showModal}>
				<CarousalModalContent
					selectedImage={props.selectedImage}
					leftColor={props.leftColor}
					rightColor={props.rightColor}
					onCaptionChange={props.onCaptionChange}
					onClose={props.onClose}/>
			</PictureModal>
			<PictureModal
				showModal={props.showUploadModal}>
				<CarouselUploadModalContent
					onGetBlobFile={props.onGetBlobFile}
					progress={props.progress}
					onClose={props.onClose}
					onUpload={props.onUpload}
					onAddImage={props.onAddImage} />
			</PictureModal>
			<SuccessModal
				showModal={props.showSuccessModal}
				onClose={props.onClose} />
			<DeleteModal
				showModal={props.showDeleteModal}
				confirmDelete={props.confirmDelete}
				imageId={props.deleteImageId}
				onClose={props.onClose} />
			<Button label="Save Changes" onClick={props.onSubmit} className="an-btn an-btn-primary-transparent" style={{ position: "absolute", bottom: "20px", right: "20px" }} />
		</div>
	)
};