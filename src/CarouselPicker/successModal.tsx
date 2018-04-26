import * as React from "react";
import { Button } from "../common";

interface IModalWindow {
    showModal: boolean;
	onClose: () => void;
}
export class SuccessModal extends React.Component<IModalWindow, {}>{
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
            padding: "30vh",
            zIndex: 999,
            overflow: 'auto'
        };
        // The modal "window"
        const modalStyle: React.CSSProperties = {
            backgroundColor: '#fff',
            borderRadius: 5,
            width: "30vw",
            height: "20vh",
            margin: '0 auto',
            padding: 30,
			zIndex: 1001,
			position: 'relative',
			display: 'grid'
        };
        return (
			<div className="backdrop" style={backdropStyle}>
				<div style={modalStyle}>
					<div style={{ margin: "auto" }}>
						Success! Click <a href="/public">here</a> to see your changes!
					</div>
					<div style={{ textAlign: 'center', bottom: "20px", right: "20px", position: 'absolute' }}>
						<Button label="Close" className="an-btn an-btn-primary" onClick={this.props.onClose} />
					</div>
                </div >
            </div >

        );
    }
}
