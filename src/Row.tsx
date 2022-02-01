import React from "react";
import styled from "@emotion/styled";

interface Props {
  word: string;
  answer: string;
}

const LetterBox = styled.div<{ bgColor: string }>`
  width: 3rem;
  height: 3rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: bold;
  vertical-align: middle;
  box-sizing: border-box;
  color: #ffffff;
  background-color: ${(props) => props.bgColor};
  text-transform: uppercase;
  user-select: none;
  margin: 2px;
`;

const getColor = (letter: string, position: number, answerLetters: string[]): string => {
  if (answerLetters[position] === letter) return "#6aaa64";
  if (answerLetters.includes(letter)) return "#c9b458";

  return "#787c7e";
};

const Row: React.FC<Props> = ({ word, answer }) => {
  if (!word) return null;

  const wordLetters = word.split("");
  const answerLetters = answer.split("");

  if (wordLetters.length !== answerLetters.length) {
    const wordLength = wordLetters.length;
    wordLetters.length = answerLetters.length;

    if (wordLength < answerLetters.length) {
      wordLetters.fill("", wordLength);
    }
  }

  return (
    <div>
      {wordLetters.map((letter, i) => (
        <LetterBox key={i} bgColor={getColor(letter, i, answerLetters)}>
          {letter}
        </LetterBox>
      ))}
    </div>
  );
};

export default Row;
