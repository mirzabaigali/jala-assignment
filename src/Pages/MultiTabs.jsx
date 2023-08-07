import React from "react";
import Headding from "../Components/Headding";
import SidePanel from "../Components/SidePanel";

const MultiTabs = () => {
  return (
    <>
      <Headding />
      <div className="d-flex">
        <div className="col-2 d-sm-none d-md-none d-none d-lg-none d-xl-block">
          <SidePanel />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Tabs</h1>
            </div>
            <div className="col-12 mt-5">
              <div className="card">
                <nav className="mt-3">
                  <div className="nav nav-tabs fs-1" id="nav-tab" role="tablist">
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
                      Plan To Succeed
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
                      UnLearing
                    </button>
                    <button
                      className="nav-link"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      Ways Of Unlearing
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
                    <p>
                      Congratulations, You are in the best place to learn the
                      technologies for JOB. Please strictly follow the plan for
                      the first 45 days to see the unbelievable results.
                    </p>
                    <p>
                      You must UNLEARN to LEARN new things every day as
                      technologies are changing faster than ever and Because the
                      old rules will no longer apply...and so your old knowledge
                      is. It's time for us to think beyond.
                    </p>
                    <p>
                      It's not just learning technologies, Also You learn how to
                      use your knowledge and experience to get a job in less
                      than 100 days.
                    </p>
                    <div className="row mb-5 mt-5 ms-2">
                      <div className="col-4">
                        <input type="text" className="form-control fs-3" />
                      </div>
                      <div className="col-4">
                        <input type="text" className="form-control fs-3" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <p>
                      Unlearning is the process of realizing that something
                      which we learned earlier is incorrect, ineffective, or
                      obsolete, admitting it and deciding to erase such bad
                      conditioning and misconceptions from our mind for good. It
                      is the process of exploring what we have stored in our
                      system and deleting all the unnecessary data. It is the
                      process of saying bye to an old, obsolete, and outdated
                      paradigm and embracing a new paradigm and willingly
                      undergoing a paradigm shift.
                    </p>
                    <p>
                      Unfortunately, we are controlled by myths which do not
                      allow us to open our eyes to reality
                    </p>
                    <div className="row mb-5 mt-5 ms-2">
                      <div className="col-4">
                        <input type="text" className="form-control fs-3" />
                      </div>
                      <div className="col-4">
                        <input type="text" className="form-control fs-3" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <p>
                      The first step towards becoming an “unlearned” is not just
                      to have a thirst for knowledge but to question our
                      knowledge. Discussing our knowledge with those who are
                      competent in a particular field, being challenged
                      constantly, and being ready to be proved wrong will help
                      us understand whether what we have learned is still
                      relevant or obsolete. It is also important to question
                      one’s belief system and check whether we are treating
                      myths as scientific facts.
                    </p>
                    <p>
                      The next important step is to take steps to develop
                      creative and critical thinking.
                    </p>
                    <div className="row mb-5 mt-5 ms-2 ">
                      <div className="col-4">
                        <input type="text" className="form-control fs-3" />
                      </div>
                      <div className="col-4">
                        <input type="text" className="form-control fs-3" />
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

export default MultiTabs;
