import { useState, useEffect } from "react";
import { calculos } from "./peixeCoords";

export function Peixinho(n1: any) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const [globalCoords, setGlobalCoords] = useState({ x: 670, y: 290 });

  const [peixeCoords, setPeixeCoords] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = (event: { screenX: any; screenY: any }) => {
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  const handleMouseMove = (event: {
    clientX: number;
    target: { offsetLeft: number; offsetTop: number };
    clientY: number;
  }) => {
    setCoords({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
  };

  const peixeMove = () => {
    setPeixeCoords({
      x: calculos(globalCoords.x - 690, globalCoords.y - 350).xFinal,
      y: calculos(globalCoords.x - 690, globalCoords.y - 350).yFinal,
    });
  };

  // const { x, y } = globalCoords;

  const degreesY = peixeCoords.y - (globalCoords.y - 350);
  const degreesX = peixeCoords.x - (globalCoords.x - 690);

  const tan = (Math.atan2(degreesY, degreesX) * 180) / Math.PI;

  console.log(tan);

  const hipotenusa = Math.ceil(Math.sqrt(degreesX ** 2 + degreesY ** 2));

  const { x, y } = coords;

  const style = {
    transform: `translate(${peixeCoords.x}px, ${peixeCoords.y}px) rotate(${tan - 180}deg)`,
  };

  return (
    <header onMouseMove={peixeMove}>
      {/* 👇️ Get mouse coordinates relative to element */}
      <div className="container" onMouseMove={handleMouseMove}>
        <img
          src="\images\peixe-azul.png"
          className="peixinho"
          style={style}
          draggable="false"
        />
      </div>
      <p>
        glub glub: {peixeCoords.x} {globalCoords.x - 690} Y{degreesY} X
        {degreesX} H{hipotenusa}{" "}
        {Math.min(Math.max(Math.ceil(degreesX / degreesY), -360), 360)}
      </p>
    </header>
  );
}
