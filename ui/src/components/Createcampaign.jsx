import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigationbar from "./Navigationbar";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import Cookies from "js-cookie";
import { Buffer } from "buffer";
function Createcampaign(props) {
  const location = useLocation();
  console.log(location);
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  console.log("id: ", id);
  const toggle = props.toggle;
  const mode = props.mode;
  const [cname, setCname] = useState("");
  const [senderEmail, setSenderEmail] = useState(""); // Assuming '1' is the default value
  const [senders, setSenders] = useState([]);
  const [mailList, setMailList] = useState([]);
  const [subjectLine, setSubjectLine] = useState("");
  const [previewText, setPreviewText] = useState("");
  const [text, setText] = useState("Hello CKEditor!");
  const [loading, setLoading] = useState(false);
  if (id) {
    const handleEdit = async (id) => {
      try {
        const response = await axios.get(
          "https://apis.mailmort.co/campaigns/" + id,
          {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
          }
        );
        var t = response.data;
        setCname(response.data.campaign_name);
        setSenderEmail(response.data.sender_email);
        setPreviewText(t.preview_text);
        setSubjectLine(t.subject);
        setText(t.content);
      } catch (error) {
        console.log("Error while fetching ", error);
      }
    };
    handleEdit(id);
  }
  const handleSaveDraft = async (p) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://apis.mailmort.co/campaigns",
        {
          campaign_name: cname,
          sender_email: senderEmail,
          mailing_lists: mailList,
          subject: subjectLine,
          preview_text: previewText,
          email_content: Buffer.from(text).toString("base64"),
          action: p,
        },
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        }
      );
      console.log("response send successfully from create campign");
    } catch (error) {
      console.log("error while sending create caimpaign", error);
    } finally {
      setLoading(false); // Set loading state to false after the request completes
    }
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleSubjectLineChange = (event) => {
    setSubjectLine(event.target.value);
  };

  // Event handler for preview text input change
  const handlePreviewTextChange = (event) => {
    setPreviewText(event.target.value);
  };
  // Event handler for when the select value changes
  const handleSelectChange = (event) => {
    setSenderEmail(event.target.value);
  };

  useEffect(() => {
    const fetchSenders = async () => {
      try {
        const response = await axios.get(
          "https://apis.mailmort.co/users/senders",
          {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
          }
        );

        setSenders(response.data.senders);
        const response2 = await axios.get(
          "https://apis.mailmort.co/contacts/lists",
          {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
          }
        );
        setMailList(response2.data.mailing_lists);
      } catch (error) {
        console.log("errror while fetching ", error);
      }
    };
    fetchSenders();
    //console.log(senders);
  }, []);
  const [list, setList] = useState([]);

  // Event handler for when the select value changes
  const handleListSelectChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setList(selectedOptions);
  };
  return (
    <div id="page-container" className={mode}>
      <Navigationbar onClickHandler={toggle} />

      <Header />

      <main id="main-container">
        <div className="bg-body-light">
          <div className="content content-full">
            <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2">
              <div className="flex-grow-1">
                <h1 className="h3 fw-bold mb-2">Create an email campaign</h1>
                <h2 className="fs-base lh-base fw-medium text-muted mb-0">
                  Keep subscribers engaged by sharing your latest news,
                  promoting your bestselling products, or announcing an upcoming
                  event.
                </h2>
              </div>
              <nav
                className="flex-shrink-0 mt-3 mt-sm-0 ms-sm-3"
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb breadcrumb-alt">
                  <li className="breadcrumb-item">
                    <a className="link-fx" href="#">
                      Forms
                    </a>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Editors
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div className="content">
          <h2 className="content-heading">CKEditor</h2>

          <div className="block block-rounded">
            <div className="block-header block-header-default">
              <h3 className="block-title">Campaign Settings</h3>
            </div>
            <div className="block-content block-content-full">
              <div className="row push">
                <div className="col-lg-4">
                  <p className="fs-sm text-muted">
                    The most basic details for the all-new campaign
                  </p>
                </div>
                <div className="col-lg-8 col-xl-5">
                  <div className="mb-4">
                    <label className="form-label" htmlFor="example-text-input">
                      Campaign name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="example-text-input"
                      name="Cname"
                      value={cname}
                      placeholder="campaign name"
                      onChange={(e) => {
                        setCname(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="block block-rounded">
            <div className="block-header block-header-default">
              <h3 className="block-title">Sender</h3>
            </div>
            <div className="block-content block-content-full">
              <form
                action="be_forms_elements.html"
                method="POST"
                encType="multipart/form-data"
                onSubmit={() => {}}
              >
                <div className="row push">
                  <div className="col-lg-4">
                    <p className="fs-sm text-muted">
                      The most often used inputs you know and love
                    </p>
                  </div>
                  <div className="col-lg-8 col-xl-5">
                    <div className="mb-4">
                      <label className="form-label" htmlFor="example-select">
                        Sender Email
                      </label>
                      <select
                        className="form-select"
                        id="example-select"
                        name="example-select"
                        value={senderEmail}
                        onChange={handleSelectChange}
                      >
                        <option key={11000}>select</option>
                        {senders.map((x, index) => {
                          return (
                            <option key={index} value={x.sender_email}>
                              {x.sender_email}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="block block-rounded">
            <div className="block-header block-header-default">
              <h3 className="block-title">Recipients</h3>
            </div>
            <div className="block-content block-content-full">
              <form onSubmit={() => {}}>
                <div className="row push">
                  <div className="col-lg-4">
                    <p className="fs-sm text-muted">
                      The most often used inputs you know and love
                    </p>
                  </div>
                  <div className="col-lg-8 col-xl-5">
                    <div className="mb-4">
                      <label
                        className="form-label"
                        htmlFor="example-select-multiple"
                      >
                        Select mailing list(s)
                      </label>
                      <select
                        className="form-select"
                        id="example-select-multiple"
                        name="example-select-multiple"
                        size="5"
                        multiple
                        value={list}
                        onChange={handleListSelectChange}
                      >
                        {mailList.map((x, index) => {
                          return (
                            <option key={index + 1} value={x}>
                              {x}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="block block-rounded">
            <div className="block-header block-header-default">
              <h3 className="block-title">Subject</h3>
            </div>
            <div className="block-content block-content-full">
              <form
                action="be_forms_elements.html"
                method="POST"
                encType="multipart/form-data"
                onSubmit={() => {}}
              >
                <div className="row push">
                  <div className="col-lg-4">
                    <p className="fs-sm text-muted">
                      The most often used inputs you know and love
                    </p>
                  </div>
                  <div className="col-lg-8 col-xl-5">
                    <div className="mb-4">
                      <label
                        className="form-label"
                        htmlFor="example-text-input"
                      >
                        Subject line
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="example-text-input"
                        name="example-text-input"
                        placeholder="Text Input"
                        value={subjectLine}
                        onChange={handleSubjectLineChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="form-label"
                        htmlFor="example-email-input"
                      >
                        Preview text
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="example-text-input"
                        name="example-text-input"
                        placeholder="Text Input"
                        value={previewText}
                        onChange={handlePreviewTextChange}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="block block-rounded">
            <div className="block-header block-header-default">
              <h3 className="block-title">Email Content</h3>
            </div>
            <div className="block-content">
              <div className="mb-4 ">
                <textarea
                  id="js-ckeditor"
                  name="ckeditor"
                  className="w-[100%] bg-slate-100 focus:bg-slate-50 "
                  placeholder="Enter text here..."
                  value={text}
                  onChange={handleChange}
                >
                  Hello CKEditor!
                </textarea>
              </div>
            </div>
          </div>

          <div className="block block-rounded">
            <div className="block-header block-header-default">
              <h3 className="block-title">Final Actions</h3>
            </div>
            <div className="block-content text-center">
              <div className="mb-4">
                <p className="fs-sm text-muted">
                  Save the campaign as draft to continue at some later time.
                </p>
                <button
                  type="button"
                  className="btn btn-outline-success me-1 mb-3"
                  onClick={() => {
                    handleSaveDraft("draft");
                  }}
                  disabled={loading}
                >
                  <i className="fa fa-fw fa-save me-1"></i> Save as draft
                </button>
              </div>

              <div className="mb-4">
                <p className="fs-sm text-muted">
                  Send test-mails to preview the campaign.
                </p>
                <button
                  type="button"
                  className="btn btn-alt-success me-1 mb-3"
                  onClick={() => {
                    handleSaveDraft("test");
                  }}
                >
                  <i className="fa fa-fw fa-paper-plane me-1"></i> Send test
                  mails
                </button>
                {loading && (
                  <div className="flex items-center justify-center">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <p className="fs-sm text-muted">
                  Schedule the campaign to be sent now.
                </p>
                <button
                  type="button"
                  className="btn btn-success me-1 mb-3"
                  onClick={() => {
                    handleSaveDraft("send");
                  }}
                >
                  <i className="fa fa-fw fa-box me-1"></i> Send now
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Createcampaign;
