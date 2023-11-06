import React ,{useState}from 'react'
import logo from "../assets/logo.svg"
import menuIcon from "../assets/menuIcon.svg"
import logOut from "../assets/logOut.svg"
import Offcanvas from 'react-bootstrap/Offcanvas';
import userProfileImg from "../assets/profile.svg"
import menuItem1 from "../assets/mentItem1.svg"
import logoutIcon from "../assets/logOut.svg"
const Navbar = () => {
    const userInformation = [
        {
          userName: "Himani Shah",
        },
      ];
    
      const menuItems = [
        {
          title: "Courses",
        },
        {
          title: "My Papers",
        },
        {
          title: "Question Bank",
        },
        {
          title: "Personalization",
        },
      ];

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className='container'>
    <div className='row align-items-center'>
        <div className='col-2'>
            <img src={menuIcon} onClick={handleShow} alt='jg' />
        </div>
        <div className='col-8 text-center'>
            <img src={logo} alt='jg' />
        </div>
        <div className='col-2'>
            <img src={logOut} alt='jg' />
        </div>
    </div>
</div>
<Offcanvas
        className="w-75"
        show={show}
        onHide={handleClose}
        backdrop="static"
      >
        <Offcanvas.Header
          closeButton
          className="d-flex justify-content-end"
        ></Offcanvas.Header>
        <Offcanvas.Body className="position-relative" >
          {/* user details started  */}
          <div className="menuOffcanvasUserDetailsMain">
            <img src={userProfileImg} className="" alt="user profile" />
            <div>
              <h6>{userInformation[0].userName}</h6>
              <span>View Profile</span>
            </div>
          </div>
          {/* user details end  */}

          {/* menu items started  */}
          <div className="menuItems d-flex mt-5 row-gap-3 align-items-start ms-2 flex-column justify-content-center">
            {menuItems.map((value, index) => (
              <div key={index} className="d-flex align-items-center gap-2">
                <img src={menuItem1} alt="menu item" />
                <span >{value.title}</span>
              </div>
            ))}
          </div>
          {/* menu items end  */}

          <div className="bg-dark w-100 logoutButton" >
              <button className="p-2 position-absolute border-0 ms-1 py-3 outline-0 w-75"   >
                <img src={logoutIcon} className="me-2" alt="logout icon" />
                Log Out
              </button>
          </div>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Navbar
