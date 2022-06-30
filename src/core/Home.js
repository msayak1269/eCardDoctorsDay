import { useState } from "react";
import jbLogo from "../img/jbLogo.jpg";
import tagLine from "../img/tagLine.png";
import stetho from "../img/stetho.jpg";
import dummyDp from "../img/dummyDp.jpg";

const Home = () => {
  const [name, setName] = useState("Dr Name");
  const [image, setImage] = useState(null);
  const [flagForDp, setFlag] = useState(false);
  const handleName = (e) => {
    if (e.target.value) {
      setName(e.target.value);
    } else {
      setName("Your Name");
    }
  };
  const handleImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setFlag(true);
    }
  };
  const ImageThumb = ({ image }) => {
    return (
      <img
        src={URL.createObjectURL(image)}
        alt={image.name}
        style={{
          height: "16vh",
          width: "16vh",
          overflow: "hidden",
          // borderBottomLeftRadius: "50% 50%",
          // borderBottomRightRadius: "50% 50%",
          // borderTopLeftRadius: "50% 50%",
          // borderTopRightRadius: "50% 50%",
          border: "2px solid red",
          borderRadius: "50%",
        }}
      />
    );
  };
  const renderDp = () => {
    if (flagForDp) {
      return <ImageThumb image={image} />;
    } else {
      return (
        <img
          src={dummyDp}
          alt=""
          style={{
            height: "16vh",
            width: "16vh",
            border: "2px solid red",
            borderRadius: "50%",
          }}
        />
      );
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div
        className="container justified-content-center"
        style={{
          backgroundColor: "white",
          height: "100vh",
          border: "",
          padding: "5%",
          // margin: "0",
        }}
      >
        <div
          className="card mx-auto"
          style={{
            width: "auto",
            border: "2px solid #00FFAB",
            boxShadow: "0px 0px 15px -5px slategray",
            borderBottomWidth: "5px",
            borderTopWidth: "5px",
            borderRadius: "20px",
          }}
        >
          <div className="card-header">
            <div
              style={{
                float: "left",
                width: "50%",
              }}
            >
              <img
                src={jbLogo}
                alt="logo"
                style={{
                  height: "10vh",
                  width: "10vh",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div
              style={{
                float: "right",
                width: "50%",
                textAlign: "center",
              }}
            >
              <img
                src={tagLine}
                alt=""
                style={{
                  height: "5vh",
                  width: "12vh",
                  marginTop: "4vh",
                  marginRight: "1vh",
                }}
              />
            </div>
          </div>
          <div className="card-body">
            <div>
              <div
                className="text-center"
                style={{
                  float: "left",
                  width: "50%",
                }}
              >
                <img
                  src={stetho}
                  alt=""
                  style={{
                    height: "27vh",
                  }}
                />
              </div>
              <div
                className="text-center"
                style={{
                  float: "right",
                  width: "50%",
                }}
              >
                {/* <img
                  src={dummyDp}
                  style={{
                    height: "16vh",
                    width: "16vh",
                    border: "2px solid red",
                    borderRadius: "50%",
                  }}
                /> */}
                {renderDp()}
                <br />
                <h5 className="m-1">{name}</h5>
              </div>
            </div>
            <div
              className="text-center"
              style={{
                clear: "both",
                //fontFamily: "'Caveat', cursive",
                fontFamily: " 'League Gothic', sans-seri",
                //fontFamily: "'Nunito', sans-serif",
                fontWeight: "700",
                fontSize: "190%",
                color: "green",
              }}
            >
              HAPPY DOCTOR'S DAY
            </div>
          </div>
          <div className="card-footer text-center">
            <div
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "120%",
                //whiteSpace: "nowrap",
              }}
            >
              When there are tears, you are a shoulder.
              <br />
              When there is a pain, you are a medicine..
            </div>
            <div className="mt-2">
              <h2>THANK YOU DOCTORS</h2>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <button
            className="btn btn-primary btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{
              borderRadius: "50px",
              backgroundColor: "#00FFAB",
              color: "black",
            }}
          >
            Generate Your E-Card
          </button>
        </div>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form id="the-form">
                  <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                      onChange={handleName}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Upload Image</label>
                    <input
                      type="file"
                      className="form-control"
                      id="dp"
                      onChange={handleImage}
                    />
                  </div>
                  {/* <button type="submit" class="btn btn-primary">
                    Submit
                  </button> */}
                </form>
              </div>
              <div className="modal-footer justify-content-center">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  style={{
                    borderRadius: "50px",
                  }}
                >
                  Close
                </button>
                <button
                  type=""
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  style={{
                    borderRadius: "50px",
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
