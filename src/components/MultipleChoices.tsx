import { Radio, Typography } from '@mui/material';
import React, { useState } from 'react';

interface MultipleChoiceProps {
  question?: string;
  choices: string[];
  onAnswerSelect: (answer: string) => void; // Function to handle answer selection
}

const MultipleChoice: React.FC<MultipleChoiceProps> = ({ question, choices, onAnswerSelect }) => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  const handleChoiceChange = (choice: string) => {
    setSelectedChoice(choice);
    onAnswerSelect(choice); // Call the parent component's function when an answer is selected
  };

  // Inline CSS styles (you can add more styles here)
  const containerStyle: React.CSSProperties = {
    fontFamily: 'Arial, sans-serif',
  };

  const choiceListStyle: React.CSSProperties = {
    listStyleType: 'none',
    padding: '0',
  };

  const choiceItemStyle: React.CSSProperties = {
  };

  const labelStyle: React.CSSProperties = {
    cursor: 'pointer',
		color: '#FFFFFF',
  };

  return (
    <div style={containerStyle}>
      <Typography color="#FFF">{question}</Typography>
      <ul style={choiceListStyle}>
        {choices.map((choice) => (
          <li key={choice} style={choiceItemStyle}>
            <Radio
							style={{color: "#FFF"}}
              id={choice}
              name="multiple-choice"
              value={choice}
              checked={selectedChoice === choice}
              onChange={() => handleChoiceChange(choice)}
            />
            <label htmlFor={choice} style={labelStyle}>
              {choice}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultipleChoice;
