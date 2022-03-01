import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./index";
import { colors } from "./style";

describe("<Button/>", () => {
  test("Should Render with Label", () => {
    render(<Button color="primary" label="Text" />);

    expect(screen.getByText("Text")).toBeInTheDocument();
  });

  test("Primary must be green", () => {
    render(<Button color="primary" label="Text" />);

    expect(screen.getByText(/Text/i)).toHaveStyle({
      background: colors.primary,
    });
  });
  test("Secondary must be yellow", () => {
    render(<Button color="secondary" label="Text" />);

    expect(screen.getByText(/Text/i)).toHaveStyle({
      background: colors.secondary,
    });
  });
  test("Render Arrow Right icon", () => {
    render(<Button color="secondary" label="Text" icon="arrow-right" />);

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument();
  });
  test("Render Check icon", () => {
    render(<Button color="secondary" label="Text" icon="check" />);

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument();
  });
  test("Render Refresh icon", () => {
    render(<Button color="secondary" label="Text" icon="refresh" />);

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument();
  });
});
