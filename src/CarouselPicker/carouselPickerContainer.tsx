// carousel picker container
// by jason

import * as React from "react";

import { CarouselPickerPage, IPublicCarouselSlide } from "./";

interface ICarouselPickerState {
    allImages: IPublicCarouselSlide[];
    allImagesDict: { [imageid: number]: IPublicCarouselSlide };
    includedImages: IPublicCarouselSlide[];
    displayOrder: number[];
    uploadProgress: number;
    blobFile: File;
    addImage: IPublicCarouselSlide;
    showModal: boolean;
    showSuccessModal: boolean;
    leftColor: string;
    rightColor: string;
    selectedImageIndex: number;
    deleteImageId: number;
    showDeleteModal: boolean;
    showUploadModal: boolean;
}

export class CarouselPickerContainer extends React.Component<{}, ICarouselPickerState>{

    constructor(props: {}) {
        super(props);
        this.state = {
            allImages: [],
            allImagesDict: {},
            includedImages: [],
            displayOrder: [],
            uploadProgress: 0,
            blobFile: null,
            addImage: null,
            showModal: false,
            showSuccessModal: false,
            leftColor: "",
            rightColor: "",
            selectedImageIndex: 0,
            deleteImageId: 0,
            showDeleteModal: false,
            showUploadModal: false
        }
        this.onClose = this.onClose.bind(this);
        this.onMainClick = this.onMainClick.bind(this);
        this.onCaptionChange = this.onCaptionChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSideAdd = this.onSideAdd.bind(this);
        this.onSideRemove = this.onSideRemove.bind(this);
        this.leftColorChange = this.leftColorChange.bind(this);
        this.rightColorChange = this.rightColorChange.bind(this);
        this.onDeleteImage = this.onDeleteImage.bind(this);
        this.onConfirmDelete = this.onConfirmDelete.bind(this);
        this.onUploadClick = this.onUploadClick.bind(this);
    }

    public componentWillMount() {
    }

    public componentDidMount() {
        document.title = "Carousel Picker";
        carouselApi.getCarouselInfo()
            .then((response) => {
                //console.log(response);
                let images = {};
                response.item.images.forEach((image: IPublicCarouselSlide) => images[image.id] = image);
                let includedImages = [];
                let displayOrder = response.item.displayOrder.split(" ").map(itm => parseInt(itm));
                displayOrder.forEach(itm => includedImages.push(images[itm]));
                this.setState({
                    allImagesDict: images,
                    allImages: response.item.images,
                    includedImages,
                    leftColor: response.item.leftColor,
                    rightColor: response.item.rightColor,
                    displayOrder
                });
            }, (err: any) => {
                console.log(err);
            })
            .catch((err: any) => {
                console.log(err);
            });
    }

    private onCaptionChange(fieldName: string, fieldValue: string) {
        if (fieldValue.length <= 7) {
            let includedImages = this.state.includedImages;
            let allImagesDict = this.state.allImagesDict

            allImagesDict[includedImages[this.state.selectedImageIndex].id] = {
                ...allImagesDict[includedImages[this.state.selectedImageIndex].id],
                [fieldName]: fieldValue
            }

            includedImages[this.state.selectedImageIndex] = {
                ...includedImages[this.state.selectedImageIndex],
                [fieldName]: fieldValue
            }

            this.setState({ includedImages, allImagesDict });
        }
    };

    private onClose() {
        this.setState({ showModal: false, showSuccessModal: false, showDeleteModal: false, showUploadModal: false });
    }

    private onMainClick(id: number, index: number) {
        this.setState({ showModal: true, selectedImageIndex: index });
    }

    private onSideAdd(id: number) {
        //console.log("add", id);
        if (this.state.includedImages.length < 9) {
            let includedImages = this.state.includedImages;
            let displayOrder = this.state.displayOrder;

            includedImages.push(this.state.allImagesDict[id]);
            displayOrder.push(id);

            this.setState({
                includedImages, displayOrder
            });
        }
    }

    private onSideRemove(id: number) {
        //console.log("remove", id);
        if (this.state.includedImages.length > 3) {
            let includedImages = this.state.includedImages;
            let displayOrder = this.state.displayOrder;
            let imageIndex = 0;

            includedImages.forEach((image, index) => {
                if (image.id === id) imageIndex = index;
            })

            includedImages.splice(imageIndex, 1);
            displayOrder.splice(displayOrder.indexOf(id), 1);

            this.setState({
                includedImages, displayOrder
            });
        }
    }

    private leftColorChange(color: string) {
        this.setState({
            leftColor: color
        })
    }

    private rightColorChange(color: string) {
        this.setState({
            rightColor: color
        })
    }

    private onDeleteImage(deleteImageId: number) {
        this.setState({ deleteImageId, showDeleteModal: true })
    }

    private onConfirmDelete() {

    }

    private onUploadClick() {
        this.setState({ showUploadModal: true });
    }

    public render() {
        return (
            <React.Fragment>
                {this.props.userRoles.roles.indexOf("Admin") !== -1 ?
                    <CarouselPickerPage
                        images={this.state.allImages}
                        includedImages={this.state.includedImages}
                        onDragEnd={this.onDragEnd}
                        showModal={this.state.showModal}
                        showSuccessModal={this.state.showSuccessModal}
                        onClose={this.onClose}
                        onMainClick={this.onMainClick}
                        onSideAdd={this.onSideAdd}
                        onSideRemove={this.onSideRemove}
                        leftColor={this.state.leftColor}
                        rightColor={this.state.rightColor}
                        selectedImage={this.state.includedImages[this.state.selectedImageIndex]}
                        onCaptionChange={this.onCaptionChange}
                        onSubmit={this.onSubmit}
                        displayOrder={this.state.displayOrder}
                        leftColorChange={this.leftColorChange}
                        rightColorChange={this.rightColorChange}
                        showDeleteModal={this.state.showDeleteModal}
                        onDeleteImage={this.onDeleteImage}
                        confirmDelete={this.onConfirmDelete}
                        deleteImageId={this.state.deleteImageId}
                        onGetBlobFile={this.onGetBlobFile}
                        progress={this.state.uploadProgress}
                        onUploadClick={this.onUploadClick}
                        showUploadModal={this.state.showUploadModal}
                        onUpload={this.upload} 
                        onAddImage={() => null}/>
                    : ""}
            </React.Fragment>
        );
    }
}