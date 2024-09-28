// get the dom
const gameContainer = document.querySelector(".container");
userResult = document.querySelector(".user-result img");
cpuResult = document.querySelector(".cpu-result img");
result = document.querySelector(".result");
optionImages = document.querySelectorAll(".option-image");

// loop through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener('click', (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "images/rock.png",
    result.textContent = "Wait...";

// loop through each option image element again
    optionImages.forEach((image2, index2) => {
      // if the current index doesn't match the clicked index
      // remove the 'active' class from the other option images
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    // set a timeout to delay the result calculation
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      //get the source of the clicked option image 
    let imageSrc = e.target.querySelector("img").src;
    // set the user image to clicked option image
    userResult.src = imageSrc;

    //generate a random number between 0 and 2 
    let randomNumber = Math.floor(Math.random() * 3);
    // create an array of cpu image options
    let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
    // set the cpu image to a random option from the array
    cpuResult.src = cpuImages[randomNumber];

    // assign a letter value to the cpu option [r for rock, p for paper, and s for scissors]
    let cpuValue = ["R", "P", "S"][randomNumber];
    // assign a letter value to the clicked option (based on index)
    let userValue = ["R", "P", "S"][index];

    // crete and object of all possible outcomes
    let outcomes = {
      RR: "Draw",
      RP: "Cpu",
      RS: "User",
      PP: "Draw",
      PR: "User",
      PS: "Cpu",
      SS: "Draw",
      SR: "Cpu",
      SP: "User",
    };

    // look up the outcome value based on user and cpu options
    let outComeValue = outcomes[userValue + cpuValue];
    // display the result
    result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!` ;
    }, 2500);
  });
});