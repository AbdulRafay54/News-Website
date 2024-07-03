source = "bbc-news";
let apiKey = "3145dd2bf5264876848d99c8197b0a23";

const submit = () => {
  // fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apiKey}`)
  //fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apikey=3145dd2bf5264876848d99c8197b0a23`)
  fetch(`https://newsapi.org/v2/top-headlines?india=us&apiKey=${apiKey}`)

    .then((res) => {
      return res.json();
    })
    .then((data) => {

      console.log(data)
    })
    .catch((err) => {
      console.log(err);
    });
}
submit();
// const showData = (res) => {
  // let accordionExample = document.getElementById("accordionExample");

  // let news = `<div class="accordion-item">
  //   <h2 class="accordion-header" id="headingTwo">
  //     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
  //       aria-expanded="false" aria-controls="collapseTwo">
  //       ${articles[news]}
  //     </button>
  //   </h2>
  //   <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
  //     data-bs-parent="#accordionExample">
  //     <div class="accordion-body">
  //     ${articles[news]}
  //     </div>
  //   </div>
  // </div>`

  // accordionExample += news
// }

// showData();
