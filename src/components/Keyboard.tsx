import styled from "styled-components"

export default function Keyboard() {
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
  return (
    <KeyboardContainer>
      {KEYS.map((key) => {
        return (
          <button className="key-btn " key={key}>
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

    &.active {
      background-color: hsl(200, 100%, 50%);
      color: white;
    }

    &.inactive {
      opacity: 0.3;
      pointer-events: none;
    }

    &:hover,
    &:focus {
      background-color: hsl(200, 100%, 50%);
    }
  }
`
