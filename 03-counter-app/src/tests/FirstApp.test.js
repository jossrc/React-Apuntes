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

  test('FirstApp : Debe de mostar el subTitle enviado por props', () => {
    const greetingTest = 'Bienvenido a React';
    const subTitleTest = 'Aprendiendo Testing';
    const wrapper = shallow(
      <FirstApp greeting={greetingTest} subTitle={subTitleTest} />
    );

    const textSubTitle = wrapper.find('h4 i').text(); // document.querySelector()
    expect(textSubTitle).toBe(subTitleTest);
  });
});
