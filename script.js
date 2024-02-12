document.addEventListener('DOMContentLoaded', function() {

    const startDate = new Date('2024-01-23T18:00:00'); //date
  
    function updateTimer() {
      const currentDate = new Date();
      const timeDifference = currentDate - startDate;
  
      const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      const timerElement = document.getElementById('timer');
      timerElement.innerHTML = `${years} años, ${months} meses, ${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
    }
  
    // Actualiza el contador cada segundo
    setInterval(updateTimer, 1000);
  });
  