let myChart = null;

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

function makeChart(data) {
  const ctx = document.getElementById("myChart").getContext("2d");
  console.log(data);
  myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: data,
      datasets: [
        {
          label: "3n+1",
          data,
          borderColor: ["black"],
          borderWidth: 1,
        },
      ],
    },
    options,
  });
}

let data = [];

function main(n) {
  data.push(n);

  if (n === 1) {
    if (myChart) {
      myChart.destroy();
    }
    makeChart(data);
    return;
  }

  if (n % 2 === 0) {
    n = n / 2;
  } else {
    n = 3 * n + 1;
  }

  main(n);
}

const inputEl = document.getElementById("numToStart");

main(inputEl.value);

inputEl.addEventListener("input", (e) => {
  const num = e.target.value;
  console.log(num);
  if (num != 0) {
    data = [];
    main(num);
  }
});

function handleOrientationChange() {
  const alertBox = document.getElementById("alert-box");

  console.log(window.innerWidth);
  if (screen.orientation.angle == 0) {
    // you're in PORTRAIT mode
    alertBox.style.display = "grid";
    console.log("portrait");
  } else {
    alertBox.style.display = "none";
    console.log("landscape");
  }
}

window.addEventListener("orientationchange", handleOrientationChange);

if (window.innerWidth < 600) {
  handleOrientationChange();
}
