import BgTetrisI from "../images/lego-I.png";
import BgTetrisJ from "../images/lego-J.png";
import BgTetrisL from "../images/lego-L.png";
import BgTetrisO from "../images/lego-O.png";
import BgTetrisS from "../images/lego-S.png";
import BgTetrisT from "../images/lego-T.png";
import BgTetrisZ from "../images/lego-Z.png";

export const TETROMINOS = {
  0: { shape: [[0]], color: "0, 0, 0", bgImage: null },
  I: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0]
    ],
    color: "1, 173, 237",
    bgImage: BgTetrisI
  },
  J: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0]
    ],
    color: "234, 224, 39",
    bgImage: BgTetrisJ
  },
  L: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"]
    ],
    color: "236, 29, 37",
    bgImage: BgTetrisL
  },
  O: {
    shape: [
      ["O", "O"],
      ["O", "O"]
    ],
    color: "247, 145, 29",
    bgImage: BgTetrisO
  },
  S: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0]
    ],
    color: "5, 0, 235",
    bgImage: BgTetrisS
  },
  T: {
    shape: [
      [0, 0, 0],
      ["T", "T", "T"],
      [0, "T", 0]
    ],
    color: "101, 44, 144",
    bgImage: BgTetrisT
  },
  Z: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0]
    ],
    color: "1, 104, 57",
    bgImage: BgTetrisZ
  }
};

export const randomTetromino = () => {
  const tetrominos = "IJLOSTZ";
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};
