import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const YouTubeModal = ({showModal,playvideo}) => {
  const handleClose = ()=>{
    playvideo()
  }
  return (
//     <Modal show={showModal} onHide={handleClose} size="lg" centered dialogClassName="custom-modal">
//     <Modal.Header closeButton>
//       <Modal.Title>YouTube Video</Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//       <div className="embed-responsive embed-responsive-16by9">
//         <iframe
//           className="embed-responsive-item"
//           src="https://www.youtube.com/embed/x5sNgOo35-4"
//           title="YouTube Video"
//           allowFullScreen
//         ></iframe>
//       </div>
//     </Modal.Body>
//     <Modal.Footer>
//       <Button variant="secondary" onClick={handleClose}>
//         Close
//       </Button>
//     </Modal.Footer>
//   </Modal>
<Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Body>
        <Modal.Header closeButton>
        <Modal.Title>YouTube Video</Modal.Title>
      </Modal.Header>
          <iframe
            className='iframeC'
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/x5sNgOo35-4"
            title="YouTube Video"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      
          <Button className='iFrameBt' variant="secondary" onClick={handleClose}>
            Close
          </Button>
      
      </Modal>
  );
}

export default YouTubeModal;


export const Customized3D = ()=>{
  return(
    <iframe
    className='iframeC'
    width="100%"
    height="450"
    src="https://www.youtube.com/embed/5pePUTAdFVY"
    title="YouTube Video"
    allowFullScreen
  ></iframe>
  )
}
