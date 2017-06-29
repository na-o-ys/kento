import * as React from "react"
import Cell from "./Cell"
import { Style } from "../../types"

type Hands = { [key: string]: number }

type HandProps = {
    hands: Hands,
    color: string,
    style?: Style,
    scale?: number
}

export const Hand = ({ hands, color, style = {}, scale = 1 }: HandProps) => {
    const pieces = pieceDisplayOrder[color]
        .filter(piece => hands[piece] > 0)
        .map(piece => ({
            piece: color == "black" ? piece : piece.toLowerCase(),
            count: hands[piece]
        }))
    return (
        <div style={{ ...getHandStyle(scale), ...style }}>
            {pieces.map(hand => (
                <Cell key={hand.piece} piece={hand.piece} count={hand.count} scale={scale} />
            ))}
        </div>
    )
}

export default Hand

const getHandStyle = (scale: number) => ({
    width: scale * (43 + 2),
    height: scale * 454,
    background: "url('img/ban_dark.png')",
    backgroundRepeat: "no-repeat"
})

const pieceDisplayOrder = {
    black: ['R', 'B', 'G', 'S', 'N', 'L', 'P'],
    white: ['P', 'L', 'N', 'S', 'G', 'B', 'R'],
}
