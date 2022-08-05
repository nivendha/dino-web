const dependencies = require ("./dependencies");
const { contextProvider } =require ("./provider");

const createComponent = (componentFn) => {
  class DinoCompoennt {
    #stateChangeQuee = [];
    #checkRerender = false;
    #reRender = null;
    #doRender() {
      if (this.#checkRerender && this.#stateChangeQuee.length > 0) {
        let { obj, cbFn, pre } = this.#stateChangeQuee.pop();
        let newState = null;
        if (obj instanceof Function) {
          newState = obj(pre);
        } else {
          newState = obj;
        }
        if (newState !== pre) {
          isStateChanged = true;
          this.state = newState;
          cbFn && cbFn(this.state);
          window.requestAnimationFrame(()=>this.#doRender());
        }
      } else if (this.#checkRerender) {
        this.#reRender();
        this.#checkRerender = false;
      }
    }
    constructor(context, reRender) {
      this.context = context;
      this.props = {};
      this.state = null;
      //   this.$children = [];
      this.#reRender = reRender;
      window.requestAnimationFrame(()=>this.#doRender());
    }
    renderChildren(childrenArray) {
      if (Array.isArray(childrenArray)) {
        return childrenArray.reduce((acc, compBuildFn) => {
          acc = acc + compBuildFn.getDom();
          return acc
        }, "");
      }
    }
    setState(obj, cbFn) {
      stateChangeQuee.push({
        obj,
        cbFn,
        pre: { ...this.state },
      });
      if (this.#checkRerender == false) {
        this.#checkRerender = true;
        window.requestAnimationFrame(this.#doRender);
      }
    }
  }
  class CompoenntBuilder {
    #isInitaled = false;
    #config = null;
    #dom = null;
    constructor(config) {
      this.comp = new DinoCompoennt(
        contextProvider.getContext(),
        this.reRender
      );
      this.#config = config;
      this.#dom = null;
    }
    build(props) {
      if (!this.#isInitaled && this.#config.init)
        this.#config.init.apply(null, [this.comp.context]);
      this.#isInitaled = true;
      if (this.#config.beforeRender) {
        this.#config.beforeRender.apply(this.comp, [this.comp]);
      }
      this.comp.props = { ...props };
      this.#dom = this.#config.render.apply(this.comp, [this.comp]);
      return this;
    }
    getDom() {
      // will be used by CompoenntBuilder's renderChildren for building the HtmlDOM
      //OR
      // will be used by render for building the HtmlDOM
      return this.#dom;
    }
    reRender(forceRenrender) {
      this.#config.render.apply(this.comp, [this.comp]);
      this.#config.afterUpdate.apply(this.comp, [this.comp]);
    }
  }

  const dinoCompoennt = new CompoenntBuilder(componentFn(dependencies));
  return dinoCompoennt.build.bind(dinoCompoennt);
};

module.exports = createComponent;
