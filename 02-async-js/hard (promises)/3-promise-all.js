/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */
function waitOneSecond() {
  return new Promise((resolve)=>{
    setTimeout(resolve,1000)
  })
   
  }
  
  function waitTwoSeconds() {
    
    return new Promise((resolve)=>{
      setTimeout(resolve,2000)
    })
    
  }
  
  function waitThreeSeconds() {
    return new Promise((resolve)=>{
      setTimeout(resolve,3000)
    })
  
  }
  
  function calculateTime() {
    let start = new Date()
    let startsecond = start.getSeconds()
    const promises = [waitOneSecond(),waitTwoSeconds(),waitThreeSeconds()]
    return  Promise.all(promises).then(()=>{
      let end = new Date();
     let endsecond =  end.getSeconds();
     let ans = endsecond-startsecond
     console.log(ans)
    })
 
   
  }
calculateTime();
//here as the functions are called parllely so it takes overall of 3 seconds.