function findNumbers(){

  const input = document.getElementById("numbers").value;
  const nums = input.split(",");

  let output = "";

  for (let i=0; i<nums.length; i++){

    const num = Number(nums[i]);

    if (num % 3 ===0 && num % 2 !==0){
      output += num + ",";
    }
    else{
      continue;
    }
  }
  document.getElementById("result").innerText=output;
}

