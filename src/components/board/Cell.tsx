import * as React from "react"
import { Style } from "../../types"

type CellProps = {
    piece?: string,
    highlight?: boolean,
    count?: number,
    style?: Style,
    scale?: number
}

export const Cell = ({ piece, highlight = false, count = 1, style = {}, scale = 1 }: CellProps) => (
    <div style={{ ...getOuterStyle(scale), ...style }}>
        <span style={getCellStyle({ piece, highlight, scale })}></span>
        {count > 1 ? <Count {...{ count, scale }} /> : null}
    </div>
)

export default Cell

const getOuterStyle: (number) => React.CSSProperties = scale => ({
    position: "relative",
    ...cellSize(scale)
})

const Count = ({ count, scale }) => (
    <span style={getCountStyle(scale)}>{count}</span>
)

const getCountStyle: (number) => React.CSSProperties = scale => ({
    position: "absolute",
    top: 0,
    right: scale * 43 / 16,
    color: "white",
    fontSize: scale * 48 / 2.4,
    textShadow: ".5px .5px black, .5px -.5px black, -.5px .5px black, -.5px -.5px black"
})

function getCellStyle({ piece, highlight, scale }) {
    let cellStyle: Style = {
        backgroundSize: "100%",
        display: "block"
    }
    if (piece) cellStyle["backgroundImage"] = `url(${getPieceImagePath(piece)})`
    if (highlight) cellStyle["backgroundColor"] = "rgba(255, 255, 255, 0.7)"
    return { ...cellStyle, ...cellSize(scale) }
}

const cellSize = scale => ({
    width: scale * 43,
    height: scale * 48,
})

const pieceImages = {
    "K": "Sou.png",
    "R": "Shi.png",
    "B": "Skaku.png",
    "G": "Skin.png",
    "S": "Sgin.png",
    "N": "Skei.png",
    "L": "Skyo.png",
    "P": "Sfu.png",
    "+R": "Sryu.png",
    "+B": "Suma.png",
    "+S": "Sngin.png",
    "+N": "Snkei.png",
    "+L": "Snkyo.png",
    "+P": "Sto.png",
    "k": "Gou.png",
    "r": "Ghi.png",
    "b": "Gkaku.png",
    "g": "Gkin.png",
    "s": "Ggin.png",
    "n": "Gkei.png",
    "l": "Gkyo.png",
    "p": "Gfu.png",
    "+r": "Gryu.png",
    "+b": "Guma.png",
    "+s": "Gngin.png",
    "+n": "Gnkei.png",
    "+l": "Gnkyo.png",
    "+p": "Gto.png",
}

function getPieceImagePath(piece: string) {
    return `img/koma/${pieceImages[piece]}`
}
