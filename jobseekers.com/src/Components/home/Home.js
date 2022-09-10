import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './home.css'
import jobs from './dummyjobs';

const Home = () => {
  return (
    <>
      <section class="bg-home">
        <div class="home-center">
          <div class="home-desc-center">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <div class="home-title text-center textColor">
                    <h5 class="small-title text-uppercase f-17 mb-4 textColor">Discover Joobsy Today</h5>
                    <h1 class="mb-4">Find your New Job Easiest Way With Joobsy</h1>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section class="secondSection">
        <div >
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="title text-center mb-4">
                <h4>Popular Category</h4>
                <p class="text-muted mb-1">minima veniam quis nostrum exercitationem Quis autem vel eum iure</p>
                <div class="title-icon position-relative">
                  {/* <i class="mdi mdi-chevron-down position-relative h3 text-custom bg-white"></i> */}
                  <i class="fa fa-solid fa-chevron-down position-relative h3 text-custom bg-white"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="popu-category-box bg-light rounded text-center mt-4 p-4">
                <div class="popu-category-icon mb-3">
                  {/* <i class="mdi mdi-account h2 text-custom"></i> */}
                  <i class="fa fa-solid fa-user h2 text-custom"></i>
                </div>
                <div class="popu-category-content">
                  <h5 class="f-18 mb-4"><a href="" class="text-dark">Developer</a></h5>
                  <p class="text-custom mb-0 rounded">780 Jobs</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="popu-category-box bg-light rounded text-center mt-4 p-4">
                <div class="popu-category-icon mb-3">
                  {/* <i class="mdi mdi-desktop-classic h2 text-custom"></i> */}
                  <i class="fa fa-solid fa-desktop h2 text-custom"></i>
                </div>
                <div class="popu-category-content">
                  <h5 class="f-18 mb-4"><a href="" class="text-dark">Technology</a></h5>
                  <p class="text-custom mb-0 rounded">1270 Jobs</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="popu-category-box bg-light rounded text-center mt-4 p-4">
                <div class="popu-category-icon mb-3">
                  {/* <i class="mdi mdi-bank h2 text-custom"></i> */}
                  <i class="fa fa-sharp fa-solid fa-briefcase  h2 text-custom"></i>
                </div>
                <div class="popu-category-content">
                  <h5 class="f-18 mb-4"><a href="" class="text-dark">Government</a></h5>
                  <p class="text-custom mb-0 rounded">2024 Jobs</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="popu-category-box bg-light rounded text-center mt-4 p-4">
                <div class="popu-category-icon mb-3">
                <i class="fa fa-sharp fa-solid fa-globe h2 text-custom"></i>
                </div>
                <div class="popu-category-content">
                  <h5 class="f-18 mb-4"><a href="" class="text-dark">All Jobs</a></h5>
                  <p class="text-custom mb-0 rounded">5000+ Jobs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='container-fluid margin'>



        <div >
          <div className='row'>
            <div className='col-10 jobContainer'>
              {/* <div className="col-10 col-md-4 col-sm-6 mt-5"> */}

              {
                jobs.map((jobsData) => {
                  return (
                    <div className="card p-5">
                      <div className="card-body">
                        <h5 className="card-title"><strong>Comapny</strong>: {jobsData.companyName}</h5>
                        <h6 className="card-subtitle mb-2 text-muted"><strong>Role</strong>: {jobsData.role}</h6>
                        <p className="card-text"><strong>Requirements</strong> : {jobsData.requirements}</p>
                        <NavLink className="btn btn-bd-apply d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3" to="/login">Apply Now</NavLink>

                      </div>
                    </div>
                  )
                })
              }

              {/* </div> */}

              {/* <section class="pt-5 pb-5">
                <div class="container">
                  <div class="row">
                    <div class="col-6">
                      <h3 class="mb-3">Carousel cards title </h3>
                    </div>
                    <div class="col-6 text-right">
                      <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button"
                        data-slide="prev">
                        <i class="fa fa-arrow-left"></i>
                      </a>
                      <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                        <i class="fa fa-arrow-right"></i>
                      </a>
                    </div>
                    <div class="col-12">
                      <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <div class="row">

                              <div class="col-md-4 mb-3">
                                <div class="card">
                                  <img class="img-fluid" alt="100%x280"
                                    src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" />
                                  <div class="card-body">
                                    <h4 class="card-title">Special title treatment</h4>
                                    <p class="card-text">With supporting text below as a natural lead-in to
                                      additional content.</p>

                                  </div>

                                </div>
                              </div>
                              <div class="col-md-4 mb-3">
                                <div class="card">
                                  <img class="img-fluid" alt="100%x280"
                                    src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698" />
                                  <div class="card-body">
                                    <h4 class="card-title">Special title treatment</h4>
                                    <p class="card-text">With supporting text below as a natural lead-in to
                                      additional content.</p>

                                  </div>
                                </div>
                              </div>
                              <div class="col-md-4 mb-3">
                                <div class="card">
                                  <img class="img-fluid" alt="100%x280"
                                    src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a" />
                                  <div class="card-body">
                                    <h4 class="card-title">Special title treatment</h4>
                                    <p class="card-text">With supporting text below as a natural lead-in to
                                      additional content.</p>

                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                          <div class="carousel-item">
                            <div class="row">

                              <div class="col-md-4 mb-3">
                                <div class="card">
                                  <img class="img-fluid" alt="100%x280"
                                    src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4" />
                                  <div class="card-body">
                                    <h4 class="card-title">Special title treatment</h4>
                                    <p class="card-text">With supporting text below as a natural lead-in to
                                      additional content.</p>

                                  </div>

                                </div>
                              </div>
                              <div class="col-md-4 mb-3">
                                <div class="card">
                                  <img class="img-fluid" alt="100%x280"
                                    src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840" />
                                  <div class="card-body">
                                    <h4 class="card-title">Special title treatment</h4>
                                    <p class="card-text">With supporting text below as a natural lead-in to
                                      additional content.</p>

                                  </div>
                                </div>
                              </div>
                              <div class="col-md-4 mb-3">
                                <div class="card">
                                  <img class="img-fluid" alt="100%x280"
                                    src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e" />
                                  <div class="card-body">
                                    <h4 class="card-title">Special title treatment</h4>
                                    <p class="card-text">With supporting text below as a natural lead-in to
                                      additional content.</p>

                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                          <div class="carousel-item">
                            <div class="row">

                              <div class="col-md-4 mb-3">
                                <div class="card">
                                  <img class="img-fluid" alt="100%x280"
                                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23" />
                                  <div class="card-body">
                                    <h4 class="card-title">Special title treatment</h4>
                                    <p class="card-text">With supporting text below as a natural lead-in to
                                      additional content.</p>

                                  </div>

                                </div>
                              </div>
                              <div class="col-md-4 mb-3">
                                <div class="card">
                                  <img class="img-fluid" alt="100%x280"
                                    src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129" />
                                  <div class="card-body">
                                    <h4 class="card-title">Special title treatment</h4>
                                    <p class="card-text">With supporting text below as a natural lead-in to
                                      additional content.</p>

                                  </div>
                                </div>
                              </div>
                              <div class="col-md-4 mb-3">
                                <div class="card">
                                  <img class="img-fluid" alt="100%x280"
                                    src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6" />
                                  <div class="card-body">
                                    <h4 class="card-title">Special title treatment</h4>
                                    <p class="card-text">With supporting text below as a natural lead-in to
                                      additional content.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section> */}



              {/*----------------------------------------------side div------------------------------ */}
            </div>


            {/* <div className='col-2'>
              <div className='container container-lg container-sm container-md'>
                <div className='row mt-5'>
                  <div className='content'>
                    <ul>
                      <li>
                        How we will make you land a job?
                      </li>
                      <li>
                        How to prepare for MAANG?
                      </li>
                      <li>
                        Top Recruiters
                      </li>
                      <li>
                        24/4 Expert supports
                      </li>
                      <li>
                        How we handle data
                      </li>
                      <li>
                        Resume builder.
                      </li>
                      <li>
                        How we will make you land a job?
                      </li>
                      <li>
                        How to prepare for MAANG?
                      </li>
                      <li>
                        Top Recruiters
                      </li>
                      <li>
                        24/4 Expert supports
                      </li>
                      <li>
                        How we handle data
                      </li>
                      <li>
                        Resume builder.
                      </li>
                      <li>
                        How we will make you land a job?
                      </li>
                      <li>
                        How to prepare for MAANG?
                      </li>
                      <li>
                        Top Recruiters
                      </li>
                      <li>
                        24/4 Expert supports
                      </li>
                      <li>
                        How we handle data
                      </li>
                      <li>
                        Resume builder.
                      </li>
                      <li>
                        How we will make you land a job?
                      </li>
                      <li>
                        How to prepare for MAANG?
                      </li>
                      <li>
                        Top Recruiters
                      </li>
                      <li>
                        24/4 Expert supports
                      </li>
                      <li>
                        How we handle data
                      </li>
                      <li>
                        Resume builder.
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div> */}

          </div>

        </div>

      </div>

      {/* ------------------HOW THIS WEBSITE WORKSSS----------------------------------------------- */}

      <section class="secondSection">
        <div >
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="title text-center mb-4">
                            <h4>How It Work</h4>
                            <p class="text-muted mb-1">minima veniam quis nostrum exercitationem Quis autem vel eum iure</p>
                            <div class="title-icon position-relative">
                            <i class="fa fa-solid fa-chevron-down position-relative h3 text-custom bg-white"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="how-it-work-box bg-light p-4 mt-4 text-center">
                            <div class="how-it-work-img mb-4">
                                <img src="https://themesdesign.in/joobsy/images/how-it-work/img-1.png" alt="" class="img-fluid mx-auto d-block"/>
                                <p>1</p>
                            </div>
                            <div>
                                <h5 class="f-18">Register an account</h5>
                                <p class="f-14 text-muted">Donec pede justo fringilla vel aliquet nec vulputate eget arcu. In enim justo rhoncus ut a, venenatis vitae justo.</p>
                                <a href="#" class="text-custom">Read more <i class="mdi mdi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="how-it-work-box bg-light p-4 mt-4 text-center">
                            <div class="how-it-work-img mb-4">
                                <img src="https://themesdesign.in/joobsy/images/how-it-work/img-2.png" alt="" class="img-fluid mx-auto d-block"/>
                                <p>2</p>
                            </div>
                            <div>
                                <h5 class="f-18">Search your job</h5>
                                <p class="f-14 text-muted">Aliquam lorem ante dapibus in, viverra feugiatquis a tellus. Phasellus viverra nulla ut metus varius Quisque rutrum.</p>
                                <a href="#" class="text-custom">Read more <i class="mdi mdi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="how-it-work-box bg-light p-4 mt-4 text-center">
                            <div class="how-it-work-img mb-4">
                                <img src="https://themesdesign.in/joobsy/images/how-it-work/img-3.png" alt="" class="img-fluid mx-auto d-block"/>
                                <p>3</p>
                            </div>
                            <div>
                                <h5 class="f-18">Apply for job</h5>
                                <p class="f-14 text-muted">Nullam dictum felis eu pede mollis pretiumetus Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.</p>
                                <a href="#" class="text-custom">Read more <i class="mdi mdi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*----------------------------------------------------------------------ANOTHER SECTION--PLEASE DO NOT TOUCH------------------------------------- */}
    {/* <section class="section bg-counter">
        <div class="bg-overlay"></div>
        <div class="container">
            <div class="row" id="counter">
                <div class="col-lg-3 col-md-6">
                    <div class="home-counter pt-3">
                        <div class="float-left counter-icon mr-3">
                            <i class="mdi mdi-bank h1 text-white"></i>
                        </div>
                        <div class="counter-content">
                            <h1 class="counter-value text-custom mb-1" data-count="120">120</h1>
                            <p class="counter-name text-white f-14 text-uppercase">Companies</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="home-counter pt-3">
                        <div class="float-left counter-icon mr-3">
                            <i class="mdi mdi-file-document-box h1 text-white"></i>
                        </div>
                        <div class="counter-content">
                            <h1 class="counter-value text-custom mb-1" data-count="480">480</h1>
                            <p class="counter-name text-white f-14 text-uppercase">Applications</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="home-counter pt-3">
                        <div class="float-left counter-icon mr-3">
                            <i class="mdi mdi-calendar-multiple-check h1 text-white"></i>
                        </div>
                        <div class="counter-content">
                            <h1 class="counter-value text-custom mb-1" data-count="120">120</h1>
                            <p class="counter-name text-white f-14 text-uppercase">Job Posted</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="home-counter pt-3">
                        <div class="float-left counter-icon mr-3">
                            <i class="mdi mdi-account-multiple-plus h1 text-white"></i>
                        </div>
                        <div class="counter-content">
                            <h1 class="counter-value text-custom mb-1" data-count="200">200</h1>
                            <p class="counter-name text-white f-14 text-uppercase">Member</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section> */}

    </>

  )
}

export default Home