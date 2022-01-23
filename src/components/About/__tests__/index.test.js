import React from 'react';
//The render function will do just what its name implies: "render" the component. What actually happens is that Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered).
//The cleanup function is used to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results.
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

//describe function declares the component we are testing 
describe('About component', () =>{
    //render the about test 
    //baseline test to verify the component is rendering 
    it('renders', () => {
        render(<About />);
    });
    //compare snapshots of the DOM snapshot is a serialized version of the DOM node structure
    it('matches snapshot DOM node structure', () => {
        //use as fragment to return snapshot of the about component
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})
