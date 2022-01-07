import React, {Suspense} from "react";
import styled from "styled-components";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Light from "./Light";
import HtmlCon from "./HtmlCon";

const CanvasContainer = styled.div`
    width: 350px;
    height: 350px;
    background-color: salmon;
    border-radius: 5px;
    overflow: hidden;
    margin: auto;
`;

const Object3D = () => {
    return (
        <CanvasContainer>
            <Canvas
                camera={{
                    position: [0, 0, 5],
                    fov: 50,
                    translateY: -5,
                }}>
                <OrbitControls minDistance={3} maxDistance={10} />
                <Light />
                <Suspense fallback={null}>
                    <HtmlCon />
                </Suspense>
            </Canvas>
        </CanvasContainer>
    );
};

export default Object3D;
