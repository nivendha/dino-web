const createComponent = require("./component");
const { contextProvider } = require("./provider");
const render = (htmlDom,dinoCompBuildObj)=>{
  if(htmlDom && dinoCompBuildObj)
  htmlDom.innerHTML = dinoCompBuildObj.getDom()
}
const dino = {
  createComponent,
  contextProvider,
  render
};
module.exports = dino;
