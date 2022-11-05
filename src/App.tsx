import { useState } from "react"
import styled from "styled-components"
import words from "./wordList.json"
import Hangman from "./components/Hangman"
import Word from "./components/Word"
import Keyboard from "./components/Keyboard"

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  return (
    <AppContainer>
      <div className="game-info">You Won.</div>
      <Hangman />
      <Word />
      <Keyboard />
    </AppContainer>
  )
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
  align-items: center;
`

export default App
