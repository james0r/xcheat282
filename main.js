// Main Component
function xcheatComponent() {
  return {
    version: 'v2.8.2',
    hash: '',
    sidebar: {
      autoHide: true,
    },
    init(hash) {
      console.log("hash is " + hash);

      this.hash = hash
    },
  };
}