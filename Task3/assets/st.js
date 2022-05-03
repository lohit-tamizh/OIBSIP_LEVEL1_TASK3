let cel = document.getElementById('cel');
let fahr = document.getElementById('fahr');

cel.oninput = () => {
      let output = (parseFloat(cel.value) * 9) / 5 + 32;
      fahr.value = parseFloat(output.toFixed(2));
};
fahr.oninput = () => {
    let output = ((parseFloat(fahr.value) - 32) * 5) / 9;
    cel.value = parseFloat(output.toFixed(2));

};
