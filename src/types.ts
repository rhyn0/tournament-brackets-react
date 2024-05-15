import type { ReactElement } from "react";

export const MatchStates = {
    "played": "PLAYED",
    "no-show": "NO_SHOW",
    "done": "DONE",
    "walk-over": "WALK_OVER",
} as const;
export type MatchStateV = (typeof MatchStates)[keyof typeof MatchStates];

export interface Participant {
    id: string | number;

    isWinner?: boolean;

    name?: string;

    resultText?: string | null;

    [key: string]: any;
}

export interface RoundHeaderOptions {
    isShown?: boolean;
    height?: number;
    marginBottom?: number;
    fontSize?: number;
    fontColor?: string;
    backgroundColor?: string;
    fontFamily?: string;
}

export interface Match {
    id: number | string;

    /** Link to this match. While onClick() can be used, providing an href
          better supports opening a new tab, or copying a link. * */
    href?: string;

    name: string;

    nextMatchId: number | string | null;

    nextLooserMatchId?: number | string;

    tournamentRoundText?: string;

    startTime: string;

    state: MatchStateV;

    participants: [Participant, Participant];

    [key: string]: any;
}

export interface CommonTreeProps {
    svgWrapper?: (props: {
        bracketWidth: number;
        bracketHeight: number;
        startAt: number[];
        children: ReactElement;
    }) => ReactElement;
}

export interface MatchComponentProps {
    match: Match;

    onMatchClick: (args: {
        match: Match;
        topWon: boolean;
        bottomWon: boolean;
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>;
    }) => void;

    onPartyClick: (party: Participant, partyWon: boolean) => void;

    onMouseEnter: (partyId: string | number) => void;

    onMouseLeave: () => void;

    topParty: Participant | undefined;

    bottomParty: Participant | undefined;

    topWon: boolean;

    bottomWon: boolean;

    topHovered: boolean;

    bottomHovered: boolean;

    topText: string;

    bottomText: string;

    connectorColor?: string;

    teamNameFallback: string;

    resultFallback: (participant: Participant) => string;
}

export interface BracketLeaderboardProps extends CommonTreeProps {
    render: (props: MatchComponentProps) => React.ReactNode;

    currentRound?: string;

    onMatchClick?: (args: {
        match: Match;
        topWon: boolean;
        bottomWon: boolean;
    }) => void;

    onPartyClick?: (party: Participant, partyWon: boolean) => void;
}

export interface TBracketSnippet {
    currentMatch: Match;
    previousTopMatch: Match | undefined;
    previousBottomMatch: Match | undefined;
}

export interface CanvasPosition {
    x: number;
    y: number;
}
