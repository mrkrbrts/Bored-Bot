document.getElementById("idea-btn").addEventListener("click", function(){
    console.log("clicked")
    fetch("https://apis.scrimba.com/bored/api/activity")
          .then(response => response.json())
          .then(data => {
              console.log(data)
              document.getElementById("activity-text").innerHTML = data.activity
          })
})

