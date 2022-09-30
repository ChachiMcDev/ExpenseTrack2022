import React from 'react';
import { shallow } from 'enzyme';
import { MenuLinks } from '../../components/MenuLinks';


test('should render menu links page correctly', () => {
    const wrapper = shallow(<MenuLinks />);
    expect(wrapper).toMatchSnapshot();

})



test('should call startLogout on link click', () => {
    const startLogout = jest.fn()
    const wrapper = shallow(<MenuLinks startLogout={startLogout} />);

    wrapper.find('#logout').simulate('click')
    expect(startLogout).toHaveBeenCalled();

})