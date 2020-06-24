test('Debe ser válido (true)', () => {
  const isActive = false;

  if (!isActive) {
    throw new Error('No está activo');
  }
});
