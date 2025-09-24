// Suprimir advertencias de hidratación
const originalConsoleError = console.error;

console.error = (...args) => {
  const msg = args[0] || '';
  
  // Ignorar errores de hidratación específicos
  if (
    typeof msg === 'string' && 
    msg.includes('Warning: Expected server HTML to contain a matching') &&
    msg.includes('in')
  ) {
    return false;
  }
  
  // Para otros errores, mantener el comportamiento original
  originalConsoleError.apply(console, args);
};
