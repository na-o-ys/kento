function generatePosition(game, turn) {
  let sfen = "+l+n+sgkgsnl/1+r5+b1/+ppppppppp/9/9/9/+PPPPPPPPP/1+B5+R1/+L+N+SGKGSNL"

  let cells = []
  let promoted = 0
  for (var i = 0; i < sfen.length; i++) {
    let c = sfen[i]
    if (c == "/") continue
    if (c == "+") {
      promoted = 1
      continue
    }
    if (c < 'A') {
      let nulls = parseInt(c)
      while (nulls--) cells.push(null)
      continue
    }
    if (promoted) {
      c = "p" + c
    }
    cells.push(c)
    promoted = 0
  }

  let hand = "S2Pb3p"
  let count = 1
  let white_hand = [], black_hand = []
  for (var i = 0; i < hand.length; i++) {
    let c = hand[i]
    if (c < 'A') {
      count = parseInt(c)
      continue
    }
    if (c < 'a') {
      black_hand.push([c, count])
    } else {
      white_hand.push([c, count])
    }
    count = 1
  }
  return { cells, black_hand, white_hand }
}

export default generatePosition
