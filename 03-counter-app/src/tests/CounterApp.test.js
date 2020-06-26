import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Pruebas en el componente CounterApp', () => {
  test('CounterApp : Debe de mostar <CounterApp/> correctamente', () => {
    const wrapper = shallow(<CounterApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test('CounterApp : Debe de mostrar el value por defecto de 100', () => {
    const valueTest = 100;
    const wrapper = shallow(<CounterApp value={valueTest} />);

    const valueText = wrapper.find('h2 i').text();

    expect(valueText.trim()).toBe(valueTest.toString());
  });
});
