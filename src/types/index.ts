export interface GameControl {
    setTurn(turn: number): void
}

export type Style = { [key: string]: string | number }

export namespace JsonKifuFormat {
    export type Color = boolean;

    export interface PlaceFormat {
        x: number;
        y: number;
    }

    export interface MoveFormat {
        comments?: string[];
        move?: MoveMoveFormat;
        time?: {
            now: TimeFormat;
            total: TimeFormat;
        };
        special?: string;
        forks?: MoveFormat[][];
    }

    export interface TimeFormat {
        h?: number;
        m: number;
        s: number;
    }

    interface StateFormat {
        color: Color;
        board: { color?: Color; kind?: string; }[][];
        hands: { [index: string]: number }[];
    }

    interface MoveMoveFormat {
        color: Color;
        from?: PlaceFormat;
        to?: PlaceFormat;
        piece: string;
        same?: boolean;
        promote?: boolean;
        capture?: string;
        relative?: string;
    }

    interface JSONKifuFormat {
        header: { [index: string]: string; };
        initial?: {
            preset: string;
            data?: StateFormat;
        };
        moves: MoveFormat[];
    }
}
