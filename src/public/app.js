import { createComponent, render } from "../index";

console.log("Building app");

const myButton = createComponent(({ getData }) => {
  return {
    render: ({ props }) => {
      return ` <button type="submit" class="btn btn-primary">
          ${props.name}
        </button>`;
    },
  };
});

const inputBox = createComponent(({ getData }) => {
    return {
      render: ({props}) => {
        return ` <div class="form-group">
            <label for="exampleInput">${props.label}</label>
            <input type=${props.type} class="form-control" />
          </div>`;
      },
    };
  });

  const myForm = createComponent(({ getData }) => {
    return {
      render: ({renderChildren}) => {
        return `<form>${renderChildren([
          inputBox({
            label: "Email address",
            type: "email",
          }),
          inputBox({
            label: "Password",
            type: "password",
          }),
          myButton({
            name: "Submit",
          }),
        ])}</form>`;
      },
    };
  });


render(document.getElementById("root"), myForm());
