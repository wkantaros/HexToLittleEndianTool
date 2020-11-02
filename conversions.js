tle_btn = document.getElementById('toLittleEndianBtn');
tle_in = document.getElementById('toLittleEndian');
tle_op = document.getElementById('toLittleEndianOutput');
abs_btn = document.getElementById('addBackslashBtn');
abs_in = document.getElementById('addBackslash');
abs_op = document.getElementById('addBackslashOutput');

tle_btn.addEventListener('click', () => {
  input = document.getElementById('toLittleEndian').value;
  if (input.substring(0,2) !== "0x"){
    console.log("!")
  } else {
    input = input.substring(2);
  }
  tle_op.value = littleEndian(input);
});

abs_btn.addEventListener('click', () => {
  input = document.getElementById('addBackslash').value;
  abs_op.value = add_backslash(input);
});

// execute same code on enter as well
tle_in.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    tle_btn.click();
  }
});
abs_in.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    abs_btn.click();
  }
});

let littleEndian = (address) => {  
  if (address.length < 8){
    zeros = "0".repeat(8 - address.length);
    address = zeros + address;
  }
  return(add_backslash(reverse(address)));
}

let reverse = (address) => {
  add = "".repeat(8);
  i = address.length - 2; // 6
  j = 0;
  while (i >= 0){
    add = add.substring(0, j) + address.substring(i,i+2) + add.substring(j+2);
    j+=2;
    i-=2;
  }
  return add;
}

let add_backslash = (address) => {
  add = "";
  for (i = 0; i < address.length; i+=2){
    if (i % 2 == 0) 
      add += "\\x";
    add += address.substring(i,i+2);
  }
  return add;
}