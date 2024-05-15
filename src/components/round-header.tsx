import React from "react";
import { RoundHeaderOptions } from "../types";

export interface RoundHeaderProps {
    x: number;
    y?: number;
    width: number;
    roundHeader: RoundHeaderOptions;
    canvasPadding: number;
    headerText: string;
}

export default function RoundHeader({
    x,
    y = 0,
    width,
    roundHeader,
    canvasPadding,
    headerText,
}: RoundHeaderProps) {
    return (
        <g>
            <rect
                x={x}
                y={y + canvasPadding}
                width={width}
                height={roundHeader.height}
                fill={roundHeader.backgroundColor}
                rx="3"
                ry="3"
                className="tbr-fill-[#2F3648]"
            />
            <text
                className="tbr-font-mono tbr-text-lg tbr-text-white"
                x={x + width / 2}
                y={y + canvasPadding + (roundHeader.height ?? 100) / 2}
                fill="currentColor"
                dominantBaseline="middle"
                textAnchor="middle"
            >
                {headerText}
            </text>
        </g>
    );
}
