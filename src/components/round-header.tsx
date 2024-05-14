import React from "react";
import { RoundHeaderOptions } from "../types";

export interface RoundHeaderProps {
    x: number;
    y?: number;
    width: number;
    roundHeader: RoundHeaderOptions;
    canvasPadding: number;
    numOfRounds: number;
    tournamentRoundText: string;
    columnIndex: number;
}

// const Text = styled.text`
//     font-family: ${({ theme }) => theme.fontFamily};
//     color: ${({ theme }) => theme.textColor.highlighted};
// `;
// const Rect = styled.rect.attrs(({ theme }) => ({
//     fill: theme.roundHeaders.background,
// }))``;

export default function RoundHeader({
    x,
    y = 0,
    width,
    roundHeader,
    canvasPadding,
    numOfRounds,
    tournamentRoundText,
    columnIndex,
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
                {!roundHeader.roundTextGenerator &&
                    columnIndex + 1 === numOfRounds &&
                    "Final"}
                {!roundHeader.roundTextGenerator &&
                    columnIndex + 1 === numOfRounds - 1 &&
                    "Semi-final"}
                {!roundHeader.roundTextGenerator &&
                    columnIndex + 1 < numOfRounds - 1 &&
                    `Round ${tournamentRoundText}`}
                {roundHeader.roundTextGenerator &&
                    roundHeader.roundTextGenerator(
                        columnIndex + 1,
                        numOfRounds,
                    )}
            </text>
        </g>
    );
}
