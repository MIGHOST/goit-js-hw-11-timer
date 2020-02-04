"use strict";


class Timer {
  constructor({
    selector,
    targetDate
  }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.days = document.querySelector('span[data-value="days"]'),
      this.hours = document.querySelector('span[data-value="hours"]'),
      this.minutes = document.querySelector('span[data-value="mins"]'),
      this.seconds = document.querySelector('span[data-value="secs"]')
      this.timerId = 0;
      this.startTime = Date.now();
      this.deltaTime = this.targetDate.getTime() - this.startTime;
      this.updateTimer(this.deltaTime);
      this.start()
    }


    start() {
      this.timerId = setInterval(() => {
        this.startTime = Date.now();
    
        this.deltaTime = this.targetDate.getTime() - this.startTime;
    
        if (this.deltaTime < 0) {
          this.stop();
        }
    
        this.updateTimer(this.deltaTime);
      }, 1000);
    }
    
    stop() {
      clearInterval(this.timerId);
      this.deltaTime = 0;
      this.updateTimer(this.deltaTime)
    }
    updateTimer(time) {
      this.days.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      this.hours.textContent = this.pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      this.minutes.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      this.seconds.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
    }

  pad(value) {
  return String(value).padStart(2, '0');
}
};

new Timer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2020'),
});

