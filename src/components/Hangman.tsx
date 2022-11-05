import styled from "styled-components"

export default function Hangman() {
  const HEAD = (
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        right: "-50%",
        top: "50px",
      }}
    />
  )

  const BODY = (
    <div
      style={{
        width: "10px",
        height: "100px",
        background: "black",
        position: "absolute",
        right: "-38%",
        top: "120px",
      }}
    />
  )

  const LEFT_ARM = (
    <div
      style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        right: "-68%",
        top: "160px",
        rotate: "50deg",
      }}
    />
  )
  const RIGHT_ARM = (
    <div
      style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        right: "-44%",
        top: "160px",
        rotate: "-50deg",
      }}
    />
  )
  const LEFT_LEG = (
    <div
      style={{
        width: "120px",
        height: "10px",
        background: "black",
        position: "absolute",
        right: "-68%",
        top: "260px",
        rotate: "70deg",
      }}
    />
  )
  const RIGHT_LEG = (
    <div
      style={{
        width: "120px",
        height: "10px",
        background: "black",
        position: "absolute",
        right: "-52%",
        top: "260px",
        rotate: "-70deg",
      }}
    />
  )

  return (
    <HangmanContainer>
      {HEAD}
      {BODY}
      {LEFT_ARM}
      {RIGHT_ARM}
      {LEFT_LEG}
      {RIGHT_LEG}
      <div className="top-bar" />
      <div className="rope-bar" />
      <div className="middle-bar" />
      <div className="bottom-bar" />
    </HangmanContainer>
  )
}

const HangmanContainer = styled.div`
  position: relative;
  margin-left: -20%;

  .top-bar {
    height: 10px;
    width: 220px;
    background-color: black;
    margin-left: 50%;
  }

  .rope-bar {
    height: 50px;
    width: 10px;
    background-color: black;
    position: absolute;
    right: -38%;
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
