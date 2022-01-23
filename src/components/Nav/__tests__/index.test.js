import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

//add describe function to declare what this test suite will be testing 
describe('Nav component', () => {
    it('renders', () => {
        render(<Nav />);
    });

    it('matcher snapshot', () => {
        const {asFragment } = render(<Nav />);
        //assert value comparison 
        expect(asFragment()).toMatchSnapshot();
    });

})

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        //arrange 
        const { getByLabelText } = render(<Nav />);
        //assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

describe('links are visible', () => {
    it('inserts text into links', () => {
        //verify that text content is inserted into the a tags 
        //use get test by id to return a dom element 
        //add data-testid to the <a> element, data test id is similar to using an element id, it is more specific 
        const { getByTestId } = render(<Nav />);

        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})