export function add(numbers: string): number {
  if (numbers === "") return 0;

  let delimiter = /[\n,]/;
  if (numbers.startsWith("//")) {
    if (numbers.startsWith("//[")) {
      const delimiterMatch = numbers.match(/^\/\/(\[.*?\])\n/);
      console.log(delimiterMatch,"delimiterMatch");
      if (delimiterMatch) {
        
        const delimiterPart = delimiterMatch[1];
        const delimiters = delimiterPart.split('][').map(d => d.replace(/[\[\]]/g, ''));
        console.log(delimiters,"delimiters");
        delimiter = new RegExp(delimiters.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'));
        console.log(delimiter,"delimiter");
        numbers = numbers.substring(delimiterMatch[0].length);
      }
    } else {
      const delimiterMatch = numbers.match(/^\/\/(.)\n/);
      if (delimiterMatch) {
        delimiter = new RegExp(delimiterMatch[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        numbers = numbers.substring(4); 
      }
    }
  }

  const numArray = numbers.split(delimiter).map(num => parseInt(num, 10));

  const validNumbers = numArray.filter(num => num <= 1000);
  
  const negatives = validNumbers.filter(num => num < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(",")}`);
  }

  return validNumbers.reduce((sum, num) => sum + num, 0);
}
