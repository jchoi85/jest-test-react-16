import * as React from "react";

interface IModalWindow {
    showModal: boolean;
}
export class PictureModal extends React.Component<IModalWindow, {}>{
    constructor(props: IModalWindow) {
        super(props);
    }
    public componentDidMount() {

    }
    public render() {
        if (!this.props.showModal)
            return null;
        // The gray background
        const backdropStyle: React.CSSProperties = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: "10vh",
            zIndex: 999,
            overflow: 'auto'
        };
        // The modal "window"
        const modalStyle: React.CSSProperties = {
            backgroundColor: '#fff',
            borderRadius: 5,
            width: "60vw",
            height: "80vh",
            margin: '0 auto',
            padding: 30,
			zIndex: 1001,
			position: 'relative'
        };
        return (
			<div className="backdrop" style={backdropStyle}>
				<div style={modalStyle}>
					{this.props.children}
                </div >
            </div >
        );
    }
}
