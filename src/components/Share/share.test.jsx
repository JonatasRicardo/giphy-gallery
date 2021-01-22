import React from 'react';
import { ThemeProvider } from "react-jss";
import {
  render, fireEvent, waitFor, screen
} from '@testing-library/react';
import Share from './index';
import themes from '../../themes/main';

const renderComponent = ({ theme }) =>
  render(
    <ThemeProvider theme={theme}>
      <Share />
    </ThemeProvider>
  );

test('should match snapshot', async () => {
  const { asFragment } = renderComponent({ theme: themes });
  expect(asFragment()).toMatchSnapshot()
});

test('should show the feedback', async () => {
  renderComponent({ theme: themes });
  expect(screen.getByTestId('copy-button')).toHaveTextContent('Copy Link');
  fireEvent.click(screen.getByTestId('copy-button'));
  expect(screen.getByTestId('copy-button')).toHaveTextContent('Link Copied');
});
