import React ,{useRef,useEffect,useState}from 'react';



  


function Countdown({date}) {
    
   
    const [timerDays,setTimerDays]=useState('00');
    let interval =useRef();
    const startTimer=()=>{
        const countdownDate =new Date(date).getTime();
        interval =setInterval(()=>{
            const now =new Date().getTime();
            const distance =countdownDate - now ;

            const days= Math.floor(distance /(1000*60*60*24)+1);
            
            if (distance<0){
                clearInterval(interval.current);
            }
            else{
                setTimerDays(days);
                
            }

        },1000);
    }
    
    useEffect(()=>{
        startTimer();
        return()=>{
            clearInterval(interval.current);
        }
    })
    return (
      
                <div>
                    <section>
                        <p>{timerDays}<small>  Days</small></p>
                        
                    </section>
                    
                </div>
      
    )
}

export default Countdown
