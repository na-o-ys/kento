declare module 'json-kifu-format' {
  export = JKFPlayer

  class JKFPlayer {
    kifu: JKFPlayer.JSONKifuFormat;
    static parseKIF(kif: string): JKFPlayer;
    static parse(kif: string): JKFPlayer

    getReadableKifuState(): {kifu:string; forks:string[]}[];
    getMaxTesuu(): number;
    goto(tesuu: number): void;
    getState(): JKFPlayer.StateFormat;
    getMove(): JKFPlayer.MoveMoveFormat;
    getComments(tesuu: number): string[];
  }

  namespace JKFPlayer {
    type Color = boolean;

    interface PlaceFormat{
      x: number;
      y: number;
    }

    interface MoveFormat{
      comments?: string[];
      move?: MoveMoveFormat;
      time?: {
        now: TimeFormat;
        total: TimeFormat;
      };
      special?: string;
      forks?: MoveFormat[][];
    }

    interface TimeFormat{
      h?: number;
      m: number;
      s: number;
    }

    interface StateFormat {
      color: Color;
      board: { color?: Color; kind?: string; }[][];
      hands: {[index:string]: number}[];
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
      header: {[index: string]: string;};
      initial?: {
        preset: string;
        data?: StateFormat;
      };
      moves: MoveFormat[];
    }
  }
}