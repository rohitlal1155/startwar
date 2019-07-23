import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store'


const LoginWrapped = shallow(<Login.WrappedComponent store={configureMockStore} />); //render body having html
//const wrapper = shallow(<Login />);
const instance = LoginWrapped.instance();
//console.log('Login Instance' + JSON.stringify(instance));
// describe what we are testing
describe('Login Component', () => {
    
    // make our assertion and what we expect to happen 
    it('contains h1 tag for main heading', () => {
      //  console.log(LoginWrapped);
        expect(LoginWrapped.find('h1').exists()).toBe(true)
    })

})