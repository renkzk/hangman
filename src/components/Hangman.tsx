import styled from "styled-components"

export default function Hangman() {
  return (
    <HangmanContainer>
      <div className="top-bar" />
      <div className="rope-bar" />
      <div className="middle-bar" />
      <div className="bottom-bar" />
    </HangmanContainer>
  )
}

const HangmanContainer = styled.div`
  position: relative;

  .top-bar {
    height: 10px;
    width: 250px;
    background-color: black;
    margin-left: 50%;
  }

  .rope-bar {
    height: 50px;
    width: 10px;
    background-color: black;
    position: absolute;
    right: -50%;
  }

  .middle-bar {
    height: 400px;
    width: 10px;
    background-color: black;
    margin-left: 50%;
  }

  .bottom-bar {
    height: 10px;
    width: 250px;
    background-color: black;
  }
`
