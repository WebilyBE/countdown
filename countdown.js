// Set the countdown date
const countdownElements = document.querySelectorAll(".countdown");
countdownElements.forEach((element) => {
    const targetDate = new Date(element.getAttribute("data-date")).getTime();

    const x = setInterval(function() { 
        // Get the current time
        const now = new Date().getTime();
        
        // Find the distance between current time and the count down date
        const distance = targetDate - now;
      
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the corresponding elements
        element.querySelector('[data-days]').innerHTML = days < 10 ? '0' + days : days;
        element.querySelector('[data-hours]').innerHTML = hours < 10 ? '0' + hours : hours;
        element.querySelector('[data-minutes]').innerHTML = minutes < 10 ? '0' + minutes : minutes;
        element.querySelector('[data-seconds]').innerHTML = seconds < 10 ? '0' + seconds : seconds;
        
        // If the count down is finished, clear the interval 
        if (distance < 0) {
            clearInterval(x);
            document.querySelector('[data-days]').innerHTML = '00';
            document.querySelector('[data-hours]').innerHTML = '00';
            document.querySelector('[data-minutes]').innerHTML = '00';
            document.querySelector('[data-seconds]').innerHTML = '00';
        }
    }, 1000); // Refresh every second
});
