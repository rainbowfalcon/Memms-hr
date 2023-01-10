import './assets/scss/base.scss';
import './App.scss';


function App() {
  return (
    <div className='App'>
      <main className='position-realtive'>
        {/* ========== overlay Start Section ========== */}
        <div className='bg_overlaye position-absolute top-0 bottom-0 start-0 end-0'></div>
        {/* ========== overlay End Section ==========*/}
        {/* ========== Navbar Start Section ========== */}
        <header>
          <nav className="navbar navbar-expand-lg border sticky-top shadow-sm bg-light">
            <div className="container">
              <a className="navbar-brand" href="#">
                {/* <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Memms" width="30" height="24"/> */}
                <p className='m-0 fw-bolder fs-5 text-uppercase'>Memms</p>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item position-relative mx-2">
                    <a className="nav-link  fw-bold" aria-current="page" href="#">Product</a>
                  </li>
                  <li className="nav-item position-relative mx-2">
                    <a className="nav-link fw-bold" href="#">Service</a>
                  </li>
                  <li className="nav-item position-relative mx-2">
                    <a className="nav-link fw-bold" href="#">Pricing</a>
                  </li>
                  <li className="nav-item position-relative mx-2">
                    <a className="nav-link fw-bold" href="#">About Us</a>
                  </li>
                  <li className="nav-item position-relative mx-2">
                    <a className="nav-link fw-bold" href="#">Contact Us</a>
                  </li>
                  <li className="nav-item dropdown d-none">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                </ul>
                <form className="d-flex ms-4" role="modal">
                  <button className="btn btn-primary text-white fw-bold" type="button">Book a free demo</button>
                </form>
              </div>
            </div>
          </nav>
        </header>
        {/* ========== Navbar End Section ==========*/}
        {/* ========== landing banner Start Section ========== */}
        <section>
          <div className='container d-flex align-items-center'>
            <div className="card mb-3 bg-transparent border-0 py-2 py-md-5">
              <div className="row g-0 my-2 my-md-5">
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                  <div className="card-body p-0 d-flex flex-column justify-content-center align-items-start">
                    <h6 className="card-title bg-secondary p-2 px-3 rounded-pill text-white text-uppercase fs-6 mb-3">ERP solution chain management</h6>
                    <h5 className="card-title display-3 fw-bolder"><span className='text-primary'>M</span>edical <span className='text-primary'>E</span>quipment <span className='text-primary'>M</span>anagement <span className='text-primary'>S</span>oftware</h5>
                    <small className="card-text text-muted lh-lg fs-5">MEMSS is an easy-to-use and cloud-based intuitive ERP solution for medical equipment
                      management that ensures quick, simple, real-time maintenance of assets and equipment
                      from a single point.</small>
                  </div>
                  <div className='card-footer w-100 bg-transparent border-0 p-0 my-3'>
                    <div className='d-flex align-items-center justify-content-start gap-3'>
                      <button className='btn btn-primary rounded-pill p-3 px-5 fs-5 text-white shadow-lg'>Memms Demo</button>
                      <button className='btn fs-5 text-muted'>Learn more --></button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <img src={require('./assets/img/LaboratoryExperiment.gif')} className="img-fluid rounded-start" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========== landing banner Ends Section ========== */}
        <section>
          <div className='container d-flex align-items-center'>
            <div className="card mb-3 bg-transparent border-0">
              <div className="row g-0 ">
                <div className="col-md-6">
                  <img src={require('./assets/img/book-online-doctor-appointment.gif')} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                  <div className="card-body p-0 d-flex flex-column justify-content-center align-items-start">
                    <h6 className="card-title bg-secondary p-2 px-3 rounded-pill text-white text-uppercase fs-6 mb-3">HIGH PERFORMANCE AND EXCELLENT RESULTS</h6>
                    <h5 className="card-title display-3 fw-bold">Register your demo today</h5>
                    <small className="card-text text-muted lh-lg fs-5">Our ERP solution is great for any supply chain management!
                      Reduce RISK, COST and TIME with MEMSS</small>
                  </div>
                  <div className='card-footer w-100 bg-transparent border-0 p-0 my-3'>
                    <div className='d-flex align-items-center justify-content-start gap-3'>
                      <div className='avatar rounded-circle overflow-hidden border shadow d-flex align-items-start justify-content-end' style={{ width: '70px', height: '70px' }}>
                        <img src={require('./assets/img/man-with-facemask.png')} className="img-fluid rounded-start" alt="..." />
                      </div>
                      <div>
                        <h4 className='fw-semibold m-0 fs-5 fw-bold'>Dileep Iarala</h4>
                        <small className='m-0 text-info fw-bold fs-7'>CEO & FOUNDER</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* ========== Page divider Start Section ========== */}
      <section className='bg_gradient'>
        <div className='container mx-auto row py-5'>
          <div className='col'>
            <h2 className='m-0 fs-2 fw-bold lh-base text-white my-5'><span className='text-primary'>MEMSS</span> is called the ultimate software for healthcare equipment management by industry
              experts, manufacturers & suppliers.</h2>
          </div>
          <div className='col-auto'>
            <button className='btn btn-light p-3 px-5 rounded-pill fs-5 text-dark fw-bold my-5'>Contact us --></button>
          </div>
        </div>
      </section>
      {/* ========== Page divider Start Section ========== */}
      <footer>
        <div className='card bg-dark rounded-0 py-3'>
          <div className='card-body container'>
            <p className='m-0 text-white fs-6'>© Memms 2022. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
