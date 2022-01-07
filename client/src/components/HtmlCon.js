import {useFrame} from "@react-three/fiber";
import React, {useRef} from "react";
import Model from "./Model";

const HtmlCon = () => {
    const meshRef = useRef(null);
    useFrame(() => (meshRef.current.rotation.y += 0.01));

    return (
        <>
            <mesh
                visible
                ref={meshRef}
                position={[0, -0.75, -1]}
                scale={[5, 5, 5]}>
                <Model />
            </mesh>
        </>
    );
};

export default HtmlCon;
