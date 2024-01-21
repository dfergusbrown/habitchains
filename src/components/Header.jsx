import { useState } from "react";
import LoginModal from "./modal/loginModal";

const MainHeader = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
      <div className="avatar" onClick={handleShow}></div>
      <LoginModal show={show} handleClose={handleClose} handleShow={handleShow}/>
    </header>
  );
};

export default MainHeader;
