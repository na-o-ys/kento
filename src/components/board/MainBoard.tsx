import * as React from "react"
import Cell from "./Cell"
import { Style } from "../../types"

type MainBoardProps = {
    cells: Array<string | null>,
    highlightCell?: number,
    style?: Style,
    scale?: number
}

export const MainBoard = ({ cells, highlightCell = -1, style = {}, scale = 1 }: MainBoardProps) => {
    const rankCells = (rankIdx: number) => cells.slice(rankIdx * 9, (rankIdx + 1) * 9)
    const highlightIdx = (rankIdx: number) => highlightCell - rankIdx * 9
    return (
        <div style={{ ...getMainBoardStyle(scale), ...style }}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(rankIdx => (
                <Rank key={rankIdx} cells={rankCells(rankIdx)} rankIdx={rankIdx} scale={scale} highlightIdx={highlightIdx(rankIdx)} />
            ))}
        </div>
    )
}

export default MainBoard

const getMainBoardStyle = (scale: number) => ({
    background: "url('img/masu_dot_xy.png'), url('img/ban_kaya_a.png')",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    height: scale * (454 - 22),
    width: scale * (410 - 22),
    padding: scale * 11,
})

const Rank = ({ cells, rankIdx, scale, highlightIdx }) => (
    <div style={rankStyle}>
        {cells.map((piece, idx) => (
            <Cell key={idx} piece={piece} highlight={idx == highlightIdx} style={{ float: "left" }} scale={scale} />
        ))}
    </div>
)

const rankStyle = {
    // height: 50,
    // width: 500,
}
