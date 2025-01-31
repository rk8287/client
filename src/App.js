import React, { useState, useEffect } from 'react';
import { Container, Button, CircularProgress, Box, Typography } from '@mui/material';
import axios from 'axios';
import QuizCard from './components/QuizCard';
import Result from './components/Result';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import './App.css';

import videoOne from '../src/videos/15079-260649501_small.mp4'

const App = () => {
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quizStarted, setQuizStarted] = useState(false);
  const [videoPlayed, setVideoPlayed] = useState(false); 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [answerStatus, setAnswerStatus] = useState({}); 
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
const API_URL = '/api/Uw5CrX';



  useEffect(() => {
  fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors" // This sometimes helps
  })
    .then(response => response.json())
    .then(data => {
      setQuizData(data);
      setLoading(false);
    })
    .catch(error => {
      console.error("Error fetching quiz data:", error);
      setLoading(false);
    });
}, []);


  useEffect(() => {
    let timer;
    if (quizStarted && timeLeft > 0 && currentQuestionIndex < quizData?.questions?.length) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      nextQuestion(null);
    }
    return () => clearInterval(timer);
  }, [quizStarted, timeLeft, currentQuestionIndex, quizData]);

  const startQuiz = () => {
    if (videoPlayed) {
      setQuizStarted(true);
    } else {
      alert('Please watch the video first!');
    }
  };

  const nextQuestion = (selectedOption) => {
    if (selectedOption) {
      setAnswerStatus((prev) => ({
        ...prev,
        [currentQuestionIndex]: selectedOption.is_correct ? 'correct' : 'incorrect',
      }));
      if (selectedOption.is_correct) {
        setScore(score + 1);
      }
    }
    setAnsweredQuestions((prev) => new Set(prev).add(currentQuestionIndex));
    setTimeLeft(30);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const restartQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswerStatus({});
    setTimeLeft(30);
    setAnsweredQuestions(new Set());
  };

  const handleVideoEnded = () => {
    setVideoPlayed(true); 
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (!quizData || !quizData.questions || quizData.questions.length === 0) {
    return <div>Unable to load quiz data. Please try again later.</div>;
  }

  return (
    <Container maxWidth="sm" className='main-container'>
      <Box mt={4} textAlign="center">
        <Typography variant="h6" color="textSecondary">
          Live Test Count: {quizData.live_count || 'Not Available'}
        </Typography>
        <Typography variant="h6" color="textSecondary" sx={{ marginTop: 1 }}>
          Total Questions: {quizData.questions_count || 'Not Available'}
        </Typography>

 
        {!videoPlayed ? (
         <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
         style={{
           position: 'absolute',  
           top: 0,
           left: 0,
           width: '100vw',        
           height: '100vh',       
           zIndex: videoPlayed ? 0 : 100, 
         }}
       >
         <ReactPlayer
           url={videoOne}         
           playing={true}         
           muted={true}           
           onEnded={handleVideoEnded}  
           width="100%"          
           height="100%"          
           style={{
             objectFit: 'cover',  
             position: 'absolute', 
             top: 0,
             left: 0,
           }}
         />
       </motion.div>
       
       
        
        ) : (
          <>
            
            {!quizStarted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  variant="contained"
                  color='success'
                  onClick={startQuiz}
                  size="large"
                  sx={{
                    fontSize: '1.5rem',
                    padding: '16px 32px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                    borderRadius: '30px',
                  }}
                >
                  Start Quiz
                </Button>
              </motion.div>
            ) : currentQuestionIndex < quizData.questions.length ? (
              <QuizCard
                question={quizData.questions[currentQuestionIndex]}
                onNext={nextQuestion}
                timeLeft={timeLeft}
                answerStatus={answerStatus[currentQuestionIndex]}
                answeredQuestions={answeredQuestions}
              />
            ) : (
              <Result score={score} totalQuestions={quizData.questions.length} onRestart={restartQuiz} />
            )}
          </>
        )}
      </Box>
    </Container>
  );
};

export default App;
