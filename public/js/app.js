const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageSecond = document.querySelector("#message-2");
// messageOne.textContent="From js"

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;
  messageOne.textContent = "Loading...";
  messageSecond.textContent = "";
  fetch(`http://localhost:3002/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent=  data.error;
        } else {
           messageOne.textContent = data.location
           messageSecond.textContent = data.forecast;
        }
      });
    }
  );
});
