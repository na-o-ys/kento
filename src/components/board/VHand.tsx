import * as React from "react"
import Cell from "./Cell"
import { Style } from "../../types"

type Hands = { [key: string]: number }

type VHandProps = {
    hands: Hands,
    color: string,
    style?: Style,
    scale?: number
}

export const VHand = ({ hands, color, style = {}, scale = 1 }: VHandProps) => {
    const pieces = pieceDisplayOrder[color]
        .filter(piece => hands[piece] > 0)
        .map(piece => ({
            piece: color == "black" ? piece : piece.toLowerCase(),
            count: hands[piece]
        }))
    return (
        <div style={{ ...getHandStyle(scale), ...style }}>
            {pieces.map(hand => (
                <Cell key={hand.piece} piece={hand.piece} count={hand.count} scale={scale} style={getCellStyle(color)} />
            ))}
        </div>
    )
}

export default VHand

const getHandStyle = (scale: number) => ({
    width: scale * 390,
    height: scale * 48,
    background: "url('img/ban_dark.png')",
    paddingLeft: scale * 10,
    paddingRight: scale * 10
})

const getCellStyle = (color: string) => ({
    float: color == "black" ? "left" : "right"
})

const pieceDisplayOrder = {
    black: ['R', 'B', 'G', 'S', 'N', 'L', 'P'],
    white: ['P', 'L', 'N', 'S', 'G', 'B', 'R'],
}
