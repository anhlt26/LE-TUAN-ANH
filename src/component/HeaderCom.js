import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink} from 'react-router-dom';
import { Navbar,Nav } from 'react-bootstrap';

function HeaderCom(){

  return(
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">TEST MODUL FONTEND</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavLink className={({isActive}) => `nav-link ${isActive ? 'active-link' : ''}`} to={"/home"}>Home</NavLink>
          <NavLink className={({isActive}) => `nav-link ${isActive ? 'active-link' : ''}`} to={"/list"}>LIST ASSET</NavLink>
          <NavLink className={({isActive}) => `nav-link ${isActive ? 'active-link' : ''}`} to={"/list/add"}>ADD ASSET</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )

}
export default HeaderCom;