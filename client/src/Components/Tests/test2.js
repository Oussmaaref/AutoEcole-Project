import React, { useState,useEffect } from 'react';
import './test.css'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import AccordionEx from './Accordion';
import Countdown from './countdown/Countdown'
import Questions from './data2'


const useStyles = makeStyles((theme) => ({
   button: {
	  width:'20%',
	  marginLeft:200,
	  marginTop:40,
   },
    
  }));
 
export default function Test2() {
	
    const classes=useStyles()
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const [showAnswers, setShowAnswers] = useState(false);
   const [pause,setPause] = useState(false)
   const [reset,setReset] =useState(0)
   const [timeup,setTimeup] =useState(false)
   
   useEffect(() => {
	
	
	
    
  }, []);
  
 
    
	const handleAnswerOptionClick = (isCorrect) => {
		if (!showAnswers)
		{if (isCorrect) {
			
			setScore(score + 1);
			
		}}
		setShowAnswers(true) ;
		setPause(true)
		
		
	};
	const handleNextQuestion = ()=> {
		setTimeup(false)
		setShowAnswers(false)
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < Questions.length) {
			setCurrentQuestion(nextQuestion);
			setReset(reset+1)
			setPause(false)
			
		} else {
			setShowScore(true);
		}
		
	};
	return (
		<div >
			{showScore ? (
				<div className='score-section'>
					You scored {score}/{Questions.length}
				</div>
				
			) : (
				<div className="Pagecontainer">
					<div className='count-container'>
						<div className='question-count'>
							Question {currentQuestion + 1}/{Questions.length}
						</div>
						</div>
                        <div className="timer-container"><Countdown pause={pause}  reset={reset} setTimeup={setTimeup}/></div>
						
						
				<div className='container'>
					<div className='question-section'>
					    <img className="item"  src={Questions[currentQuestion].image}/>
						<div className='question-text'><h2>{Questions[currentQuestion].questionText}</h2></div>
					</div>
				
        	<div className='answer-section'>
						{Questions[currentQuestion].answerOptions.map((answerOption) => {
              const bgColor= (showAnswers || timeup)
              ? answerOption.isCorrect ? 'correct':'incorrect' :'normal'
              return(
							<button className={`butt ${bgColor} `  }  onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						)})}
					</div>
					{(showAnswers || timeup) && (
				<Button  className={classes.button} onClick={handleNextQuestion}  style={{backgroundColor: '#a1bbff', color: '#05092e',font:' italic small-caps bold 16px/2 cursive'}} >Next</Button>
				)}
					
				</div>
				
				{(showAnswers || timeup) &&(
				<AccordionEx className="accord" text={Questions[currentQuestion].explanation} correctanswer={Questions[currentQuestion].correctanswer}/>
				)}
				</div>
				
			)}
		</div>
	);
}