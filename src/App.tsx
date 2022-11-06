import { useCallback, useEffect, useState } from "react"
import styled from "styled-components"
import words from "./wordList.json"
import Hangman from "./components/Hangman"
import Word from "./components/Word"
import Keyboard from "./components/Keyboard"

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getRandomWord)

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  )

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isWinner || isLoser) return
      setGuessedLetters((currentState) => [...currentState, letter])
    },
    [guessedLetters, isWinner, isLoser]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getRandomWord)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])

  return (
    <AppContainer>
      {isWinner && (
        <h1 className="game-info winner">You Won! - Press "Enter" to restart</h1>
      )}
      {isLoser && (
        <h1 className="game-info loser">You Lost! - Press "Enter" to restart</h1>
      )}
      <Hangman numberOfWrongGuesses={incorrectLetters.length} />
      <Word wordToGuess={wordToGuess} guessedLetters={guessedLetters} isLoser={isLoser} />
      <Keyboard
        correctLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
        incorrectLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
        disabled={isWinner || isLoser}
      />
    </AppContainer>
  )
}

const AppContainer = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
  align-items: center;
  position: relative;
  font-family: monospace;

  .game-info {
    position: absolute;
    top: 20%;
    background-color: #000000e7;
    padding: 5rem;
    z-index: 1;
    &.winner {
      color: #0fbb0f;
    }
    &.loser {
      color: red;
    }
  }
`

export default App
