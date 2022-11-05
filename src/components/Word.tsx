import styled from "styled-components"

type Props = {
  wordToGuess: string
  guessedLetters: string[]
}

export default function Word({ wordToGuess, guessedLetters }: Props) {
  return (
    <WordContainer>
      {wordToGuess.split("").map((letter, index) => {
        return (
          <span className="letter" key={index}>
            <span
              style={{
                visibility: guessedLetters.includes(letter) ? "visible" : "hidden",
              }}
            >
              {letter}
            </span>
          </span>
        )
      })}
    </WordContainer>
  )
}

const WordContainer = styled.div`
  display: flex;
  gap: 0.25em;
  font-size: 6rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: monospace;

  .letter {
    border-bottom: 0.1em solid black;
  }
`
