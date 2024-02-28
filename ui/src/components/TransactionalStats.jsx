import React from "react";
import Header from "./Header";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
function TransactionalStats() {
  /* One.onLoad(
    class {
      static initChartsChartJS() {
        (Chart.defaults.color = "#818d96"),
          (Chart.defaults.font.weight = "600"),
          (Chart.defaults.scale.grid.color = "rgba(0, 0, 0, .05)"),
          (Chart.defaults.scale.grid.zeroLineColor = "rgba(0, 0, 0, .1)"),
          (Chart.defaults.scale.beginAtZero = !0),
          (Chart.defaults.elements.line.borderWidth = 2),
          (Chart.defaults.elements.point.radius = 4),
          (Chart.defaults.elements.point.hoverRadius = 6),
          (Chart.defaults.plugins.tooltip.radius = 3),
          (Chart.defaults.plugins.legend.labels.boxWidth = 15);
        let a,
          t,
          e,
          r,
          o,
          l,
          n,
          d,
          s = document.getElementById("js-chartjs-lines"),
          i = document.getElementById("js-chartjs-bars"),
          h = document.getElementById("js-chartjs-radar"),
          u = document.getElementById("js-chartjs-polar"),
          c = document.getElementById("js-chartjs-pie"),
          g = document.getElementById("js-chartjs-donut");
        (n = {
          labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
          datasets: [
            {
              label: "Clicked",
              fill: !0,
              backgroundColor: "rgba(171, 227, 125, .5)",
              borderColor: "rgba(171, 227, 125, 1)",
              pointBackgroundColor: "rgba(171, 227, 125, 1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(171, 227, 125, 1)",
              data: [15, 16, 20, 25, 23, 25, 32],
            },
            {
              label: "Opened",
              fill: !0,
              backgroundColor: "rgba(0, 0, 0, .1)",
              borderColor: "rgba(0, 0, 0, .3)",
              pointBackgroundColor: "rgba(0, 0, 0, .3)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(0, 0, 0, .3)",
              data: [30, 32, 40, 45, 43, 38, 55],
            },
          ],
        }),
          (d = {
            labels: ["Earnings", "Sales", "Tickets"],
            datasets: [
              {
                data: [48, 26, 26],
                backgroundColor: [
                  "rgba(171, 227, 125, 1)",
                  "rgba(250, 219, 125, 1)",
                  "rgba(117, 176, 235, 1)",
                ],
                hoverBackgroundColor: [
                  "rgba(171, 227, 125, .75)",
                  "rgba(250, 219, 125, .75)",
                  "rgba(117, 176, 235, .75)",
                ],
              },
            ],
          }),
          null !== s &&
            (a = new Chart(s, {
              type: "line",
              data: n,
              options: {
                tension: 0.4,
              },
            }));
      }
      static init() {
        this.initChartsChartJS();
      }
    }.init()
  ); */
  return (
    <div
      id="page-container"
      className="sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-fixed main-content-narrow"
    >
      <Navigationbar />

      <Header />

      <main id="main-container">
        <div className="bg-body-light">
          <div className="content content-full">
            <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
              <div className="flex-grow-1">
                <h1 className="h3 fw-bold mb-2">
                  Transactional Email Statistics
                </h1>
                <h2 className="fs-base lh-base fw-medium text-muted mb-0">
                  Analyse the statisctics of transactioanl emails sent using API
                  or SMTP
                </h2>
              </div>
              <nav
                className="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3"
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb breadcrumb-alt">
                  <li className="breadcrumb-item">
                    <a className="link-fx" href="javascript:void(0)">
                      Campaigns
                    </a>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Statistics
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="block block-rounded">
            <div className="block-header block-header-default">
              <h3 className="block-title">Select Dates</h3>
            </div>
            <div className="block-content block-content-full">
              <form
                action="be_forms_plugins.html"
                method="POST"
                onsubmit="return false;"
              >
                <div className="row">
                  <div className="col-lg-4">
                    <p className="fs-sm text-muted">
                      Select range of dates for which statistics to be generated
                    </p>
                  </div>
                  <div className="col-lg-8 col-xl-6">
                    <div className="mb-4">
                      <div
                        className="input-daterange input-group"
                        data-date-format="mm/dd/yyyy"
                        data-week-start="1"
                        data-autoclose="true"
                        data-today-highlight="true"
                      >
                        <input
                          type="text"
                          className="form-control"
                          id="example-daterange1"
                          name="example-daterange1"
                          placeholder="From"
                          data-week-start="1"
                          data-autoclose="true"
                          data-today-highlight="true"
                        />
                        <span className="input-group-text fw-semibold">
                          <i className="fa fa-fw fa-arrow-right"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="example-daterange2"
                          name="example-daterange2"
                          placeholder="To"
                          data-week-start="1"
                          data-autoclose="true"
                          data-today-highlight="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-8">
              <div className="block block-rounded">
                <div className="block-header block-header-default">
                  <h3 className="block-title">Charts</h3>
                  <div className="block-options">
                    <button
                      type="button"
                      className="btn-block-option"
                      data-toggle="block-option"
                      data-action="state_toggle"
                      data-action-mode="demo"
                    >
                      <i className="si si-refresh"></i>
                    </button>
                  </div>
                </div>
                <div className="block-content block-content-full text-center">
                  <div className="py-3">
                    <canvas id="js-chartjs-lines"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="block block-rounded d-flex flex-column">
                <div className="block-content block-content-full flex-grow-1 d-flex justify-content-between align-items-center">
                  <dl className="mb-0">
                    <dt className="fs-3 fw-bold">32</dt>
                    <dd className="fs-sm fw-medium fs-sm fw-medium text-muted mb-0">
                      Emails Sent
                    </dd>
                  </dl>
                  <div className="item item-rounded-lg bg-body-light">
                    <i className="far fa-gem fs-3 text-primary"></i>
                  </div>
                </div>
                <div className="bg-body-light rounded-bottom">
                  <a
                    className="block-content block-content-full block-content-sm fs-sm fw-medium d-flex align-items-center justify-content-between"
                    href="javascript:void(0)"
                  >
                    <span>See Below</span>
                    <i className="fa fa-arrow-alt-circle-down ms-1 opacity-25 fs-base"></i>
                  </a>
                </div>
              </div>
              <div className="block block-rounded d-flex flex-column">
                <div className="block-content block-content-full flex-grow-1 d-flex justify-content-between align-items-center">
                  <dl className="mb-0">
                    <dt className="fs-3 fw-bold">1254</dt>
                    <dd className="fs-sm fw-medium fs-sm fw-medium text-muted mb-0">
                      Recipients
                    </dd>
                  </dl>
                  <div className="item item-rounded-lg bg-body-light">
                    <i className="far fa-user-circle fs-3 text-primary"></i>
                  </div>
                </div>
                <div className="bg-body-light rounded-bottom">
                  <a
                    className="block-content block-content-full block-content-sm fs-sm fw-medium d-flex align-items-center justify-content-between"
                    href="javascript:void(0)"
                  >
                    <span>View all Contacts</span>
                    <i className="fa fa-arrow-alt-circle-right ms-1 opacity-25 fs-base"></i>
                  </a>
                </div>
              </div>
              <div className="block block-rounded d-flex flex-column">
                <div className="block-content block-content-full flex-grow-1 d-flex justify-content-between align-items-center">
                  <dl className="mb-0">
                    <dt className="fs-3 fw-bold">65.7%</dt>
                    <dd className="fs-sm fw-medium fs-sm fw-medium text-muted mb-0">
                      Opened
                    </dd>
                  </dl>
                  <div className="item item-rounded-lg bg-body-light">
                    <i className="far fa-paper-plane fs-3 text-primary"></i>
                  </div>
                </div>
                <div className="bg-body-light rounded-bottom">
                  <a
                    className="block-content block-content-full block-content-sm fs-sm fw-medium d-flex align-items-center justify-content-between"
                    href="javascript:void(0)"
                  >
                    <span>View all messages</span>
                    <i className="fa fa-arrow-alt-circle-right ms-1 opacity-25 fs-base"></i>
                  </a>
                </div>
              </div>
              <div className="block block-rounded d-flex flex-column">
                <div className="block-content block-content-full flex-grow-1 d-flex justify-content-between align-items-center">
                  <dl className="mb-0">
                    <dt className="fs-3 fw-bold">4.9%</dt>
                    <dd className="fs-sm fw-medium fs-sm fw-medium text-muted mb-0">
                      Clicked
                    </dd>
                  </dl>
                  <div className="item item-rounded-lg bg-body-light">
                    <i className="fa fa-chart-bar fs-3 text-primary"></i>
                  </div>
                </div>
                <div className="bg-body-light rounded-bottom">
                  <a
                    className="block-content block-content-full block-content-sm fs-sm fw-medium d-flex align-items-center justify-content-between"
                    href="javascript:void(0)"
                  >
                    <span>View statistics</span>
                    <i className="fa fa-arrow-alt-circle-right ms-1 opacity-25 fs-base"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="block block-rounded">
            <div className="block-header block-header-default">
              <h3 className="block-title">Sending Logs</h3>
              <div className="block-options space-x-1">
                <button
                  type="button"
                  className="btn btn-sm btn-alt-secondary"
                  data-toggle="class-toggle"
                  data-target="#one-dashboard-search-orders"
                  data-className="d-none"
                >
                  <i className="fa fa-search"></i>
                </button>
                <div className="dropdown d-inline-block">
                  <button
                    type="button"
                    className="btn btn-sm btn-alt-secondary"
                    id="dropdown-recent-orders-filters"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-fw fa-flask"></i>
                    Filters
                    <i className="fa fa-angle-down ms-1"></i>
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-md dropdown-menu-end fs-sm"
                    aria-labelledby="dropdown-recent-orders-filters"
                  >
                    <a
                      className="dropdown-item fw-medium d-flex align-items-center justify-content-between"
                      href="javascript:void(0)"
                    >
                      API
                      <span className="badge bg-primary rounded-pill">20</span>
                    </a>
                    <a
                      className="dropdown-item fw-medium d-flex align-items-center justify-content-between"
                      href="javascript:void(0)"
                    >
                      SMTP
                      <span className="badge bg-primary rounded-pill">72</span>
                    </a>
                    <a
                      className="dropdown-item fw-medium d-flex align-items-center justify-content-between"
                      href="javascript:void(0)"
                    >
                      All
                      <span className="badge bg-primary rounded-pill">997</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="one-dashboard-search-orders"
              className="block-content border-bottom d-none"
            >
              <form
                action="be_pages_dashboard.html"
                method="POST"
                onsubmit="return false;"
              >
                <div className="push">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-alt"
                      id="one-ecom-orders-search"
                      name="one-ecom-orders-search"
                      placeholder="Search all orders.."
                    />
                    <span className="input-group-text bg-body border-0">
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
                </div>
              </form>
            </div>
            <div className="block-content block-content-full">
              <div className="table-responsive">
                <table className="table table-hover table-vcenter">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th className="d-none d-xl-table-cell">Recipients</th>
                      <th>Medium</th>
                      <th className="d-none d-sm-table-cell text-center">
                        Event
                      </th>
                      <th className="d-none d-sm-table-cell text-end">Date</th>
                      <th className="d-none d-sm-table-cell text-end">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="fs-sm">
                    <tr>
                      <td>
                        <a className="fw-semibold" href="javascript:void(0)">
                          ORD.00925{" "}
                        </a>
                        <p className="fs-sm fw-medium text-muted mb-0">
                          Premium
                        </p>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <a className="fw-semibold" href="javascript:void(0)">
                          Thomas Riley
                        </a>
                        <p className="fs-sm fw-medium text-muted mb-0">
                          Product Designer
                        </p>
                      </td>
                      <td>
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">
                          API
                        </span>
                      </td>
                      <td className="d-none d-sm-table-cell text-center">
                        <strong>Purchase</strong>
                      </td>
                      <td className="d-none d-sm-table-cell fw-semibold text-muted text-end">
                        22 min ago
                      </td>
                      <td className="d-none d-sm-table-cell text-end">
                        <strong>$1589,75</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a className="fw-semibold" href="javascript:void(0)">
                          ORD.00924{" "}
                        </a>
                        <p className="fs-sm fw-medium text-muted mb-0">
                          Premium
                        </p>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <a className="fw-semibold" href="javascript:void(0)">
                          Barbara Scott
                        </a>
                        <p className="fs-sm fw-medium text-muted mb-0">
                          Web developer
                        </p>
                      </td>
                      <td>
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          SMTP
                        </span>
                      </td>
                      <td className="d-none d-sm-table-cell text-center">
                        <strong>Register</strong>
                      </td>
                      <td className="d-none d-sm-table-cell fw-semibold text-muted text-end">
                        28 min ago
                      </td>
                      <td className="d-none d-sm-table-cell text-end">
                        <strong>$2121,92</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a className="fw-semibold" href="javascript:void(0)">
                          ORD.00923{" "}
                        </a>
                        <p className="fs-sm fw-medium text-muted mb-0">
                          Premium
                        </p>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <a className="fw-semibold" href="javascript:void(0)">
                          Carol Ray
                        </a>
                        <p className="fs-sm fw-medium text-muted mb-0">
                          Application Manager
                        </p>
                      </td>
                      <td>
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          SMTP
                        </span>
                      </td>
                      <td className="d-none d-sm-table-cell text-center">
                        <strong>Login</strong>
                      </td>
                      <td className="d-none d-sm-table-cell fw-semibold text-muted text-end">
                        22 min ago
                      </td>
                      <td className="d-none d-sm-table-cell text-end">
                        <strong>$1337,26</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a className="fw-semibold" href="javascript:void(0)">
                          ORD.00922{" "}
                        </a>
                        <p className="fs-sm fw-medium text-muted mb-0">
                          Premium
                        </p>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <a className="fw-semibold" href="javascript:void(0)">
                          Wayne Garcia
                        </a>
                        <p className="fs-sm fw-medium text-muted mb-0">
                          Digital Nomad
                        </p>
                      </td>
                      <td>
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-info-light text-info">
                          SMTP
                        </span>
                      </td>
                      <td className="d-none d-sm-table-cell text-center">
                        <strong>Login</strong>
                      </td>
                      <td className="d-none d-sm-table-cell fw-semibold text-muted text-end">
                        3 min ago
                      </td>
                      <td className="d-none d-sm-table-cell text-end">
                        <strong>$1578,98</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a className="fw-semibold" href="javascript:void(0)">
                          ORD.00921{" "}
                        </a>
                        <p className="fs-sm fw-medium text-muted mb-0">
                          Premium
                        </p>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <a className="fw-semibold" href="javascript:void(0)">
                          Betty Kelley
                        </a>
                        <p className="fs-sm fw-medium text-muted mb-0">
                          Application Manager
                        </p>
                      </td>
                      <td>
                        <span className="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-warning-light text-warning">
                          API
                        </span>
                      </td>
                      <td className="d-none d-sm-table-cell text-center">
                        <strong>Purchase</strong>
                      </td>
                      <td className="d-none d-sm-table-cell fw-semibold text-muted text-end">
                        16 min ago
                      </td>
                      <td className="d-none d-sm-table-cell text-end">
                        <strong>$567,80</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="block-content block-content-full bg-body-light">
              <nav aria-label="Photos Search Navigation">
                <ul className="pagination pagination-sm justify-content-end mb-0">
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="javascript:void(0)"
                      tabindex="-1"
                      aria-label="Previous"
                    >
                      Prev
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="javascript:void(0)">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0)">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0)">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0)">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="javascript:void(0)"
                      aria-label="Next"
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default TransactionalStats;
