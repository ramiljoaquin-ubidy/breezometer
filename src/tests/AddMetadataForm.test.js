import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import AddMetadataForm from '../components/AddMetadataForm';

it('renders without crashing', () => {
  mount(<AddMetadataForm />);
});
