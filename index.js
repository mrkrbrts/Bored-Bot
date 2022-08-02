document.getElementById("idea-btn").addEventListener("click", function(){
    console.log("clicked")
    
    changeGradient();

    fetch("https://apis.scrimba.com/bored/api/activity")
          .then(response => response.json())
          .then(data => {
              console.log(data)
              document.getElementById("activity-text").innerHTML = data.activity
          })
})

function getRandomNumber(maxNum) {
    return Math.floor(Math.random() * maxNum)
}

function changeGradient() {
    // for some reason trying to change backgroundColor in js wasn't working!
    document.body.style.backgroundImage = `linear-gradient(28deg, rgba(${getRandomNumber(255)},${getRandomNumber(255)},${getRandomNumber(255)},0.6) 0%, rgba(234,234,253,1) 50%, rgba(${getRandomNumber(255)},${getRandomNumber(255)},${getRandomNumber(255)},0.6) 100%)`
}
