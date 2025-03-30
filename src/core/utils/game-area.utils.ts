export const generateCardNumbers = () => {
    const numbers = Array.from({ length: 18 }, (_, index) => index + 1); 
    const pairedNumbers = [...numbers, ...numbers]; 
    return pairedNumbers.sort(() => Math.random() - 0.5);
};