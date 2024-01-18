import { SearchInput } from ".";

import { userEvent, within } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Input/SearchInput",
  component: SearchInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  value: {
    control: "text",
  },
};

// export const PrimarySearchInput = {
//   args: {
//     value: "Welcome",
//   },
// };

const Template = (args) => <SearchInput {...args} />;

export const PrimarySearch = Template.bind({});

export const SearchFruit = Template.bind({});

SearchFruit.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const searchFruit = await canvas.getByPlaceholderText("Search");
  await userEvent.click(searchFruit);
  await userEvent.keyboard("Fruit");
};
