import React, { useRef } from 'react'
import Tcket from './Tcket'

const Modal = (props) => {
    const ref = useRef(null);
    if (props.show) {
        ref.current.click();
    }
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Movie Ticket Booking</h5>
                            <button type="button" onClick={props.click} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Tcket click={props.click} />
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default Modal