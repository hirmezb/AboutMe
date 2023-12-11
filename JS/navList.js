Vue.component('nav-list', {
    data: function() {
        return {
            isVisible: false
        };
    },
    methods: {
        toggleMenu: function() {
            this.isVisible = !this.isVisible;
        }
    },
    template: `
      <div>
        <button class="hamburger" @click="toggleMenu">&#9776;</button>
        <nav :class="{ 'nav-active': isVisible }">
          <ul class="nav_list">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="cycling.html">Cycling</a></li>
            <li><a href="games.html">Games</a></li>
            <li><a href="photography.html">Photography</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      </div>
    `
});

new Vue({
  el: '#app'
});
