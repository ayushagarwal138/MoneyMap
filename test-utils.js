const { formatAmount } = require('/Users/ayushagarwal/Projects/Projects(imp)/moneymap/lib/utils');

console.log(formatAmount(1234.56)); // Should output: $1,234.56
console.log(formatAmount('invalid')); // Should output: Invalid amount
console.log(formatAmount(null)); // Should output: Invalid amount 