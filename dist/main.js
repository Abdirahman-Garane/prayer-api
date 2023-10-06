let selected = () => {
  let selectedItem = document.getElementById("mySelect");
  let selectedOption = selectedItem.options[selectedItem.selectedIndex];
  getSalat(selectedOption.text);
};

let getSalat = (cityPara = "jeddah") => {
  axios
    .get(`http://api.aladhan.com/v1/calendarByCity?country=SA&city=${cityPara}`)
    .then((respond) => {
      let time = respond.data.data[0].timings;
      getId("fajr", time.Fajr.split(" ")[0]);
      getId("duhur", time.Dhuhr.split(" ")[0]);
      getId("asar", time.Asr.split(" ")[0]);
      getId("maghreb", time.Maghrib.split(" ")[0]);
      getId("Ashia", time.Isha.split(" ")[0]);

      date.innerHTML = respond.data.data[0].date.readable;
      city.innerHTML = cityPara;
    });
};

getSalat();
let getId = (id, time) => {
  document.getElementById(id).innerHTML = time;
};
