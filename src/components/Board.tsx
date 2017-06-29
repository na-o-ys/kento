import * as React from "react"
import MainBoard from "./board/MainBoard"
import Hand from "./board/Hand"
import VHand from "./board/VHand"
import { Position } from "../lib/game"
import { Style } from "../types"

type BoardProps = {
    position: Position,
    verticalHand?: boolean,
    style?: Style,
    scale?: number
}

export const Board = ({ position, verticalHand = true, style = {}, scale = 1 }: BoardProps) => {
    if (verticalHand) return (
        <div style={{ ...vBoardStyle(scale), ...style }}>
            <VHand color="white" hands={position.white_hand} scale={scale} />
            <MainBoard cells={position.cells} highlightCell={position.movedCell} scale={scale} />
            <VHand color="black" hands={position.black_hand} scale={scale} />
        </div>
    )
    else return (
        <div style={{ ...boardStyle(scale), ...style }}>
            <WhiteHand hands={position.white_hand} scale={scale} />
            <MainBoard cells={position.cells} highlightCell={position.movedCell} scale={scale} style={mainBoardStyle} />
            <BlackHand hands={position.black_hand} scale={scale} />
        </div>
    )
}

export default Board

const boardStyle = scale => ({
    height: scale * 454,
    width: scale * 500
})

const vBoardStyle = scale => ({
    height: scale * 500,
    width: scale * 410
})

const WhiteHand = ({ hands, scale }) => (
    <div style={handWrapperStyle(scale)}>
        <Hand color="white" hands={hands} scale={scale} />
    </div>
)

const BlackHand = ({ hands, scale }) => (
    <div style={handWrapperStyle(scale)}>
        <Hand color="black" hands={hands} scale={scale} style={blackHandStyle} />
    </div>
)

const blackHandStyle = {
    bottom: 0,
    position: "absolute"
}

const mainBoardStyle = {
    float: "left"
}

const handWrapperStyle: (number) => React.CSSProperties = scale => ({
    position: "relative",
    float: "left",
    height: scale * 454,
    width: scale * 45
})
