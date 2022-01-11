import './App.css';
import events from './events.jpg'
import workshops from './workshop.jpg'
import gl from './gl.jpg'
import background from './bg.png'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <div style={{ backgroundImage: `url(${background})` }}>
     
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <div className='section-light'>
<br></br>
<br></br>
<div className="jumbotron jumbotron-fluid">
                     <h1 class="display-4">ABOUT METTLE</h1>
              </div>
              <br></br>
<br></br>
              
              </div>
              <br></br>
<br></br>
<div className='text-font'>
              <p>Mettle is the Annual National Level Technical Symposium conducted by the department of Metallurgical and Materials Engineering, NIT Trichy. With an aim to recognize and highlight the growing role of Metallurgical and Materials Engineering in our technological applications, Mettle serves as a common platform and hosts a series of activites like guest lectures, workshops, events , demonstrations for the benefit of community and better technological cohesivity within people of various walks in materials engineering. Come and witness a truly inspiring happenings at NIT Trichy.</p>
              <br></br>
<br></br>
</div>
  <div className='section-light'>
<br></br>
<br></br>
<div className="jumbotron jumbotron-fluid">
                     <h1 class="display-4">HIGHLIGHTGS OF METTLE'22</h1>
              </div>
              <br></br>
<br></br>
              
              </div>
  <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      className="img1"
      src= { events }
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      className="img1"
      src= { workshops }
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      className="img1"
      src= { gl }
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
<div className='section-light'>
<br></br>
<br></br>
<div className="jumbotron jumbotron-fluid">
                     <h1 class="display-4">EVENTS</h1>
              </div>
              <br></br>
              <br></br>
              </div>
  <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      className="img1"
      src= { events }
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      className="img1"
      src= { workshops }
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      className="img1"
      src= { gl }
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
 
<div className='section-light'>
<br></br>
<br></br>
<div className="jumbotron jumbotron-fluid">
                     <h1 class="display-4">WORKSHOPS</h1>
              </div>
              
              </div>
  <Carousel>
  
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      className="img1"
      src= { events }
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      className="img1"
      src= { workshops }
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      className="img1"
      src= { gl }
      alt="Third slide"
    />
  </Carousel.Item>
 
</Carousel>

<div className='section-light'>
<br></br>
<br></br>
<div className="jumbotron jumbotron-fluid">
                     <h1 class="display-4">GUEST LECTURES</h1>
              </div>
              <br></br>
              <br></br>
              </div>
  <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      className="img1"
      src= { events }
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      className="img1"
      src= { workshops }
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      className="img1"
      src= { gl }
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

  
  </div>

</div>  
  );
}

export default App;
