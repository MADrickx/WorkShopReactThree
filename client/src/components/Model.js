import React from "react";
import {useGLTF} from "@react-three/drei";
import Audric from "../assets/3D-Audric.gltf";

const Model = () => {
    const gltf = useGLTF(Audric);

    return (
        <>
            <primitive object={gltf.scene} dispose={null} />
        </>
    );
};

export default Model;
