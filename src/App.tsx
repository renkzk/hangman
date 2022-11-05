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

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return
      setGuessedLetters((currentState) => [...currentState, letter])
    },
    [guessedLetters]
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

  return (
    <AppContainer>
      <div className="game-info">You Won.</div>
      <Hangman numberOfWrongGuesses={incorrectLetters.length} />
      <Word wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
      <Keyboard
        correctLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
        incorrectLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
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
`

export default App
