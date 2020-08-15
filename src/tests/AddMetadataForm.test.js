import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import AddMetadataForm from '../components/AddMetadataForm';

it('renders without crashing', () => {
  mount(<AddMetadataForm />);
});

// describe('enable and disable button', () => {
//   it('enable button when text input is not empty', () => {
//     const wrapper = mount(<AddMetadataForm />);
//     wrapper.setState({ airQualityAPI: 'Now the button is enabled' });
//     const submitButton = wrapper.find('#submitButton');
//     expect(submitButton.prop('disabled')).toBe(false);
//   });
// });
