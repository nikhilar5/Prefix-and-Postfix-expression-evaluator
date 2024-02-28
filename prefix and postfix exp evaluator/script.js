function evaluateExpression() {
  let expression = document.getElementById("expression").value;
  let type = document.getElementById("type").value;

  if (type === "prefix") {
    let result = evaluatePrefixExpression(expression);
    document.getElementById("result").innerHTML = "Result: " + result;
  } else if (type === "postfix") {
    let result = evaluatePostfixExpression(expression);
    document.getElementById("result").innerHTML = "Result: " + result;
  } else {
    document.getElementById("result").innerHTML = "Invalid expression type";
  }
}

function evaluatePrefixExpression(expression) {
  let stack = [];
  let tokens = expression.split(" ").reverse();

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    if (!isNaN(token)) {
      stack.push(parseInt(token));
    } else {
      let operand1 = stack.pop();
      let operand2 = stack.pop();
      switch (token) {
        case "+":
          stack.push(operand1 + operand2);
          break;
        case "-":
          stack.push(operand1 - operand2);
          break;
        case "*":
          stack.push(operand1 * operand2);
          break;
        case "/":
          stack.push(operand1 / operand2);
          break;
        default:
          return "Invalid expression";
      }
    }
  }

  return stack.pop();
}

function evaluatePostfixExpression(expression) {
  let stack = [];
  let tokens = expression.split(" ");

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    if (!isNaN(token)) {
      stack.push(parseInt(token));
    } else {
      let operand2 = stack.pop();
      let operand