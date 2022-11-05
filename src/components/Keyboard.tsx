import styled from "styled-components"

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

type Props = {
  correctLetters: string[]
  incorrectLetters: string[]
  addGuessedLetter: (letter: string) => void
}

export default function Keyboard({
  correctLetters,
  incorrectLetters,
  addGuessedLetter,
}: Props) {
  return (
    <KeyboardContainer>
      {KEYS.map((key) => {
        const isCorrect = correctLetters.includes(key)
        const isIncorrect = incorrectLetters.includes(key)
        return (
          <button
            className={
              isCorrect
                ? "key-btn correct"
                : isIncorrect
                ? "key-btn incorrect"
                : "key-btn"
            }
            key={key}
            onClick={() => addGuessedLetter(key)}
          >
            {key}
          </button>
        )
      })}
    </KeyboardContainer>
  )
}

const KeyboardContainer = styled.div`
  display: grid;
  align-self: stretch;
  grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
  gap: 0.5em;

  .key-btn {
    width: 100%;
    border: 3px solid black;
    background: none;
    aspect-ratio: 1/1;
    font-size: 2.5rem;
    text-transform: uppercase;
    padding: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    color: black;

    &.correct {
      background-color: hsl(158.04878048780486, 82%, 39.21568627450981%);
      color: white;
      pointer-events: none;
    }

    &.incorrect {
      opacity: 0.3;
      pointer-events: none;
    }

    &:hover {
      background-color: hsl(200, 100%, 50%);
    }
  }
`
