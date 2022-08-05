import { createComponent } from "../index";

console.log('Building app')


const myButton = createComponent(({ getData }) => {
    return {
      render: ({props}) =>{
        return(` <button type="submit" class="btn btn-primary">
          ${props.name}
        </button>`)}
    };
  });

  const btnElm1 =  myButton({
    name: "Submit",
  })

  console.log(btnElm1.getDom())