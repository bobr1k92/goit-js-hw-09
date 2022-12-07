const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
};


const colorGenerator = {

    intervalId: null,
    isActive: false,
    start() {

        if (this.isActive){
            return;
        };

        function getRandomHexColor() {
            return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
          };
        this.isActive = true;

        this.intervalId = setInterval(() =>{
                document.body.style.backgroundColor = getRandomHexColor();
                console.log(getRandomHexColor);
          }, 1000);
    },
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
    }
};

refs.startBtn.addEventListener('click', () => {
    colorGenerator.start();
});

refs.stopBtn.addEventListener('click', () => {
    colorGenerator.stop();
})


