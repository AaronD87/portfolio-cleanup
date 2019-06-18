<template>
  <div id="app">
    <div id="nav">
      <div class="container f-row">
        <router-link class="logo-holder" to="/">
          <img src="https://camo.githubusercontent.com/0fe7b138152a3825e7516c850de315512f6052ae/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f737761676765722e737667" alt="squiggly bracket logo"/>
        </router-link>
        <div class="menu-items">
          <router-link to="/">Home</router-link>
          <router-link to="/portfolio">Portfolio</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
      </div>
    </div>
    <router-view/>
    <footer>
      <div class="container">
        <div class="logo-holder">
          <img src="https://camo.githubusercontent.com/0fe7b138152a3825e7516c850de315512f6052ae/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f737761676765722e737667" alt="squiggly bracket logo"/>
        </div>
        <p>You can also find me here</p>
        <div class="socials f-row">
          <a href="https://www.github.com/AaronD87" target="_blank" class="single-social github">
            <img src="../src/assets/github.svg" alt="Github logo">
          </a>
          <a href="https://www.linkedin.com/in/amdennis87" target="_blank" class="single-social linkedin">
            <img src="../src/assets/linkedin.svg" alt="Linkedin logo">
          </a>
          <a href="https://www.instagram.com/wonderouswandering" target="_blank" class="single-social instagram">
            <img src="../src/assets/instagram.svg" alt="Instagram logo">
          </a>
          <a href="mailto:amdennis1987@gmail.com" class="single-social mail">
            <img src="../src/assets/mail.svg" alt="Email me envelope">
          </a>
        </div>
      </div>
      <div class="copy">
        <p>&copy; Handcrafted by Aaron Dennis {{currYear}}</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currYear: null,
    };
  },
  methods: {
    handleScroll() {
      const nav = document.getElementById('nav');
      if(window.scrollY > 0) {
        nav.classList.add('sticky');
      } else {
        nav.classList.remove('sticky');
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
    this.currYear = new Date().getFullYear();
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Asap:400,500,600,700|Open+Sans:300,400,600,700&subset=latin-ext');
// reset
body,
h1,
h2,
h3,
h4,
h5,
p,
a,
ul,
li {
  margin: 0;
  padding: 0;
}
body {
  background-color: #F7F7F7;
}
ul, li {
  list-style: none;
}
a {
  text-decoration: none;
  cursor: pointer;
}
* {
  box-sizing: border-box;
  max-width: 100%;
  outline: none;
}
// reset-end
#app {
  h1, h2, h3, h4, h5 {
    font-family: 'Asap', sans-serif;
  }
  font-family: 'Open Sans', sans-serif;
}
.container {
  max-width: 100%;
  width: 1340px;
  margin:auto;
  text-align: center;
  position: relative;
  @media(max-width: 1367px) {
    padding: 0 24px;
  }
}
.f-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#nav {
  padding: 24px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  transition: all .3s;
  z-index: 10;
  &.sticky {
    background-color: #fff;
    -webkit-box-shadow: 0px 1px 20px -9px rgba(41,51,71,0.4);
    -moz-box-shadow: 0px 1px 20px -9px rgba(41,51,71,0.4);
    box-shadow: 0px 1px 20px -9px rgba(41,51,71,0.4);
  }
  .logo-holder {
    width: 40px;
  }
  .logo-fill {
    fill: #17B890;
  }
  .menu-items {
    padding: 0 16px;
    a {
      font-weight: 600;
      color: #293347;
      padding: 0 16px;
      transition: color .3s;
      &:hover {
        color: #17B890;
      }
      &:last-of-type {
        padding-right: 0;
      }
      &.router-link-exact-active {
        color: #17B890;
      }
    }
  }
  .container {
    @media(max-width: 500px) {
      padding: 0;
    }
  }
}
footer {
  background-color: #293347;
  padding: 60px 0;
  padding-bottom: 0;
  text-align: center;
  .container {
    padding-bottom: 60px;
  }
  .logo-holder {
    width: 40px;
    margin: auto;
    margin-bottom: 24px;
    .logo-fill {
      fill: #FFFFFF;
    }
  }
  p {
    color: #fff;
  }
  .socials {
    padding: 40px 0;
    max-width: 300px;
    margin: auto;
    .single-social {
      width: 40px;
      height: 40px;
      border: 2px solid rgba(255, 255, 255, .5);
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all .3s;
      &:hover {
        background-color: #17B890;
        border-color: #17B890;
      }
      &.github {
        &:hover {
          background-color: #6cc644;
          border-color: #6cc644;
        }
      }
      &.facebook {
        &:hover {
          background-color: #3b5998;
          border-color: #3b5998;
        }
      }
      &.linkedin {
        &:hover {
          background-color: #0077B5;
          border-color: #0077B5;
        }
      }
      &.instagram {
        &:hover {
          background-color: #bc2a8d;
          border-color: #bc2a8d;
        }
      }
      img {
        max-width: 24px;
        margin: auto;
      }
    }
  }
  .copy {
    background-color: #202C39;
    padding: 12px 0;
    p {
      font-size: 12px;
      font-weight: 300;
      letter-spacing: .6px;
    }
  }
}
</style>