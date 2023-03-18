import { render } from "@testing-library/react";
import App from "./App";

describe("Render h1", () => {
  it("Should render h1 when the page is loaded", () => {
    render(<App />);
    const headingElement = screen.getByText(/abc/i);
  });
});
