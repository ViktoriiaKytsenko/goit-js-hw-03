"use strict";
function checkForSpam(message) {
  // Приводимо рядок до нижнього регістру, щоб пошук був нечутливим до регістру
  const lowerCaseMessage = message.toLowerCase();

  // Перевіряємо, чи містить рядок заборонені слова "spam" або "sale"
  return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
