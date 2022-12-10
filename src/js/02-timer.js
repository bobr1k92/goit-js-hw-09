import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  input: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes'),
  seconds: document.querySelector('span[data-seconds]'),
}

refs.btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] - new Date() <= 0) {
      Notify.failure("Please choose a date in the future", {
        position: 'right-bottom',
        timeout: 2000,
      });
      refs.btnStart.disabled = true;
    } else {
      refs.btnStart.disabled = false;
    }
  },
};

flatpickr(refs.input, options);

  function convertMs(ms) {
 
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }


  function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }

  refs.btnStart.addEventListener('click', onTiimerClick); 

  function onTiimerClick() {
    const intervalId = setInterval(() => {
      let diffTime = new Date(refs.input.value) - new Date();
      let selectTime = convertMs(diffTime);
      const { days, hours, minutes, seconds } = selectTime;
      console.log(selectTime);
  
      if (diffTime > 0) {
      refs.days.textContent = days;
      refs.hours.textContent = hours;
      refs.minutes.textContent = minutes;
      refs.seconds.textContent = seconds;
      } else {
        clearInterval(intervalId);
        refs.btnStart.disabled = true;
        Notify.success('Time is over', {
          position: 'right-bottom',
          timeout: 2000,
        });
      }
    }, 1000);  
  };
  



