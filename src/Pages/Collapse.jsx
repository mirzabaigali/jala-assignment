import React from "react";
import Headding from "../Components/Headding";
import SidePanel from "../Components/SidePanel";
const Collapse = () => {
  return (
    <>
      <Headding />
      <div className="d-flex">
        <div className="col-2 d-sm-none d-md-none d-none d-lg-none d-xl-block">
          <SidePanel />
        </div>
        <div className="col">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Collapsible Content</h1>
              </div>
              <div className="col-12 mt-5">
                <div className="card">
                  <nav className="mt-3">
                    <div
                      className="nav nav-tabs fs-1"
                      id="nav-tab"
                      role="tablist"
                    >
                      <button
                        className="nav-link active"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        Single Collapse
                      </button>
                      <button
                        className="nav-link"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        MultiCollapse
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content fs-3" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                            <button
                              className="accordion-button fs-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Know Your Goals and Prioritize Wisely
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>
                                What are your priorities for the day? Make a
                                list of your priorities and plan your day. The
                                tasks of the day must be outlined with the most
                                important and urgent ones on top.
                              </p>
                              <p>
                                Likewise, determine your short-term and
                                long-term goals and evaluate your progress
                                frequently.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button collapsed fs-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Be Focused and Eliminate Distractions
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>
                                Are you really present physically and mentally.
                                Try to block out all distractions so that you
                                have
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button
                              className="accordion-button collapsed fs-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Choose the Right Mentor to succeed In Carrer
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>
                                There is a big difference between a mentor and a
                                coach
                              </p>

                              <p>
                                Mentoring is a long-term process based on mutual
                                trust and respect. Coaching, on the other hand,
                                is for a short period of time.
                              </p>
                              <p>
                                The topmost priority of a mentor is to help
                                develop skills that are not just relevant for
                                the mentees in their present job, but also for
                                the future. A mentor has the first-hand
                                experience in the industry
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <div
                        className="accordion"
                        id="accordionPanelsStayOpenExample"
                      >
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingOne"
                          >
                            <button
                              className="accordion-button fs-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapseOne"
                              aria-expanded="true"
                              aria-controls="panelsStayOpen-collapseOne"
                            >
                              Collabrate With Colleagues
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="panelsStayOpen-headingOne"
                          >
                            <div className="accordion-body">
                              <p>
                                Teach and learn from each other <br />
                                Collaborate on lesson plans-Two minds are better
                                than one. <br />
                                Build your own social network <br />
                                Get feedback regularly <br />
                                Work together to solve problems <br />
                                Become a teacher-leader <br />
                                Adopt a team mentality <br />
                                Ask for help <br />
                                Find a mentor <br />
                                Be open to new ideas
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingTwo"
                          >
                            <button
                              className="accordion-button collapsed fs-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapseTwo"
                              aria-expanded="false"
                              aria-controls="panelsStayOpen-collapseTwo"
                            >
                              Learn Anything Quickly
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingTwo"
                          >
                            <div className="accordion-body">
                              <p>
                                Learn by doing. Always play with the code while
                                learning1. Ask for help. You’ll need it <br />
                                TEACH SOMEONE ELSE <br />
                                FOCUS ON THE 20% <br />
                                Identifying the problem that needs solving{" "}
                                <br />
                                Seek out more online resources. There’s a wealth
                                of content <br />
                                Don’t just read the sample code. Tinker with it!{" "}
                                <br />
                                Take breaks when debugging <br />
                                Keep Calm and Keep On Coding
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingThree"
                          >
                            <button
                              className="accordion-button collapsed fs-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapseThree"
                              aria-expanded="false"
                              aria-controls="panelsStayOpen-collapseThree"
                            >
                              Reasons People Give Up On Their Goals Too Early
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingThree"
                          >
                            <div className="accordion-body">
                              <p>
                                They want the outcome more than they want to
                                obtain a skill <br />
                                They do not have the discipline to stick with
                                their idea long enough to see it live <br />
                                They get distracted by what someone else is
                                doing <br />
                                They don't believe in themselves enough. <br />
                                They fail once--and never try again <br />
                                They don't learn how to discipline themselves{" "}
                                <br />
                                They care more about the end result, not the
                                process <br />
                                They surround themselves with people who are a
                                negative influence. <br />
                                They would rather settle for short-term rewards{" "}
                                <br />
                                They don't have a guaranteed path to achieve
                                success <br />
                                They don’t have the discipline to work hard
                                enough <br />
                                They become distracted by other aspects of their
                                life <br />
                                They don't know that failure is normal
                              </p>
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
        </div>
      </div>
    </>
  );
};

export default Collapse;
