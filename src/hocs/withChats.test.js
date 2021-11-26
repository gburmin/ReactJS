import { render } from "@testing-library/react";

describe("Проверка компонента контейнера", () => {
  it("matches snapshot with no chats", () => {
    const component = render(<withChats chats={{}} />);
    expect(component).toMatchSnapshot();
  });
});
