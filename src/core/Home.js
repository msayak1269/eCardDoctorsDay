import jbLogo from "../img/jbLogo.jpg";
import tagLine from "../img/tagLine.png";
import stetho from "../img/stetho.jpg";
import dummyDp from "../img/dummyDp.jpg";

const Home = () => {
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
            width: "100%",
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
                <img
                  src={dummyDp}
                  style={{
                    height: "16vh",
                    width: "16vh",
                    border: "2px solid red",
                    borderRadius: "50%",
                  }}
                />
                <br />
                <h5 className="m-1">Sayak Mukhopadhyay</h5>
              </div>
            </div>
            <div
              className="text-center"
              style={{
                clear: "both",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: "700",
                fontSize: "230%",
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
                fontFamily: "'Nunito', sans-serif",
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
            style={{
              borderRadius: "50px",
              backgroundColor: "#00FFAB",
              color: "black",
            }}
          >
            Generate Your Card
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
