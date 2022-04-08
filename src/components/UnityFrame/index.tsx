import React from "react";
import "./UnityFrame.css";

import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "build/Slides.loader.js",
    dataUrl: "build/Slides.data",
    frameworkUrl: "build/Slides.framework.js",
    codeUrl: "build/Slides.wasm",
  });

const UnityFrame = () =>  {
    return( 
        <div className="unity-container">
            <Unity className="unity-canvas" unityContext={unityContext} />
        </div>
    )
};

export default UnityFrame;




