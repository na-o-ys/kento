import docReady from "doc-ready"
import Game from "lib/game.js"
import start from "gui"

let kif = ["開始日時：2016/04/26 09:06:03",
"棋戦：将棋ウォーズ(10切)",
"持ち時間：10分切れ負け",
"手合割：平手",
"先手：na_o_ys",
"後手：mmaaeeddaa",
"手数----指手---------消費時間--",
"1 ７六歩(77)   ( 00:00/00:00:00)",
"2 ３四歩(33)   ( 00:00/00:00:00)",
"3 ６六歩(67)   ( 00:03/00:00:03)",
"4 ３二銀(31)   ( 00:04/00:00:04)",
"5 ７八飛(28)   ( 00:06/00:00:09)",
"6 ４四歩(43)   ( 00:02/00:00:06)",
"7 ７五歩(76)   ( 00:02/00:00:11)",
"8 ４三銀(32)   ( 00:01/00:00:07)",
"9 ６八銀(79)   ( 00:04/00:00:15)",
"10 ４二玉(51)   ( 00:01/00:00:08)",
"11 ６七銀(68)   ( 00:02/00:00:17)",
"12 ３二玉(42)   ( 00:01/00:00:09)",
"13 ５八金(69)   ( 00:03/00:00:20)",
"14 ５二金(61)   ( 00:01/00:00:10)",
"15 ４八玉(59)   ( 00:01/00:00:21)",
"16 １四歩(13)   ( 00:01/00:00:11)",
"17 １六歩(17)   ( 00:01/00:00:22)",
"18 ３三角(22)   ( 00:02/00:00:13)",
"19 ３八玉(48)   ( 00:01/00:00:23)",
"20 ５四歩(53)   ( 00:04/00:00:17)",
"21 ２八玉(38)   ( 00:11/00:00:34)",
"22 ８四歩(83)   ( 00:01/00:00:18)",
"23 ７六飛(78)   ( 00:02/00:00:36)",
"24 ８五歩(84)   ( 00:01/00:00:19)",
"25 ９六歩(97)   ( 00:14/00:00:50)",
"26 ６二銀(71)   ( 00:02/00:00:21)",
"27 ９七角(88)   ( 00:10/00:01:00)",
"28 ９四歩(93)   ( 00:02/00:00:23)",
"29 ７七桂(89)   ( 00:04/00:01:04)",
"30 ４二角(33)   ( 00:07/00:00:30)",
"31 ３八銀(39)   ( 00:19/00:01:23)",
"32 ８四飛(82)   ( 00:02/00:00:32)",
"33 ５六銀(67)   ( 00:44/00:02:07)",
"34 ３三桂(21)   ( 00:02/00:00:34)",
"35 ４六歩(47)   ( 00:09/00:02:16)",
"36 ２二玉(32)   ( 00:02/00:00:36)",
"37 ４七金(58)   ( 00:07/00:02:23)",
"38 ２四歩(23)   ( 00:02/00:00:38)",
"39 ３六歩(37)   ( 00:11/00:02:34)",
"40 ５三角(42)   ( 00:06/00:00:44)",
"41 ３七桂(29)   ( 00:47/00:03:21)",
"42 ３二金(41)   ( 00:02/00:00:46)",
"43 ２六歩(27)   ( 00:07/00:03:28)",
"44 ４二金(52)   ( 00:01/00:00:47)",
"45 ２七銀(38)   ( 00:04/00:03:32)",
"46 ５一銀(62)   ( 00:03/00:00:50)",
"47 ３八金(49)   ( 00:01/00:03:33)",
"48 ５二銀(51)   ( 00:01/00:00:51)",
"49 ９八香(99)   ( 00:04/00:03:37)",
"50 ７四歩(73)   ( 00:05/00:00:56)",
"51 ６五銀(56)   ( 01:02/00:04:39)",
"52 ７五歩(74)   ( 00:02/00:00:58)",
"53 同　角(97)   ( 00:02/00:04:41)",
"54 同　角(53)   ( 00:03/00:01:01)",
"55 同　飛(76)   ( 00:01/00:04:42)",
"56 ７四歩打   ( 00:05/00:01:06)",
"57 同　銀(65)   ( 00:23/00:05:05)",
"58 ６四角打   ( 00:02/00:01:08)",
"59 ８五飛(75)   ( 00:27/00:05:32)",
"60 ７四飛(84)   ( 00:02/00:01:10)",
"61 ７五歩打   ( 00:22/00:05:54)",
"62 同　角(64)   ( 00:22/00:01:32)",
"63 ８一飛成(85)   ( 00:10/00:06:04)",
"64 ６六角(75)   ( 00:02/00:01:34)",
"65 ６五桂(77)   ( 00:26/00:06:30)",
"66 ７九飛成(74)   ( 00:16/00:01:50)",
"67 ６二歩打   ( 00:16/00:06:46)",
"68 ６四歩(63)   ( 00:37/00:02:27)",
"69 ７三桂成(65)   ( 00:32/00:07:18)",
"70 同　龍(79)   ( 00:03/00:02:30)",
"71 ６一歩成(62)   ( 00:04/00:07:22)",
"72 ７九龍(73)   ( 00:44/00:03:14)",
"73 ５一と(61)   ( 00:02/00:07:24)",
"74 ５五桂打   ( 00:04/00:03:18)",
"75 ４八金(47)   ( 00:24/00:07:48)",
"76 ４五歩(44)   ( 00:15/00:03:33)",
"77 ５二と(51)   ( 00:14/00:08:02)",
"78 同　銀(43)   ( 00:02/00:03:35)",
"79 ４四桂打   ( 00:10/00:08:12)",
"80 ４一銀(52)   ( 00:07/00:03:42)",
"81 ３二桂成(44)   ( 00:17/00:08:29)",
"82 同　玉(22)   ( 00:04/00:03:46)",
"83 ４五桂(37)   ( 00:15/00:08:44)",
"84 同　桂(33)   ( 00:03/00:03:49)",
"85 同　歩(46)   ( 00:06/00:08:50)",
"86 ４六桂打   ( 00:15/00:04:04)",
"87 ４四桂打   ( 00:05/00:08:55)",
"88 ３三玉(32)   ( 00:06/00:04:10)",
"89 ３二金打   ( 00:25/00:09:20)",
"90 同　銀(41)   ( 00:03/00:04:13)",
"91 同　桂成(44)   ( 00:05/00:09:25)",
"92 同　金(42)   ( 00:01/00:04:14)",
"93 ４四角打   ( 00:05/00:09:30)",
"94 ２三玉(33)   ( 00:03/00:04:17)",
"95 １一龍(81)   ( 00:07/00:09:37)",
"96 ３八桂成(46)   ( 00:02/00:04:19)",
"97 同　銀(27)   ( 00:03/00:09:40)",
"98 ３九銀打   ( 00:24/00:04:43)",
"99 ３七玉(28)   ( 00:08/00:09:48)",
"100 ４八銀成(39)   ( 00:09/00:04:52)",
"101 １五桂打   ( 00:02/00:09:50)",
"102 投了"].join("\n")

var game = Game.parseText(kif)
docReady(() => {
  start(game, 100)
})
