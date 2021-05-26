// Main Component
function xcheatComponent() {
  return {
    version: 'v2.8.2',
    hash: '',
    sidebar: {
      autoHide: true,
      isActive: false
    },
    init(hash) {
      this.hash = hash
      var _this = this

      function expandSidebarIfXl(x) {
        if (x.matches) { // If media query matches
          _this.sidebar.autoHide = false
          _this.sidebar.isActive = true
        } 
      }
      
      var x = window.matchMedia("(min-width: 1220px)")
      expandSidebarIfXl(x)
    },
    hideSidebar() {
      if (this.sidebar.autoHide === true) {
        this.sidebar.isActive = false
      }
    }
  };
}