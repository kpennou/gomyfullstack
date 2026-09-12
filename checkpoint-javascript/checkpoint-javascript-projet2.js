
//Inversion
function inverserString(str) {
  var result = "";
  for (var i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

//En Capital
function Capitilaze(str) {
  var result = "";
  for (let i = 0; i < str.length; i++) {
    if (i == 0) {
      result = str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}


//Maximum
function max(array) {
  var result = array[0];
  for (let index = 0; index < array.length; index++) {
    if (array[index] > result) {
      result = array[index];
    }
  }
  return result;
}

//Minimum
function max(array) {
  var result = array[0];
  for (let index = 0; index < array.length; index++) {
    if (array[index] < result) {
      result = array[index];
    }
  }
  return result;
}


//Somme
function SumArray(array) {
  var result = 0;
  for (let index = 0; index < array.length; index++) {
    result += array[index];
  }
  return result;
}

//Filtrage
function FilterArray(condition) {
  var result = [];
  for (let index = 0; index < array.length; index++) {
    if (condition) {
      result.push(result[index]);
    }
  }
  return result;
}

//Factoriel
function factoriel(n) {
  var res = 1;
  for (var index = 1; index <= n; index++) {
    res *= index;
  }
  return res;
}


function isPrime(n) {
  for (var index = 2; index < n / 2; index++) {
    if (n % index == 0) return false;
  }
  return true;
}

//Fibonacci
function fibonnci(n) {
  var sequence = [0, 1];
  for (var i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}
function name(params) {
    
}
for (let index = 0; index < arr.length; index++) {
    if (arr[index] == item) {
        return index ;
    } else {
        return -1 ;
    }  
}
