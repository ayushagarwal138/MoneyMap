import { formatAmount } from './lib/utils';

console.log(formatAmount(1234.56)); // Should output: $1,234.56
console.log(formatAmount('invalid' as any)); // Should output: Invalid amount
console.log(formatAmount(null as any)); // Should output: Invalid amount 