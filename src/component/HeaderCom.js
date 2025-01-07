import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink} from 'react-router-dom';
import { Navbar,Nav } from 'react-bootstrap';

function HeaderCom(){

  return(
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavLink className={({isActive}) => `nav-link ${isActive ? 'active-link' : ''}`} to={"/list"}>Danh Sách Sản Phẩm</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )

}
export default HeaderCom;