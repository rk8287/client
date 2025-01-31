import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const QuizCard = ({ question, onNext, timeLeft, answeredQuestions, currentIndex = 0, setCurrentIndex, totalQuestions = 0 }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isNextClicked, setIsNextClicked] = useState(false);

  if (!question) return null;

  const isAnswered = answeredQuestions.has(question.id);

  const handleNext = () => {
    if (!selectedOption) {
      onNext(null);
    } else {
      onNext(selectedOption);
    }

    setIsNextClicked(true); 
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  
  const totalQuestionsDisplay = totalQuestions || (answeredQuestions ? answeredQuestions.size : 0);

  return (
    <motion.div
      key={currentIndex}
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.5 }}
    >
      <Card sx={{ boxShadow: 3, borderRadius: '16px', overflow: 'hidden', backgroundColor: '#ffffff' }}>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center', fontSize: '1.5rem' }}>
            {question.description}
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, textAlign: 'center', fontSize: '1.2rem', color: 'gray' }}>
            Time Left: {timeLeft}s
          </Typography>

          
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box display="flex" flexDirection="column" gap={2} sx={{ minHeight: '200px' }}>
              {question.options.map((option, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button
                    variant="contained"
                    onClick={() => setSelectedOption(option)}
                    sx={{
                      padding: '12px 24px',
                      borderRadius: '28px',
                      fontSize: '1rem', 
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      maxWidth: '100%',
                      height: '56px',
                      backgroundColor: selectedOption === option ? 'green' : 'teal',
                      '&:hover': {
                        transform: 'scale(1)',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                      },
                      width: '100%',
                      
                      '@media (max-width: 600px)': {
                        fontSize: '0.9rem', 
                        padding: '10px 20px', 
                        height: '48px', 
                      },
                    }}
                    disabled={isAnswered}
                  >
                    {option.description}
                  </Button>
                </motion.div>
              ))}
            </Box>
          </motion.div>

          
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 2,
              fontSize: '1rem',
              color: 'gray',
            }}
          >
            <Typography variant="body2">
              {isNaN(totalQuestionsDisplay) ? 0 : totalQuestionsDisplay} of {'10'}
            </Typography>
          </Box>

          {/* Next Button */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{
                borderRadius: '28px',
                fontSize: '1rem',
                padding: '8px 20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              Next
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default QuizCard;
