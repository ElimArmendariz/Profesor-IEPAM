import React from "react";
import "./UnityFrame.css";

import Unity, { UnityContext } from "react-unity-webgl";
import HeaderUser from "../HeaderUser";

const unityContext = new UnityContext({
    loaderUrl: "build/Slides.loader.js",
    dataUrl: "build/Slides.data",
    frameworkUrl: "build/Slides.framework.js",
    codeUrl: "build/Slides.wasm",
  });

const UnityFrame = () =>  {
    return( 
        <>
            <HeaderUser/>
            <div className="unity-container">
                <Unity className="unity-canvas" unityContext={unityContext} />
            </div>
        </>
    )
};

export default UnityFrame;




