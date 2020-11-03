import React from 'react';

export default function JobList() {
  return (
    <div className="container">
    <div className="card shadow-sm my-5">
      <div className="card-body">
        <h5 className="font-weight-normal mb-4">Job List</h5>
        <ul className="nav nav-tabs" id="jobListTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link active" id="active-tab" data-toggle="tab" href="#active" role="tab" aria-controls="active" aria-selected="true">Active</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="submitted-tab" data-toggle="tab" href="#submitted" role="tab" aria-controls="submitted" aria-selected="false">Submitted</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="interviews-tab" data-toggle="tab" href="#interviews" role="tab" aria-controls="interviews" aria-selected="false">Interviews</a>
          </li>
        </ul>
        <div className="tab-content" id="jobListTabContent">
          <div className="tab-pane fade show active" id="active" role="tabpanel" aria-labelledby="active-tab">
            <div className="table-responsive mt-3">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">Client</th>
                    <th scope="col">Job ID</th>
                    <th scope="col">Job Name</th>
                    <th scope="col">Openings</th>
                    <th scope="col">Posted Date</th>
                    <th scope="col">Candidates</th>
                    <th scope="col">Interviews</th>
                    <th scope="col">Status</th>
                    <th scope="col" className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">NCR</th>
                    <td>PYD0001</td>
                    <td>Python Developer</td>
                    <td>10</td>
                    <td>2020-10-29T10:20:02.221375Z</td>
                    <td>15</td>
                    <td>2</td>
                    <td>A</td>
                    <td className="text-center">
                      <div className="dropdown">
                        <button className="btn btn-flat dropdown-toggle dropdown-caret-hide py-0 px-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                          </svg>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" href="HRMS_JobForm.html">Edit</a>
                          <a className="dropdown-item" href="#">Hold</a>
                          <a className="dropdown-item" href="#">Close</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">NCR</th>
                    <td>PYD0001</td>
                    <td>Python Developer</td>
                    <td>10</td>
                    <td>2020-10-29T10:20:02.221375Z</td>
                    <td>15</td>
                    <td>2</td>
                    <td>A</td>
                    <td className="text-center">
                      <div className="dropdown">
                        <button className="btn btn-flat dropdown-toggle dropdown-caret-hide py-0 px-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                          </svg>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" href="HRMS_JobForm.html">Edit</a>
                          <a className="dropdown-item" href="#">Hold</a>
                          <a className="dropdown-item" href="#">Close</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">NCR</th>
                    <td>PYD0001</td>
                    <td>Python Developer</td>
                    <td>10</td>
                    <td>2020-10-29T10:20:02.221375Z</td>
                    <td>15</td>
                    <td>2</td>
                    <td>A</td>
                    <td className="text-center">
                      <div className="dropdown">
                        <button className="btn btn-flat dropdown-toggle dropdown-caret-hide py-0 px-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                          </svg>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" href="HRMS_JobForm.html">Edit</a>
                          <a className="dropdown-item" href="#">Hold</a>
                          <a className="dropdown-item" href="#">Close</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="tab-pane fade" id="submitted" role="tabpanel" aria-labelledby="submitted-tab">
            Submitted
          </div>
          <div className="tab-pane fade" id="interviews" role="tabpanel" aria-labelledby="interviews-tab">
            Interviews
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}
