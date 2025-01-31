import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Result = ({ score, totalQuestions, onRestart }) => {
  const percentage = (score / totalQuestions) * 100;

  const getResultMessage = () => {
    if (percentage >= 80) return "Excellent!";
    if (percentage >= 50) return "Good Job!";
    return "Better Luck Next Time!";
  };

  return (
    <Box textAlign="center" mt={4}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" gutterBottom>
          Quiz Completed!
        </Typography>
        <Typography variant="h5" color="primary" gutterBottom>
          {getResultMessage()}
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          You scored {score} out of {totalQuestions} ({percentage.toFixed(2)}%)
        </Typography>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Button
            variant="contained"
            color='info'
            onClick={onRestart}
            size="large"
            sx={{
              fontSize: '1.5rem',
              padding: '16px 32px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              borderRadius: '12px',
              marginTop: '20px',
            }}
          >
            Restart Quiz
          </Button>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Result;
