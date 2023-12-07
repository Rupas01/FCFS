let processQueue = [];

function addProcess() {
  const burstTime = parseInt($('#burstTime').val());

  if (!isNaN(burstTime)) {
    processQueue.push({ burstTime });
    updateProcessQueue();
  } else {
    alert('Invalid input. Please enter a valid burst time.');
  }
}

function updateProcessQueue() {
  const processQueueDiv = $('#processQueue');
  processQueueDiv.empty();

  processQueue.forEach((process, index) => {
    processQueueDiv.append(`<div>Process ${index + 1}: Burst Time - ${process.burstTime}</div>`);
  });
}

function runScheduler() {
  ele = document.getElementById('result');
    ele.style.display = 'block';
    ele.style.margin = '20px 0px';
    ele.style.padding  = '30px';
    ele.style.backgroundColor = 'rgb(230, 243, 255)';
    ele.style.boxShadow = '6px 7px 24px -14px rgb(193 193 193)';
    ele.style.borderRadius = '30px';

    /* margin: 20px 0px;
      padding: 30px;
      background-color: rgb(230, 243, 255);
      box-shadow: 6px 7px 24px -14px rgb(193 193 193);
      border-radius: 30px; */
  const resultDiv = $('#result');
  resultDiv.empty();

  let currentTime = 0;
  let totalTurnaroundTime = 0;
  let totalWaitingTime = 0;

  processQueue.forEach((process, index) => {
    const waitingTime = currentTime;
    totalWaitingTime += waitingTime;

    const turnaroundTime = waitingTime + process.burstTime;
    totalTurnaroundTime += turnaroundTime;

    resultDiv.append(`<div>Process ${index + 1}: Waiting Time: ${waitingTime}, Turnaround Time: ${turnaroundTime}</div>`);

    currentTime += process.burstTime;
  });

  const averageWaitingTime = totalWaitingTime / processQueue.length;
  const averageTurnaroundTime = totalTurnaroundTime / processQueue.length;

  resultDiv.append(`<div>Average Waiting Time: ${averageWaitingTime}</div>`);
  resultDiv.append(`<div>Average Turnaround Time: ${averageTurnaroundTime}</div>`);
}



// let processQueue = [];

// function addProcess() {
//   const arrivalTime = parseInt($('#arrivalTime').val());
//   const burstTime = parseInt($('#burstTime').val());

//   if (!isNaN(arrivalTime) && !isNaN(burstTime)) {
//     processQueue.push({ arrivalTime, burstTime });
//     updateProcessQueue();
//   } else {
//     alert('Invalid input. Please enter valid numbers.');
//   }
// }

// function updateProcessQueue() {
//   const processQueueDiv = $('#processQueue');
//   processQueueDiv.empty();

//   processQueue.forEach((process, index) => {
//     processQueueDiv.append(`<div>Process ${index + 1}: Arrival Time - ${process.arrivalTime}, Burst Time - ${process.burstTime}</div>`);
//   });
// }

// function runScheduler() {
//   const resultDiv = $('#result');
//   resultDiv.empty();

//   let currentTime = 0;
//   let totalTurnaroundTime = 0;

//   processQueue.forEach((process, index) => {
//     const turnaroundTime = currentTime + process.burstTime - process.arrivalTime;
//     totalTurnaroundTime += turnaroundTime;

//     resultDiv.append(`<div>Process ${index + 1} Turnaround Time: ${turnaroundTime}</div>`);

//     currentTime += process.burstTime;
//   });

//   const averageTurnaroundTime = totalTurnaroundTime / processQueue.length;
//   resultDiv.append(`<div>Average Turnaround Time: ${averageTurnaroundTime}</div>`);
// }
