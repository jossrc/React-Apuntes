import React from 'react';
import '@testing-library/jest-dom';

import FirstApp from '../FirstApp';
import { shallow } from 'enzyme';

describe('Pruebas en el componente FirstApp', () => {
  test('FirstApp : Debe de mostar <FirstApp/> correctamente', () => {
    const greetingTest = 'Bienvenido a React';
    const wrapper = shallow(<FirstApp greeting={greetingTest} />);

    expect(wrapper).toMatchSnapshot();
  });
});
