interface args {
  name: String;
}

export default {
  Query: {
    test: (_: any, { name }: args) => `Hello ${name || 'world!'}`
  }
};
