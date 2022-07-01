import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start text-white' style={{ backgroundColor: '#0058A3'}}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ color: '#ffffff' }}>
                <i className='fas fa-gem me-3'></i>Sarana Pintu
              </h6>
              <p>
                Perusahaan yang bergerak di bidang pintu. Menyediakan jasa kustomisasi lengkap dengan pengiriman.
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-white'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ color: '#ffffff' }}>Products</h6>
              <p>
                <a href='#?keyword=pintu%20millenial&page=1' className='text-reset'>
                  Pintu Millenial
                </a>
              </p>
              <p>
                <a href='#?keyword=pintu%20pvc%20biasa&page=1' className='text-reset'>
                  Pintu PVC Biasa 
                </a>
              </p>
              <p>
                <a href='#?keyword=pintu%20pvc%20panel&page=1' className='text-reset'>
                Pintu PVC Panel
                </a>
              </p>
              <p>
                <a href='#?keyword=pintu%20alumunium&page=1' className='text-reset'>
                  Pintu Alumunium
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ color: '#ffffff' }}>Useful links</h6>
              <p>
                <a href='#customdoor' className='text-reset'>
                  Custom
                </a>
              </p>
              <p>
                <a href='#cart' className='text-reset'>
                  Cart
                </a>
              </p>
              <p>
                <a href='#about' className='text-reset'>
                  About Us
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ color: '#ffffff' }}>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> Jakarta, Indonesia
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i> saranateam@email.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 618 119 275 222
              </p>
              <p>
                <i className='fas fa-print me-3'></i> + 618 119 275 222
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        Copyright &copy; 2022 Sarana Pintu
      </div>
    </MDBFooter>
  );
}

export default Footer