<template>
  <div class="portfolio">
    <Hero header="Portfolio" subhead="Always making something new..."/>
    <p>{{info}}</p>
    <ul>
      <li>
        <a href="https://github.com/team-zoo/zoo-backend" target="_blank">
          <img
            src="https://res.cloudinary.com/dvbethtz8/image/upload/v1560825399/zoo-photo_1_jkbr4m.png"
            width="100%"
            height="100%"
            class="portfolio-image"
          >
          <div class="info">
            <p>NODEJS</p>
            <p>INQUIRER</p>
          </div>
        </a>
      </li>
      <li>
        <a href="https://github.com/TeamAnts/TeamAnts.github.io" target="_blank">
          <img
            src="https://res.cloudinary.com/dvbethtz8/image/upload/v1560833185/Screen_Shot_2019-06-17_at_9.45.59_PM_ed3zat.png"
            width="100%"
            height="100%"
            class="portfolio-image"
          >
          <div class="info">
            <p>HTML</p>
            <p>CSS</p>
            <p>JAVASCRIPT</p>
          </div>
        </a>
      </li>
      <li>
        <a href="https://github.com/team-thermometer/homebrewdogs-app" target="_blank">
          <img
            src="https://res.cloudinary.com/dvbethtz8/image/upload/v1560825208/homebrewdog_wg3pbl.png"
            width="100%"
            height="100%"
            class="portfolio-image"
          >
          <div class="info">
            <p>HTML</p>
            <p>CSS</p>
            <p>JAVASCRIPT</p>
            <p>POSTGRESQL</p>
            <p>VUE</p>
            <p>API</p>
          </div>
        </a>
      </li>
      <li>
        <a href="https://github.com/team-q/q-bot-sandbox" target="_blank">
          <img
            src="https://res.cloudinary.com/dvbethtz8/image/upload/v1560825110/q-bot_dt6pp7.png"
            width="100%"
            height="100%"
            class="portfolio-image"
          >
          <div class="info">
            <p>HTML</p>
            <p>REACT</p>
            <p>FIREBASE</p>
            <p>REACT HOOKS</p>
            <p>SCSS</p>
          </div>
        </a>
      </li>
      <li>
        <a href="https://github.com/ErlendLygre/wagefinder" target="_blank">
          <img
            src="https://res.cloudinary.com/dvbethtz8/image/upload/v1560825491/bills_phone-14991987f315ce9978b1f4f0456f1e5807d4642f6c08c7118dfd26704ce9ad56_kqayoe.png"
            width="100%"
            height="100%"
            class="portfolio-image"
          >
          <div class="info">
            <p>RUBY/RAILS</p>
            <p>SCSS</p>
            <p>JAVASCRIPT</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
export default {
  name: 'portfolio',
  components: {
    Hero
  }
};
</script>

<style lang="scss" scoped>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-auto-rows: 250px;
  grid-auto-flow: dense;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-top: -200px;
  margin-bottom: 200px;
}
li:nth-child(3n) {
  grid-column: span 1;
  grid-row: span 2;
}
li {
  align-items: center;
  min-width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: #fffefd;
}
li {
  position: relative;
  overflow: hidden;
  &:hover {
    .portfolio-image {
      filter: grayscale(1);
      transform: scale(1.03);
    }
    .portfolio-image + .info {
      opacity: 1;
    }
  }
}
.portfolio-image {
  transition: 500ms;
  filter: grayscale(0);
  position: absolute;
  z-index: -1;
}
.info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  top: 0;
  transition: 500ms;
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(23, 24, 24, 0.6);
  text-align: center;
}
p {
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  align-content: center;
  display: inline;
  padding: 5px;
  margin: 5px;
}
</style>