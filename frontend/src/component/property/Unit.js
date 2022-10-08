import React from "react";

const Unit = (props) => {
  console.log(props);

  const DocumentIcon = (icon) => {
    if (icon.doc) {
      return (
        <div class="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
          <i class="fas fa-check opacity-10" aria-hidden="true"></i>
        </div>
      );
    } else {
      return (
        <div class="icon icon-shape icon-xs rounded-circle bg-gradient-secondary shadow text-center">
          <i class="fas fa-minus" aria-hidden="true"></i>
        </div>
      );
    }
  };

  return (
    <div class="card">
      <div class="card-header pb-0 p-3">
        <div class="d-flex align-items-center">
          <h6 class="mb-0">{props.units.name}</h6>
          <button
            type="button"
            class="btn btn-icon-only btn-rounded btn-outline-secondary mb-0 ms-2 btn-sm d-flex align-items-center justify-content-center ms-auto"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
          >
            <i class="fas fa-info" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="card-body p-3">
        <div class="row">
          <div class="col-5 text-center">
            <div>
              <input
                class="border-profile"
                type="image"
                alt="photo"
                src={props.units.profile}
              />
            </div>
          </div>
          <div class="col-7">
            <div class="table-responsive">
              <table class="table align-items-center mb-0">
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-0">
                        <span class="bg-gradient-primary me-3"> </span>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Unit Name : </h6>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="text-xs font-weight-bold">
                        {props.units.info.unit_name}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-0">
                        <span class="bg-gradient-secondary me-3"> </span>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Joined</h6>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="text-xs font-weight-bold">
                        {" "}
                        {props.units.info.join}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-0">
                        <span class="bg-gradient-info me-3"> </span>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Rant</h6>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="text-xs font-weight-bold">
                        {props.units.info.rent}{" "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-0">
                        <span class="bg-gradient-success me-3"> </span>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Advance</h6>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="text-xs font-weight-bold">
                        {props.units.info.advance}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-0">
                        <span class="bg-gradient-warning me-3"> </span>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Documents</h6>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="text-xs font-weight-bold">
                        <DocumentIcon doc={props.units.info.document} />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unit;
