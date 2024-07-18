import React, { useMemo, useRef } from "react";
import { cn } from "@/utils/cn";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  oppacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: {
  /**
   * 0.1 - slower
   * 0.5 - normal
   * 1 - faster
   **/
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize: number;
  showGradient?: boolean;
}) => {
  return (
    <div className={cn("h-full relative bg-white w-full", containerClassName)}>
      <div className="h-full w-full">
        <DotMatrix></DotMatrix>
      </div>
    </div>
  );
};

export default CanvasRevealEffect;
