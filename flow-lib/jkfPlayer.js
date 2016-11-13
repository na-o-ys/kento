declare module 'json-kifu-format' {
  declare type Color = boolean;
  declare export interface PlaceFormat{
    x: number;
    y: number;
  }
  declare export interface MoveFormat{
    comments?: string[];
    move?: MoveMoveFormat;
    time?: {
      now: TimeFormat;
      total: TimeFormat;
    };
    special?: string;
    forks?: MoveFormat[][];
  }
  declare export interface TimeFormat{
    h?: number;
    m: number;
    s: number;
  }
  declare interface StateFormat {
  	color: Color;
  	board: { color?: Color; kind?: string; }[][];
	  hands: {[index:string]: number}[];
  }
  declare interface MoveMoveFormat {
    color: Color;
    from?: PlaceFormat;
    to?: PlaceFormat;
    piece: string;
    same?: boolean;
    promote?: boolean;
    capture?: string;
    relative?: string;
  }
  declare interface JSONKifuFormat{
    header: {[index: string]: string;};
    initial?: {
      preset: string;
      data?: StateFormat;
    };
    moves: MoveFormat[];
  }
  declare class JKFPlayer {
    kifu: JSONKifuFormat;
    static parseKIF(kif: string): JKFPlayer;
    static parse(kif: string): JKFPlayer;

    getReadableKifuState(): {kifu:string; forks:string[]}[];
    getMaxTesuu(): number;
    goto(tesuu: number): void;
    getState(): StateFormat;
    getMove(): MoveMoveFormat;
    getComments(tesuu: number): string[];
    toJKF(): any;
  }
  declare export default typeof JKFPlayer
}