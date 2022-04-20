import React from "react";
import "./UnityFrame.css";

import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "build/SlidesWebTes.loader.js",
    dataUrl: "build/SlidesWebTes.data",
    frameworkUrl: "build/SlidesWebTes.framework.js",
    codeUrl: "build/SlidesWebTes.wasm",
  });

const UnityFrame = () =>  {
    return( 
        <div className="unity-container">
            <Unity className="unity-canvas" unityContext={unityContext} />
        </div>
    )
};

export default UnityFrame;




