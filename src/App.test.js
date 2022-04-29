import { render, screen } from "@testing-library/react";
import App from "./App";

test("1 renders learn react link", () => {
	render(<App />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});

test("2 renders props", () => {
	render(<App name="Andres" />);
	const h1 = screen.getByText("Hola Andres");
	expect(h1).toBeInTheDocument();
});

test("3 renders without props", () => {
	render(<App />);
	const h1 = screen.getByText("Hola invitado");
	expect(h1).toBeInTheDocument();
});

test("4 renders button", () => {
	render(<App />);
	const button = screen.getByRole("button");
	expect(button).toHaveTextContent("Aplicar");
});

test("5 renders code", () => {
	render(<App />);
	const usernameField = screen.getByLabelText("Username");
	expect(usernameField).toBeInTheDocument();
});
