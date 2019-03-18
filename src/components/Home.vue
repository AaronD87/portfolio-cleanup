<template>
  <div class="home">
    <Hero :header="header"
          :subhead="subhead"
          showButton
          showImage
          animations />
    <section class="about">
      <div class="container">
        <h2>Aaron Dennis</h2>
        <h3>Portland Oregon Resident</h3>
        <p>I'm a full stack software developer with a focus on the front end from Portland, OR. I enjoy turning complex problems into simple, beautiful and intuitive interface designs. I specialize in brand identity, web design, UI and UX design and of course... front end development. When I'm not coding or pushing pixels, you'll find me in the rock climbing gym or traveling.</p>
      </div>
    </section>
    <section class="projects">
      <div class="container">
        <div class="projects-container f-row">
          <ProjectType v-for="project in projectTypes"
            :key="'item-'+project.icon"
            :header="project.header"
            :icon="project.icon"
            :description="project.description"/>
        </div>
      </div>
    </section>
    <section class="completed-projects">
      <div class="container">
        <h2>Projects</h2>
        <div class="projects-holder f-row">
          <CompletedProject v-for="singleProject in CompletedProjects" :key="'item-'+singleProject.thumbnail" :thumbnail="singleProject.thumbnail" />
        </div>
      </div>
      <router-link class="btn secondary" to="/portfolio">See my work</router-link>
    </section>
    <section class="collaboration">
      <div class="container">
        <h2>Get in touch!</h2>
        <p>Always interested collaborating</p>
        <router-link class="btn" to="/contact">Contact</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from './Hero.vue';
import ProjectType from './ProjectType.vue';
import CompletedProject from './CompletedProject.vue';
export default {
  name: 'home',
  components: {
    Hero,
    ProjectType,
    CompletedProject,
  },
  data() {
    return {
      projectTypes: [
        {
          header: 'Design Tools',
          icon: 'https://sketchapp.com/images/pages/press/sketch-press-kit/app-icons/sketch-mac-icon@2x.png',
          description: 'Sketch, Photoshop, SCSS/SASS, Bootstrap, Flexbox/Grid',
        },
        {
          header: 'Programming Languages',
          icon: 'https://png.pngtree.com/svg/20170719/react_1353128.png',
          description: 'React, Redux, Vue, Javascript, Ruby, Ruby on Rails, MongoDB',
        },
        {
          header: 'What\'s next?',
          icon: 'https://s3-us-west-2.amazonaws.com/svgporn.com/logos/graphql.svg',
          description: 'Vuex, AWS, Vuetify, GraphQL, Gatsby, React Hooks, Firebase',
        },
      ],
      CompletedProjects: [
        {
          thumbnail: 'https://victorthemes.com/wp-content/uploads/2017/06/presentation_800_x_600.jpg'
        },
        {
          thumbnail: 'https://www.glassdoor.com/app/static/img/home/value-prop/sal/value-prop-carousel-desk.EN.png?v=6ba3d4nsa'
        },
        {
          thumbnail: 'https://storage.googleapis.com/sales.appinst.io/2017/09/twitter-lite-pwa-example.png'
        },
      ],
      header: 'Hello, I am <span>Aaron</span>',
      subhead: 'Full stack developer based in Portland OR',
    };
  },
};
</script>

<style lang="scss">
  .about {
    background-color: #293347;
    padding: 60px 0;
    padding-bottom: 250px;
    @media(max-width: 720px) {
      padding-bottom: 80px;
    }
    h2 {
      font-size: 32px;
      color: #fff;
      margin-bottom: 8px;
      font-weight: 600;
      @media(max-width: 520px) {
        font-size: 28px;
      }
    }
    h3 {
      font-weight: 400;
      font-size: 16px;
      color: #fff;
      margin-bottom: 24px;
    }
    p {
      font-weight: 300;
      font-size: 16px;
      color: #fff;
      max-width: 600px;
      margin: auto;
      line-height: 1.64;
    }
  }
  .btn {
    margin-top: 60px;
    @media(max-width: 1075px) {
        margin-top: 30px;
    }
  }
  .projects-container {
    max-width: 1040px;
    justify-content: center;
    align-items: flex-start;
    margin: auto;
    border-radius: 4px;
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: -150px;
    -webkit-box-shadow: 1px 1px 11px -4px rgba(41,51,71,.3);
    -moz-box-shadow: 1px 1px 11px -4px rgba(41,51,71,.3);
    box-shadow: 1px 1px 11px -4px rgba(41,51,71,.3);
    @media(max-width: 1075px) {
        flex-wrap: wrap;
        justify-content: center;
        box-shadow: none;
    }
    @media(max-width: 720px) {
        position: relative;
        flex-direction: column;
        align-items: center;
        top: unset;
        padding-top: 60px;
    }
  }
    .completed-projects {
      padding-top: 240px;
      padding-bottom: 60px;
      @media(max-width: 1075px) {
        padding-top: 530px;
      }
      @media(max-width: 720px) {
        padding-top: 60px;
      }
      h2 {
        font-size: 32px;
        color: #293347;
        @media(max-width: 520px) {
          font-size: 28px;
        }
      }
    }
    .projects-holder {
      padding-top: 50px;
      max-width: 1140px;
      margin: auto;
      justify-content: space-between;
      @media(max-width: 1200px) {
        width: 1000px;
      }
      @media(max-width: 1075px) {
        width: 100%;
        flex-wrap: wrap;
        flex-direction: column;
      }
    }
    .collaboration {
      background-color: #fff;
      padding: 60px 0;
      h2 {
        font-size: 32px;
        color: #293347;
        margin-bottom: 24px;
        @media(max-width: 520px) {
          font-size: 28px;
        }
      }
    }
</style>