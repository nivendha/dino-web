module.exports = {
  contextProvider: () => {
    const context = {};
    return {
      createContext: (ctx) => (context = ctx),
      getContext: () => context,
    };
  },
};
