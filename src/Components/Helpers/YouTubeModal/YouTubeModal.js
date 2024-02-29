import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const YouTubeModal = ({showModal,playvideo}) => {
  const handleClose = ()=>{
    playvideo()
  }
  return (
<Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Body>
        <Modal.Header closeButton>
        <Modal.Title>YouTube Video</Modal.Title>
      </Modal.Header>
          <iframe
            className='iframeC'
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/Znh4SaLpKvw"
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


export const Customized3D = ({currVlinkName})=>{
  const vIds = [{name:'customize',id:'https://www.youtube.com/embed/YFV8hJMKVaM'},{name:'collaboration',id:'https://www.youtube.com/embed/Znh4SaLpKvw'},{name:'lighting',id:'https://www.youtube.com/embed/imNmY5TkO_8'}]
  const [currId,setCurrId] = useState(vIds[0]?.id)
  useEffect(()=>{
    setCurrId(vIds.find(val=>val.name == currVlinkName)?.id)
  },[currVlinkName])
  return(
    <iframe
    className='iframeC'
    width="100%"
    height="450"
    src={currId}
    title="YouTube Video"
    allowFullScreen
  ></iframe>
  )
}
