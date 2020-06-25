import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import FirstApp from '../FirstApp';

describe('Pruebas en el componente FirstApp', () => {
  test('greeting : Debe de mostrar el saludo Bienvenido a React', () => {
    const greetingTest = 'Bienvenido a React';
    // wrapper = render(<FirstApp greeting={greetingTest} />)
    // wrapper.getByText
    const { getByText } = render(<FirstApp greeting={greetingTest} />);

    expect(getByText(greetingTest)).toBeInTheDocument();
  });
});
