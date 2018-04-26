// carousel page
// by jason

import * as React from "react";
import { Button } from "../common";

interface ICarouselUploadModalContent {
	onGetBlobFile: (blobFile: File) => void;
	progress: number;
	onClose: () => void;
	onUpload: () => void;
	onAddImage: () => void;
}

export const CarouselUploadModalContent: React.StatelessComponent<ICarouselUploadModalContent> = (props: ICarouselUploadModalContent) => {
	return (
		<React.Fragment>
			<div className="col-md-12" style={{ padding: "2%", height: "80%", display: "grid" }}>
				<Button label="Add Image" className="an-btn an-btn-primary" onClick={props.onAddImage} />
			</div>
			<div style={{ textAlign: 'center', bottom: "20px", right: "52%", position: 'absolute' }}>
				<Button label="Upload" className="an-btn an-btn-primary-transparent" onClick={props.onUpload} />
			</div>
			<div style={{ textAlign: 'center', bottom: "20px", left: "52%", position: 'absolute' }}>
				<Button label="Cancel" className="an-btn an-btn-info-transparent" onClick={props.onClose} />
			</div>
		</React.Fragment>
	)
};