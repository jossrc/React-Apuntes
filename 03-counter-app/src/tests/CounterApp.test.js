import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Pruebas en el componente CounterApp', () => {
    // let wrapper; // undefined
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
      wrapper = shallow(<CounterApp/>);
  })

  test('CounterApp : Debe de mostar <CounterApp/> correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('CounterApp : Debe de mostrar el value por defecto de 100', () => {
    const valueTest = 100;
    const wrapper = shallow(<CounterApp value={valueTest} />);

    const valueText = wrapper.find('h2 i').text();

    expect(valueText.trim()).toBe(valueTest.toString());
  });

  test('handleAdd() : Debe de incrementar con el botón Click +1', () => {
     // const btnAdd =  wrapper.find('button').at(0);
     // console.log(btnAdd.html());
     wrapper.find('button').at(0).simulate('click');
     const counterText = wrapper.find('h2 i').text().trim();

     expect(counterText).toBe('11')

  });

  test('handleSubstract() : Debe disminuir con el botón Click -1', () => {

      wrapper.find('button').at(2).simulate('click');
      const counterText = wrapper.find('h2 i').text().trim();

      expect(counterText).toBe('9');

  })

});
