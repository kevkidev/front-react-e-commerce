import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RoutesPath } from "router/routes";
import LocalData from "services/LocalData";

interface Input {
  rootPath?: string;
  logged?: boolean;
  user?: unknown;
}

// function Menu() {
//   return;
// }

// export function Menu({ rootPath, logged, user }: Input) {
//   return (
//     <nav>
//       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand href={RoutesPath.ROOT}>Demo</Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="#pricing">Articles</Nav.Link>
//               <Nav.Link href="#pricing"></Nav.Link>
//               <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">
//                   Something
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">
//                   Separated link
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//             <Nav>
//               {/* <Nav.Link href="#"> */}
//               {logged ? (
//                 <span
//                   onClick={() => {
//                     alert("logout");
//                   }}
//                 >
//                   Sign Out
//                 </span>
//               ) : (
//                 <Link to={RoutesPath.LOGIN}>Sign In</Link>
//               )}
//               {/* </Nav.Link> */}
//               <Nav.Link eventKey={2} href="#">
//                 #{LocalData.getUser() && <Link to="account">Account</Link>}
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </nav>
//   );
// }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function MainMenu({ rootPath, logged, user }: Input) {
  return (
    <nav>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href={RoutesPath.ROOT}>Demo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#pricing">Articles</Nav.Link>
              <Nav.Link href="#pricing"></Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {/* <Nav.Link href="#"> */}
              {logged ? (
                <span
                  onClick={() => {
                    alert("logout");
                  }}
                >
                  Sign Out
                </span>
              ) : (
                <Link to={RoutesPath.LOGIN}>Sign In</Link>
              )}
              {/* </Nav.Link> */}
              <Nav.Link eventKey={2} href="#">
                #{LocalData.getUser() && <Link to="account">Account</Link>}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}

// @todo : remove la responsability of select route => input
// @todo : remove responsability of get data => global store
