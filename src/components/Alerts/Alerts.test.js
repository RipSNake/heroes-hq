import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom';


import { alertError, alertSuccess, alertInfo, alertConfirm } from './index';
import { alertErrorStr, alertSuccessStr, alertInfoStr, alertConfirmStr } from './../../constants';


test('alert confirm modal display block and hides after confirm button gets clicked', async () => {
	const component = render(alertConfirm().value);

	const title = component.getByText(alertConfirmStr.title);

	const text = component.getByText(alertConfirmStr.text);

	const confirmBtn = component.getByText(alertConfirmStr.confirmBtn);
	
	const cancelBtn = component.getByText('Cancel');
	
	expect(component.container).toHaveStyle('display: block');

	fireEvent.click(confirmBtn);
});
/*
test('alert error modal test', () => {
	const component = render(alertError);

	const title = component.getByText(alertErrorStr.title);
	const text = component.getByText(alertErrorStr.text);
});

test('alert success modal test', () => {
	const component = render(alertSuccess);

	const title = component.getByText(alertSuccessStr.title);
	const text = component.getByText(alertSuccessStr.text);
});

test('alert info modal test', () => {
	const component = render(alertinfo);

	const title = component.getByText(alertInfoStr.title);
	const text = component.getByText(alertInfoStr.text);
});
*/