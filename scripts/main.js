// selector
const batContainer = document.querySelector(".employee");

// dom render

const DomRender = (location, HtmlInsert) => {
  location.innerHTML += HtmlInsert;
};

// api Calls
const ApiData = {
  getEmployees: function() {
    return (
      fetch(
        "http://localhost:3000/employees?_expand=department&_expand=computer",
        {
          cache: "no-cache"
        }
      )
        //parse data
        .then(data => data.json())
    );
  }
};

// factory function
const createBatCard = batObj => {
  return `
    <div class="card">
        <header class="employee__name">
        <h2>Name: ${batObj.name}</h2></header>
        <section class="employee__department"><h3>Title: ${
          batObj.department.department
        }</h3></section>
        <!-- end of department -->
        <section class="employee__computer"><p>Computer: ${
          batObj.computer.computer
        }</p></section>
        <!-- end of cpu section -->
      </div>
    `;
};
// insert into the dom
ApiData.getEmployees().then(batArray => {
  batContainer.innerHTML = "";
  batArray.forEach(employee => {
    console.log(employee);
    const HtmlInsert = createBatCard(employee);
    DomRender(batContainer, HtmlInsert);
  });
});
