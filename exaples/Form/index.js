{
  /* <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form> */
}

import { createComponent } from "./dino";

const inputBox = createComponent(({ getData }) => {
  return {
    render: () => {
      return ` <div class="form-group">
          <label for="exampleInput">${this.props.label}</label>
          <input type=${this.props.type} class="form-control" />
        </div>`;
    },
  };
});

const myButton = createComponent(({ getData }) => {
  return {
    render: () =>
      ` <button type="submit" class="btn btn-primary">
        ${this.props.name}
      </button>`,
  };
});

const myForm = createComponent(({ getData }) => {
  return {
    render: () => {
      return `<form>${this.renderChildren([
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
