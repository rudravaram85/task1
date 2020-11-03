import React from 'react';

export default function JobForm() {
  return (
<div className="container">
  <div className="card shadow-sm my-5">
    <div className="card-body">
      <h5 className="font-weight-normal mb-4">Edit Job</h5>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor>Client</label>
            <input type="text" className="form-control" id />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor>Job ID</label>
            <input type="text" className="form-control" id />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor>Job Name</label>
            <input type="text" className="form-control" id />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor>Openings</label>
            <input type="text" className="form-control" id />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor>Posted Date</label>
            <input type="text" className="form-control" id />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor>Candidates</label>
            <input type="text" className="form-control" id />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor>Interviews</label>
            <input type="text" className="form-control" id />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor>Status</label>
            <input type="text" className="form-control" id />
          </div>
        </div>
        <div className="text-right">
          <button type="button" className="btn btn-sm btn-flat" onclick="window.location.href='HRMS_JobList.html'">Cancel</button>
          <button type="button" className="btn btn-sm btn-primary" onclick="window.location.href='HRMS_JobList.html'">Save</button>
        </div></form>
    </div>
  </div>
</div>
  );
}
