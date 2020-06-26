import React from "react";
import "./App.css";
import Colorshower from "./Components/Colorshower";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import html2canvas from "html2canvas";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [color1, setColor1] = useState({ color: "", islocked: false });
  const [color2, setColor2] = useState({ color: "", islocked: false });
  const [color3, setColor3] = useState({ color: "", islocked: false });
  const [color4, setColor4] = useState({ color: "", islocked: false });
  const [color5, setColor5] = useState({ color: "", islocked: false });

  const data = {
    model: "default",
  };

  function onmyLockColor(id) {
    if (id === 0) {
      setColor1({ ...color1, islocked: !color1.islocked });
    }
    if (id === 1) {
      setColor2({ ...color2, islocked: !color2.islocked });
    }
    if (id === 2) {
      setColor3({ ...color3, islocked: !color3.islocked });
    }
    if (id === 3) {
      setColor4({ ...color4, islocked: !color4.islocked });
    }
    if (id === 4) {
      setColor5({ ...color5, islocked: !color5.islocked });
    }
  }

  useEffect(() => {
    callGenApi();
    console.log(`
    ██╗  ██╗███████╗██╗     ██╗      ██████╗     ██╗    ██╗ ██████╗ ██████╗ ██╗     ██████╗ 
    ██║  ██║██╔════╝██║     ██║     ██╔═══██╗    ██║    ██║██╔═══██╗██╔══██╗██║     ██╔══██╗
    ███████║█████╗  ██║     ██║     ██║   ██║    ██║ █╗ ██║██║   ██║██████╔╝██║     ██║  ██║
    ██╔══██║██╔══╝  ██║     ██║     ██║   ██║    ██║███╗██║██║   ██║██╔══██╗██║     ██║  ██║
    ██║  ██║███████╗███████╗███████╗╚██████╔╝    ╚███╔███╔╝╚██████╔╝██║  ██║███████╗██████╔╝
    ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝      ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝ 
    
    Hi Geek, 
    I love to be friends with like minded people. Message me, maybe we could help each other.
    Cheers,
    Birvarinder Singh
    mainto: singhbirvarinder@gmail.com
    `);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //calling api for colors
  async function callGenApi() {
    let result = await axios.post(
      "http://colormind.io/api/",
      JSON.stringify(data)
    );
    let colors = result.data.result;

    !color1.islocked &&
      setColor1({
        ...color1,
        color: rgbToHex(colors[0][0], colors[0][1], colors[0][2]),
      });

    !color2.islocked &&
      setColor2({
        ...color2,
        color: rgbToHex(colors[1][0], colors[1][1], colors[1][2]),
      });
    !color3.islocked &&
      setColor3({
        ...color3,
        color: rgbToHex(colors[2][0], colors[2][1], colors[2][2]),
      });
    !color4.islocked &&
      setColor4({
        ...color4,
        color: rgbToHex(colors[3][0], colors[3][1], colors[3][2]),
      });
    !color5.islocked &&
      setColor5({
        ...color5,
        color: rgbToHex(colors[4][0], colors[4][1], colors[4][2]),
      });
  }

  // Function for converting the color to hex
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  // Function for screen shot
  function screenshot() {
    window.scrollTo(0, 0);
    html2canvas(document.querySelector("#colorcontainer"), {
      scrollX: 0,
      scrollY: 0,
    }).then(function (canvas) {
      console.log(canvas);
      var a = document.createElement("a");
      // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
      a.href = canvas
        .toDataURL("image/jpeg")
        .replace("image/jpeg", "image/octet-stream");
      console.log(a.href);
      a.download = "colourpallete.jpg";
      a.click();
    });
  }

  return (
    <div className="App row overflow-hidden">
      <div className="col-md-6 col-sm-12" id="colorcontainer">
        <Colorshower
          color1={color1}
          color2={color2}
          color3={color3}
          color4={color4}
          color5={color5}
          onLockColor={(id) => onmyLockColor(id)}
        />
      </div>
      <div className="col-md-6 col-sm-12 mt-5 d-flex flex-column justify-content-center align-items-center">
        <button
          className="btn btn-primary mb-5"
          onClick={() => callGenApi()}
          style={{
            height: "120px",
            borderRadius: "50%",
            border: "5px solid darkblue",
            width: "120px",
          }}
        >
          GENERATE
        </button>
        <CopyToClipboard
          text={[
            color1.color,
            color2.color,
            color3.color,
            color4.color,
            color5.color,
          ].toString()}
        >
          <button
            className="btn text-white btn-primary mb-5"
            style={{
              height: "100px",
              borderRadius: "50%",
              width: "100px",
              border: "5px solid darkblue",
            }}
            onClick={() => {
              toast.success("copied", {
                autoClose: 1000,
              });
            }}
          >
            COPY
          </button>
        </CopyToClipboard>
        <button
          className="btn text-white btn-primary mb-5"
          onClick={() => screenshot()}
          style={{
            height: "130px",
            borderRadius: "50%",
            width: "130px",
            border: "5px solid darkblue",
          }}
        >
          TAKE SCREENSHOT
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
