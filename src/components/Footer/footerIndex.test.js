import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Footer from './index';

test('renders content', () => {
	const component = render(<Footer />);

	component.getByText(/SJGuzman - Alkemy.org 2021 */);
});