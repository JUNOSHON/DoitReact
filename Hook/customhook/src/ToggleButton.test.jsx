import {render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";

import ToggleButton from './ToogleButton';

test("button text changes from ON to OFF when clicked",()=> {
  render(<ToggleButton></ToggleButton>);

  const button = screen.getByRole("button");

  expect(button).toHaveTextContent("OFF");

  userEvent.click(button);

  expect(button).toHaveTextContent("ON");
});

test("button text is ON given initial set to true",() => {
  render(<ToggleButton initial={true}></ToggleButton>);

  expect(screen.getByRole("button",{name: /on/i})).toBeInTheDocument();
});