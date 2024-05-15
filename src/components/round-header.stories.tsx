import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import RoundHeader from "./round-header";

const meta: Meta<typeof RoundHeader> = {
    component: RoundHeader,
};
export default meta;

type Story = StoryObj<typeof RoundHeader>;

export const Primary: Story = {
    args: {
        x: 100,
        y: 100,
        width: 200,
        roundHeader: {
            isShown: true,
            height: 35,
            marginBottom: 10,
            fontSize: 12,
            backgroundColor: "white",
        },
        canvasPadding: 0,
        headerText: "Round 1",
    },
    render: (args) => {
        return (
            <svg>
                <RoundHeader {...args} />
            </svg>
        );
    },
};
