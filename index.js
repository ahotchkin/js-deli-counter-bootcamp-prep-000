let katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  let num = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${num} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`
  } else if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine, name){
  let num = katzDeliLine.length + 1;
  let line = katzDeliLine.forEach(function(num, name){
    return (`${num}. ${name}, `)
  })
  if (katzDeliLine.length > 0){
    return `The line is currently: ${line}`
  } else if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
}
