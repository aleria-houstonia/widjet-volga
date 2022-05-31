import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Header } from "./comps/Header/Header";
import DataContextProvider from "./contexts/DataContext";
import NinthQues from "./pages/NinthQues/NinthQues";
import SixthQuesMan from "./pages/SixthQues/SixthQuesMan";

test("проверка на очистку сформированного url, при нажатии на кнопку 'Х'", () => {
  render(
    <BrowserRouter>
      <DataContextProvider>
        <Header />
      </DataContextProvider>
    </BrowserRouter>
  );
  var btn = screen.getByTestId("header-page-close");
  fireEvent.click(btn);
  expect(window.location.pathname).toEqual("/");
});

test("выбрали 'No, brand isn't important' на 9 странице", () => {
  render(
    <BrowserRouter>
      <DataContextProvider>
        <NinthQues />
      </DataContextProvider>
    </BrowserRouter>
  );
  var btn = screen.getByTestId("btn");
  fireEvent.click(btn);
  expect(window.location.pathname).toEqual("/finish");
});

test("тест 6 страницы при выборе 'I don’t know'", () => {
  render(
    <BrowserRouter>
      <DataContextProvider>
        <SixthQuesMan />
      </DataContextProvider>
    </BrowserRouter>
  );
  var btn = screen.getByTestId("iDontKnow");
  fireEvent.click(btn);
  expect(window.location.pathname).toEqual("/seventh");
});
