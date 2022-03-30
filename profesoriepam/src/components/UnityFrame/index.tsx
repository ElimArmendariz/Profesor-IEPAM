import React from "react";
import "./UnityFrame.css";

import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "build/pruebavideo.loader.js",
    dataUrl: "build/pruebavideo.data",
    frameworkUrl: "build/pruebavideo.framework.js",
    codeUrl: "build/pruebavideo.wasm",
  });

const UnityFrame = () =>  {
    return( 
        <div className="unity-container">
            <Unity className="unity-canvas" unityContext={unityContext} />
        </div>
    )
};

export default UnityFrame;




