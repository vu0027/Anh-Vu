import React, { useState } from 'react';
import quizData from '../data/whichCountriesData.json';
import countriesMap from '../data/countriesMap.json';
import styled from 'styled-components';
import BackButton from '../components/BackButton';
import Card from '@mui/material/Card';
import MultipleChoice from '../components/MultipleChoices';
import Typography from '../components/Typography';
import { Button } from '@mui/material';
import Flag from '../components/Flag';

const Wrapper = styled.div`
	position: absolute;
	margin: 0;
  padding: 0;
	height: 100vh;
	width: 100vw;
  background-color: #FDD935;
`;

const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 1%;
  margin-left: 25%;
  margin-right: 25%;

  @media (max-width: 768px) {
    padding: 10%;
    margin-left: 5%;
    margin-right: 5%;
  }
`;

const StyledCard = styled(Card)`
  padding: 5%;
  margin-left: 25%;
  margin-right: 25%;
  @media (max-width: 768px) {
    padding: 10%;
    margin-left: 5%;
    margin-right: 5%;
  }
`;

const StyledTypography = styled(Typography)`
	margin: 5% 5% 5% 5% ;
	margin-left: 5%;
	margin-right: 5%;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: 768px) {
		margin: 20% 5% 5% 5% ;
  }
`;

const QuizContainer = styled.div`
`;

type CountryData = {
  [countryName: string]: string;
};

const WhichCountry: React.FC = () => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
	const [quizCompleted, setQuizCompleted] = useState(false);
	const handleAnswerSelect = (answer: string) => {
		setSelectedAnswers([...selectedAnswers, answer]);
		if (currentQuestionIndex < quizData.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		} else if (!quizCompleted) {
			setQuizCompleted(true);
		}
	};

	const renderQuiz = () => {
		if (!quizCompleted) {
			const currentQuestion = quizData[currentQuestionIndex];
			return (
				<QuizContainer>
				<Typography color="#fff" fontSize='150%'>Question {currentQuestionIndex + 1}</Typography>
				<MultipleChoice
            question={currentQuestion.question}
            choices={currentQuestion.answers.map((answer) => answer.answer)}
            onAnswerSelect={handleAnswerSelect}
          />
				</QuizContainer>
			);
		} else {
			const finalCountry = determineFinalCountry(selectedAnswers);
			return (
				<div>
					<Typography color="white">Quiz Completed!</Typography>
					<Typography color="white">You should live in: {finalCountry}</Typography>
					<div style={{paddingBottom: '5%'}}></div>
					<Flag countryCode={getIso2Code(finalCountry)} />
				</div>
			);
		}
	};

	const determineFinalCountry = (selectedAnswers: string[]) => {
		const countryScores: Record<string, number> = {};
		selectedAnswers.forEach((selectedAnswer) => {
			quizData.forEach((questionData) => {
				questionData.answers.forEach((answerOption) => {
					if (answerOption.answer === selectedAnswer) {
						const points: any = answerOption.points;
						for (const country in points) {
							countryScores[country] = (countryScores[country] || 0) + points[country];
						}
					}
				});
			});
		});

		let finalCountry = "Unknown";
		let highestScore = 0;

		for (const country in countryScores) {
			if (countryScores[country] > highestScore) {
				finalCountry = country;
				highestScore = countryScores[country];
			}
		}
		return finalCountry;
	};

	const handleBackButtonClick = () => {
		// Move to the previous question if not already at the first question
		if (currentQuestionIndex > 0) {
			setCurrentQuestionIndex(currentQuestionIndex - 1);
		}
	};

	const handleNextButtonClick = () => {
		if (currentQuestionIndex < quizData.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		}
	};
	const handlePlayAgainClick = () => {
		setCurrentQuestionIndex(0);
		setSelectedAnswers([]);
		setQuizCompleted(false);
	};

	const getIso2Code = (countryName: string): string | undefined => {
		const countries: CountryData = countriesMap.countries;
		return countries[countryName];
	}

	return (
		<Wrapper>
			<BackButton />
			<StyledTypography bold color="#000" fontSize='150%'>Which country is your ideal place to live?</StyledTypography>
			<StyledCard style={{backgroundColor: '#000', borderRadius: '5%'}}>
				{renderQuiz()}
			</StyledCard>
			<ButtonWrapper>
				{currentQuestionIndex > 0 && !quizCompleted && (
					<Button color='error' variant="outlined" onClick={handleBackButtonClick}>Back</Button>
				)}
				{currentQuestionIndex < quizData.length - 2 && currentQuestionIndex > 0 && !quizCompleted && (
					<Button color='error' variant="contained" onClick={handleNextButtonClick}>Next</Button>

				)}
			</ButtonWrapper>
			<div style={{marginLeft: '30%', marginTop: '0%'}}>
				{quizCompleted ? (
					<Button color='error' variant='contained' onClick={handlePlayAgainClick}>Play Again</Button>
				) : null}
			</div>
		</Wrapper>
	);
};

export default WhichCountry;



