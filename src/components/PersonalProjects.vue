<template>
  <section>
    <h2>Personal Projects</h2>

    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical has-text-white">
              <article
                class="tile is-child notification"
                style="background: #55a147"
              >
                <p class="title">
                  Anylytics
                  <a
                    class="button is-small"
                    href="https://github.com/anylytics"
                    target="_blank"
                    ><b-icon icon="open-in-new" size="is-small"> </b-icon
                  ></a>
                </p>
                <p class="subtitle">
                  <b-icon icon="infinity" size="is-small"> </b-icon>
                </p>
                <p>
                  A group of friends hacking on data related visualizations,
                  interactive charts and webapps. Projects are (poorly)
                  cataloged on
                  <a href="https://github.com/anylytics" target="_blank"
                    >Github</a
                  >
                </p>
                <img src="@/assets/anylogo.jpg" />
                <br />
                <b-tag>DESIGN</b-tag>
                <b-tag>DATA</b-tag>
              </article>
              <article class="tile is-child notification is-warning">
                <p class="title">Logo Project</p>
                <p class="subtitle">2015</p>
                <div class="content">
                  <figure class="image">
                    <img src="@/assets/logoproject.png" />
                  </figure>
                  <b-tag>DESIGN</b-tag>
                </div>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-info">
                <p class="title">Feature Factory</p>
                <p class="subtitle">2020</p>
                <div class="content">
                  <p>
                    A board game designed around the idea of Feature Factories
                    -- the goal is to work as a team to build products and ship
                    to market as fast as possible
                  </p>
                  <p>
                    The game is currently a work in progress, but you can play
                    with the Game Piece Editor app
                  </p>
                  <a
                    class="button is-success"
                    href="https://featurefactory.s3-us-west-2.amazonaws.com/index.html"
                    target="_blank"
                  >
                    Launch Feature Factory Editor
                  </a>
                  <hr />
                  A few concept sketches...
                  <b-carousel :interval="5000">
                    <b-carousel-item>
                      <section class="hero is-medium">
                        <img
                          v-on:click="reqFullscreen"
                          src="@/assets/ff_board.png"
                        />
                      </section>
                    </b-carousel-item>
                    <b-carousel-item>
                      <section class="hero is-medium">
                        <img
                          v-on:click="reqFullscreen"
                          src="@/assets/ff_pieces.png"
                        />
                      </section>
                    </b-carousel-item>
                  </b-carousel>
                  <b-tag>DESIGN</b-tag>
                  <b-tag>GAMEDEV</b-tag>
                </div>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-primary">
              <p class="title">
                Game Art Tutorials
                <a
                  class="button is-small"
                  href="https://www.youtube.com/user/khelainteractive"
                  target="_blank"
                  ><b-icon icon="open-in-new" size="is-small"> </b-icon
                ></a>
              </p>
              <p class="subtitle">2014</p>
              <div class="content">
                A
                <a
                  href="https://www.youtube.com/watch?v=GlWdS7RiGns"
                  target="_blank"
                  >pair of videos</a
                >
                that break down video game character creation using Inkscape, a
                vector based illustrator, geared towards a technical audience
              </div>
              <b-tag>DESIGN</b-tag>
              <b-tag>GAMEDEV</b-tag>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article
            class="tile is-child notification has-text-white"
            style="background:#04313a;"
          >
            <div class="content">
              <p class="title">
                Fishy Business
                <a
                  class="button is-small"
                  href="https://www.amazon.com/Khela-Interactive-Fishy-Business/dp/B00L88M222"
                  target="_blank"
                  ><b-icon icon="open-in-new" size="is-small"> </b-icon
                ></a>
              </p>
              <p class="subtitle">2014</p>
              <p>
                Originally an iOS and Android game, currently only available as
                a download through the
                <a
                  href="https://www.amazon.com/Khela-Interactive-Fishy-Business/dp/B00L88M222"
                  target="_blank"
                  >Amazon App Store</a
                >
                for Android
              </p>
              <div class="content">
                <figure class="image">
                  <b-carousel :interval="5000">
                    <b-carousel-item>
                      <section class="hero is-medium">
                        <img
                          v-on:click="reqFullscreen"
                          src="@/assets/fb1.png"
                        />
                      </section>
                    </b-carousel-item>
                    <b-carousel-item>
                      <section class="hero is-medium">
                        <img
                          v-on:click="reqFullscreen"
                          src="@/assets/fb2.png"
                        />
                      </section>
                    </b-carousel-item>
                    <b-carousel-item>
                      <section class="hero is-medium">
                        <img
                          v-on:click="reqFullscreen"
                          src="@/assets/fb3.png"
                        />
                      </section>
                    </b-carousel-item>
                    <b-carousel-item>
                      <section class="hero is-medium">
                        <img
                          v-on:click="reqFullscreen"
                          src="@/assets/fb4.png"
                        />
                      </section>
                    </b-carousel-item>
                    <b-carousel-item>
                      <section class="hero is-medium">
                        <img
                          v-on:click="reqFullscreen"
                          src="@/assets/fb5.png"
                        />
                      </section>
                    </b-carousel-item>
                  </b-carousel>
                </figure>
                <b-tag>DESIGN</b-tag>
                <b-tag>GAMEDEV</b-tag>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PersonalProjects',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.notification {
  padding: 1.25rem 1.5rem 1.25rem 1.5rem;
}
img {
  border-radius: 5px;
}
</style>
