import React, { useState, useEffect } from "react";
import Header from "./Header";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import LineChart from "./LineChart";

import slc from "./module/statsLinechart.json";
import axios from "axios";
import Cookies from "js-cookie";
import InfoCard from "./InfoCard";
import CampaignItem from "./CampaignItem";
import data from "./module/dashbord.json";
function Statistics(props) {
  const chartData = {
    data: {
      labels: [], // Replace with indexes
      datasets: [
        {
          label: "delivery Rates",
          data: [],
          borderColor: ["rgba(255,0,0,0.9)"],
          pointBorderColor: ["rgba(255,206,86,0.5)"],
          pointBackgroundColor: ["rgba(0,0,0,1)"],
        },
        {
          label: "opening Rates",
          data: [],
          borderColor: ["rgba(200,220,20,0.9)"],
          pointBorderColor: ["rgba(255,206,86,0.2)"],
          pointBackgroundColor: ["rgba(0,0,0,1)"],
        },
        {
          label: " conversionRates",
          data: [],
          borderColor: ["rgba(160,220,20,0.9)"],
          pointBorderColor: ["rgba(215,206,86,0.2)"],
          pointBackgroundColor: ["rgba(0,0,0,1)"],
        },
        {
          label: " Unsubscription Rates",
          data: [],
          borderColor: ["rgba(120,220,20,0.9)"],
          pointBorderColor: ["rgba(175,206,86,0.2)"],
          pointBackgroundColor: ["rgba(0,0,0,1)"],
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "click through rate",
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Campaings",
          },
        },
        y: {
          title: {
            display: true,
            text: "(numbers)",
          },
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 1000,
            stepSize: 100,
          },
        },
      },
    },
  };
  const [loading, setLoading] = useState(false);
  const toggle = props.toggle;
  const mode = props.mode;
  const arr = data.rows;
  const [fdate, setFdate] = useState("");
  const [tdate, setTdate] = useState("");
  const [campaign, setCampaign] = useState([]);
  const [stats, setStats] = useState({});

  if (campaign.length !== 0) {
    campaign.forEach((x, index) => {
      const statistics = x.campaign_statistics;
      chartData.data.datasets[0].data.push(statistics.delivery_rate + 10);
      chartData.data.datasets[1].data.push(statistics.opening_rate + 13);
      chartData.data.datasets[2].data.push(statistics.conversion_rate + 99);
      chartData.data.datasets[3].data.push(statistics.unsubscription_rate + 88);
      chartData.data.labels.push(index + 1); // Adding 1 to index to start from 1
    });
  }

  const handleOnClick = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://apis.mailmort.co/campaigns/campaignstats",
        {
          from_date: fdate,
          to_date: tdate,
        },
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        }
      );

      setCampaign(response.data.campaigns);
      setStats(response.data.statistics);
    } catch (error) {
      console.log("errror while fetching campaigns", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="page-container" className={mode}>
      <Navigationbar onClickHandler={toggle} />

      <Header />
      {loading && (
        <div
          className="spinner-border fixed bg-white z-[100] ml-[35%] mt-[25%]"
          role="status"
        ></div>
      )}
      <main id="main-container" className={`${loading ? "blur-md " : " "} `}>
        <div className="bg-body-light">
          <div className="content content-full">
            <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
              <div className="flex-grow-1">
                <h1 className="h3 fw-bold mb-2">Campaign Statistics</h1>
                <h2 className="fs-base lh-base fw-medium text-muted mb-0">
                  Analyse the statisctics of multiple campaigns
                </h2>
              </div>
              <nav
                className="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3"
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb breadcrumb-alt">
                  <li className="breadcrumb-item">
                    <a className="link-fx" href="#">
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
          {/*  <!-- For more info and examples you can check out https://github.com/eternicode/bootstrap-datepicker --> */}
          <div className="block block-rounded">
            <div className="block-header block-header-default">
              <h3 className="block-title">Select Campaigns</h3>
            </div>
            <div className="block-content block-content-full">
              <h2 className="content-heading border-bottom mb-4 pb-2">
                Date Range
              </h2>
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
                        name="from_date"
                        value={fdate}
                        placeholder="yyyy-mm-dd"
                        data-week-start="1"
                        data-autoclose="true"
                        data-today-highlight="true"
                        onChange={(e) => {
                          setFdate(e.target.value);
                        }}
                      />
                      <span className="input-group-text fw-semibold">
                        <i className="fa fa-fw fa-arrow-right"></i>
                      </span>

                      <input
                        type="text"
                        className="form-control"
                        id="example-daterange2"
                        name="to_date"
                        value={tdate}
                        onChange={(e) => {
                          setTdate(e.target.value);
                        }}
                        placeholder="yyyy-mm-dd"
                        data-week-start="1"
                        data-autoclose="true"
                        data-today-highlight="true"
                      />
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          handleOnClick();
                        }}
                      >
                        get campiagn
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
                <div className="block-content block-content-full text-center ">
                  <div className="col-xxl-9 d-flex">
                    <div className="card border-0 flex-fill w-100  ">
                      <div className=" group card-header border-4card-header-space-between ">
                        <h2 className="card-header-title h4 text-uppercase">
                          heading
                        </h2>
                        <div className="top-0 chart-container bg-white  group-hover:mt-10 transition-all duration-300">
                          <LineChart
                            data={chartData.data}
                            option={chartData.options}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <InfoCard
                num={stats.recipients}
                des="Recipients"
                li="See Below"
                symbol="far fa-gem fs-3 text-primary"
              />
              <InfoCard
                num={stats.delivery_rate}
                des="Delivery_rate"
                li="View all Contacts"
                symbol="far fa-user-circle fs-3 text-primary"
              />
              <InfoCard
                num={stats.opening_rate}
                des="Opening Rate"
                li="View all messages"
                symbol="far fa-paper-plane fs-3 text-primary"
              />
              <InfoCard
                num={stats.conversion_rate}
                des="Conversion Rate"
                li="View statistics"
                symbol="fa fa-chart-bar fs-3 text-primary"
              />
              <InfoCard
                num={stats.unsubscription_rate}
                des="Unsubscription Rate"
                li="View statistics"
                symbol="fa fa-chart-bar fs-3 text-primary"
              />
            </div>
          </div>

          <div className="block block-rounded">
            <div className="block-header block-header-default">
              <h3 className="block-title">Campaigns</h3>
              <div className="block-options space-x-1">
                <button
                  type="button"
                  className="btn btn-sm btn-alt-secondary"
                  data-toggle="class-toggle"
                  data-target="#one-dashboard-search-orders"
                  data-classname="d-none"
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
                      href="#"
                    >
                      Pending
                      <span className="badge bg-primary rounded-pill">20</span>
                    </a>
                    <a
                      className="dropdown-item fw-medium d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      Active
                      <span className="badge bg-primary rounded-pill">72</span>
                    </a>
                    <a
                      className="dropdown-item fw-medium d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      Completed
                      <span className="badge bg-primary rounded-pill">890</span>
                    </a>
                    <a
                      className="dropdown-item fw-medium d-flex align-items-center justify-content-between"
                      href="#"
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
                onSubmit={() => {}}
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
                      <th>#</th>
                      <th className="d-none d-xl-table-cell">CAMPAIGN NAME</th>
                      <th>Status</th>
                      <th className="d-none d-sm-table-cell text-center">
                        NO OF RECEPICIENTS
                      </th>
                      <th className="d-none d-sm-table-cell text-end">
                        CREATED AT
                      </th>
                      <th className="d-none d-sm-table-cell text-end">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="fs-sm">
                    {campaign.map((x, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <a className="fw-semibold" href="#">
                              {index + 1}{" "}
                            </a>
                          </td>
                          <td className="d-none d-xl-table-cell">
                            <a className="fw-semibold" href="#">
                              {x.campaign_name}
                            </a>
                            <p className="fs-sm fw-medium text-muted mb-0">
                              <span className=" text-slate-900">
                                Subject :{" "}
                              </span>
                              {x.subject}
                            </p>
                          </td>
                          <td>
                            <span
                              className={`fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-${"success"}`}
                            >
                              {x.status}
                            </span>
                          </td>
                          <td className="d-none d-sm-table-cell">
                            <div className="flex flex-row justify-center">
                              {x.mails.length}
                            </div>
                          </td>
                          <td className="d-none d-sm-table-cell fw-semibold text-muted text-end">
                            {x.createdAt.substring(0, 10)}
                          </td>
                          <td className="d-none d-sm-table-cell text-end">
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn btn-sm btn-alt-secondary"
                                data-bs-toggle="tooltip"
                                title="Edit Client"
                                onClick={() => {}}
                              >
                                <i className="fa fa-fw fa-pencil-alt"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-alt-secondary"
                                data-bs-toggle="tooltip"
                                title="Remove Client"
                                onClick={() => {}}
                              >
                                <i className="fa fa-fw fa-times"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
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
                      href="#"
                      tabIndex="-1"
                      aria-label="Previous"
                    >
                      Prev
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
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

export default Statistics;
