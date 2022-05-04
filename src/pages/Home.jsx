import React from "react";
import { useState, useEffect } from "react";
import '../App.css';
import { Carousel, Button, Modal, FloatingLabel, Form, Toast, ToastContainer, OverlayTrigger, Tooltip, ListGroup } from 'react-bootstrap';
import Service from '../services/Service.js';
import waline from '../services/Waline.js';


function Home(params) {
  const [localProfilePictures, setLocalProfilePictures] = useState()
  const [svgName, setSvgName] = useState("heart")
  const [index, setIndex] = useState(0)
  const [warningToastShow, setWarningToastShow] = useState(false);
  const [successToastShow, setSuccessToastShow] = useState(false);
  const [errorToastShow, setErrorToastShow] = useState(false);
  const [verificationModalShow, setVerificationModalShow] = useState(false);
  const [tipsModalShow, setTipsModalShow] = useState(true);

  let selectValue = "0"

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  const formSelectOnChange = (e) => {
    selectValue = e.target.value
  }

  const showHeartSvg = () => {
    return (
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Tooltip id={`tooltip-bottom`}>
            <strong>Click Me!</strong>
          </Tooltip>
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="3%" height="3%" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16" onClick={() => { setVerificationModalShow(true) }} style={{ cursor: "pointer" }}>
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
        </svg>
      </OverlayTrigger>
    )
  }

  const getJsonplaceholderProfilePictures = () => {
    const getProfilePictures = async () => {
      let result = await Service.getJsonplaceholderProfilePicturesJson()
      console.log("get jsonplaceholder result: ", result);
      setLocalProfilePictures(result.data)
      setSvgName("heart")
      console.log("localProfilePictures: ", localProfilePictures)
    }
    getProfilePictures().catch((error) => {
      setErrorToastShow(true)
      console.log("get jsonplaceholder error: ", error)
    });
  };

  const patchJsonplaceholderProfilePictures = () => {
    const patchProfilePictures = async () => {
      let result = await Service.patchJsonplaceholderProfilePicturesJson(index, {
        likes: localProfilePictures[index].likes + 1,
      })
      console.log("patch jsonplaceholder result: ", result);
      localProfilePictures[index].likes += 1
      setSvgName("heart-fill")
      setSuccessToastShow(true)
      setTimeout(() => {
        setSvgName("heart")
        console.log("2.5 s passed. Change heart-fill to heart.")
      }, 2500);
    }
    patchProfilePictures().catch((error) => {
      setErrorToastShow(true)
      console.log("patch jsonplaceholder error: ", error)
    });
  };

  const getJsonbinProfilePictures = () => {
    const getProfilePictures = async () => {
      let result = await Service.getJsonbinProfilePicturesJson()
      console.log("get jsonbin res: ", result);
      setLocalProfilePictures(result.data.record.profilePictures)
      setSvgName("heart")
      console.log("localProfilePictures: ", localProfilePictures)
    }
    getProfilePictures().catch((error) => {
      setErrorToastShow(true)
      console.log("get jsonbin error: ", error)
    });
  };

  const putJsonbinProfilePictures = () => {
    // Coould not do (let tempProfilePictures=this.localProfilePictures), as tempProfilePictures will sync with this.localProfilePictures
    let tempProfilePictures = JSON.stringify(localProfilePictures);
    let profilePictures = JSON.parse(tempProfilePictures);
    profilePictures[index].likes += 1;
    const putProfilePictures = async () => {
      let result = await Service.putJsonbinProfilePicturesJson({ profilePictures })
      console.log("put jsonbin result: ", result)
      localProfilePictures[index].likes += 1
      setSvgName("heart-fill")
      setSuccessToastShow(true)
      setTimeout(() => {
        setSvgName("heart")
        console.log("2.5 s passed. Change heart-fill to heart.")
      }, 2500);
    }
    putProfilePictures().catch((error) => {
      setErrorToastShow(true)
      console.log("put jsonbin error: ", error)
    });
  };

  const getKratesProfilePictures = () => {
    const getProfilePictures = async () => {
      let result = await Service.getKratesProfilePicturesJson()
      console.log("get krates result: ", result);
      setLocalProfilePictures(result.data[0].profilePictures)
      setSvgName("heart")
      console.log("localProfilePictures: ", localProfilePictures)
    }
    getProfilePictures().catch((error) => {
      setErrorToastShow(true)
      console.log("get krates error: ", error)
    });
  };

  const putKratesProfilePictures = () => {
    // Coould not do (let tempProfilePictures=this.localProfilePictures), as tempProfilePictures will sync with this.localProfilePictures
    let tempProfilePictures = JSON.stringify(localProfilePictures);
    let profilePictures = JSON.parse(tempProfilePictures);
    profilePictures[index].likes += 1;
    const putProfilePictures = async () => {
      let result = await Service.putKratesProfilePicturesJson({ profilePictures })
      console.log("put krates result: ", result)
      localProfilePictures[index].likes += 1
      setSvgName("heart-fill")
      setSuccessToastShow(true)
      setTimeout(() => {
        setSvgName("heart")
        console.log("2.5 s passed. Change heart-fill to heart.")
      }, 2500);
    }
    putProfilePictures().catch((error) => {
      setErrorToastShow(true)
      console.log("put krates error: ", error)
    });
  };

  const confirmVarification = () => {
    if (selectValue === "1") {
      setSvgName("arrow-clockwise")
      setVerificationModalShow(false)
      // patchJsonplaceholderProfilePictures()
      // putJsonbinProfilePictures()
      putKratesProfilePictures()
    }
    else {
      setWarningToastShow(true)
    }
  }

  useEffect(() => {
    setSvgName("arrow-clockwise")
    // getJsonplaceholderProfilePictures()
    // getJsonbinProfilePictures()
    getKratesProfilePictures()
    waline.update()
  }, [])


  return (
    < div className="App" >
      <header className="App-header">
        <Modal show={tipsModalShow} onHide={() => { setTipsModalShow(false) }} centered>
          <Modal.Header className="componentsDarkMode">
            <Modal.Title>Tips</Modal.Title>
          </Modal.Header>
          <div className="componentsDarkMode">
            <ul>
              <li>There is a like button.<br />Give your preferred favicon a thumb up!</li>
              <br />
              <li>Scroll down!<br />Have fun in the comment section.</li>
            </ul>
          </div>
          <Modal.Footer className="componentsDarkMode">
            <Button variant="primary" onClick={() => { setTipsModalShow(false) }}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="container-fluid" style={{ paddingTop: "5%" }}>
          <div style={{ width: "38%", float: "left", }}>
            {localProfilePictures ? <p className="leftWords" dangerouslySetInnerHTML={{ __html: localProfilePictures[index].words }}>
            </p> : <p className="leftWords"><strong>Hold on please.</strong></p>}
          </div>
          <div style={{ width: "24%", float: "left", }}>
            <Carousel activeIndex={index} onSelect={handleSelect} variant={index === 0 || index === 1 || index === 2 ? "null" : "dark"} interval={null}>
              {localProfilePictures ? localProfilePictures.map((localProfilePicture) => {
                return (
                  <Carousel.Item key={localProfilePicture.id}>
                    <img
                      className="d-block w-100"
                      src={localProfilePicture.src}
                      // src={require("./asserts/" + localProfilePicture.src)}
                      alt="First slide"
                    />
                  </Carousel.Item>
                )
              }) : null}
            </Carousel>
          </div>
          <div style={{ width: "38%", float: "left", }}>
            {localProfilePictures ? <p className="rightWords"><code>{localProfilePictures[index].likes}</code> folks like this avatar.
            </p> : <p className="rightWords"><strong>...</strong></p>}
          </div>
        </div>
        <div className="container-fluid" style={{ paddingTop: "5%", clear: "both" }}>
          {svgName === "heart" ? showHeartSvg() : null}
          {svgName === "heart-fill" ? <svg xmlns="http://www.w3.org/2000/svg" width="3%" height="3%" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          </svg> : null}
          {svgName === "arrow-clockwise" ? <svg xmlns="http://www.w3.org/2000/svg" width="3%" height="3%" fill="currentColor" className="bi bi-arrow-clockwise arrow-clockwise" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
          </svg> : null}
        </div>
        <Modal show={verificationModalShow} onHide={() => { setVerificationModalShow(false) }} centered>
          <Modal.Header className="componentsDarkMode">
            <Modal.Title>Verification</Modal.Title>
          </Modal.Header>
          <FloatingLabel controlId="floatingSelect" label="lg10 = ?" className="componentsDarkMode">
            <Form.Select aria-label="Floating label select example" onChange={formSelectOnChange.bind(this)} className="componentsDarkMode">
              <option value="0">Open this select menu</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </FloatingLabel>
          <Modal.Footer className="componentsDarkMode">
            <Button variant="secondary" onClick={() => { setVerificationModalShow(false) }}>
              Close
            </Button>
            <Button variant="primary" onClick={confirmVarification}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
        <ToastContainer position="bottom-end" className="p-4">
          <Toast onClose={() => setWarningToastShow(false)} show={warningToastShow} delay={3000} autohide className="toastsDarkMode">
            <Toast.Header className="toastsDarkMode">
              <strong className="me-auto" style={{ color: "#ffc107" }}>Warning</strong>
            </Toast.Header>
            <Toast.Body>Wrong varification code!</Toast.Body>
          </Toast>
          <Toast onClose={() => setSuccessToastShow(false)} show={successToastShow} delay={3000} autohide className="toastsDarkMode">
            <Toast.Header className="toastsDarkMode">
              <strong className="me-auto" style={{ color: "#28a745" }}>Success</strong>
            </Toast.Header>
            <Toast.Body>Thanks for your thumbs up!</Toast.Body>
          </Toast>
          <Toast onClose={() => setErrorToastShow(false)} show={errorToastShow} delay={3000} autohide className="toastsDarkMode">
            <Toast.Header className="toastsDarkMode">
              <strong className="me-auto" style={{ color: "#dc3545" }}>Error</strong>
            </Toast.Header>
            <Toast.Body>Oops, something goes wrong!</Toast.Body>
          </Toast>
        </ToastContainer>
      </header>
    </div >
  );
}


export default Home;
