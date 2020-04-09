<template>
  <div>
    <section class="hero header-title">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-white">
            Work Projects
          </h1>
          <h2 class="subtitle">
            This section currently contains two examples of large scale projects
            that I designed and built as an individual contributor and have now
            evolved into full scale products with dedicated teams behind them
          </h2>
        </div>
      </div>
    </section>
    <section>
      <div class="columns">
        <div class="column">
          <div class="video-container">
            <div class="phone-wrapper">
              <video autoplay="true" loop="true" muted="true">
                <source src="@/assets/nuvolo_mobile.webm" />
              </video>
            </div>
            <img src="@/assets/phoneframe.png" />
          </div>
        </div>
        <div class="column is-two-thirds">
          <h2>Offline Mobile Platform</h2>
          <div class="tile is-ancestor pad-right">
            <div class="tile is-6 is-vertical is-parent">
              <div class="tile is-child box">
                <p class="title">Why?</p>
                <p>
                  In the
                  <a
                    href="https://en.wikipedia.org/wiki/Computerized_maintenance_management_system"
                    target="_blank"
                    >CMMS</a
                  >
                  world, there is a need to have asset and service information
                  available at all times, regardless of network conditions, in
                  order to support data lookup and entry use cases
                </p>
              </div>
              <div class="tile is-child box">
                <p class="title">Challenges</p>
                <div class="has-text-left">
                  <p>
                    The major challenges in building an offline mobile
                    application that syncs back to a cloud SaaS are:
                  </p>
                  <p>
                    1) <b>Data Maintenance</b> - Users expect to be able to go
                    offline soon after installing and logging into the
                    application. Furthermore, changes will continue to
                    accumulate on the server, requiring a high level of
                    coordination between mobile client and server to ensure
                    efficient updates to keep the mobile offline database in
                    sync
                  </p>
                  <p>
                    2) <b>Conflict Management</b> - Since changes will continue
                    on the server while mobile users are offline, there is a
                    real risk of update collisions once a User is ready to sync
                    their work
                  </p>
                  <hr />
                  <p>
                    Building on top of the ServiceNow platform introduces a
                    number of unique challenges, such as:
                  </p>
                  <p>
                    1) Enterprise Clients expect a
                    <b>high level of configurability</b> - Data, Views and
                    Workflows should all be modular and configurable to adapt to
                    the business after deployment
                  </p>
                  <p>
                    2) Built on ServiceNow means dealing with an
                    <b>extremely prescriptive backend and database</b> - No
                    access to the OSS solutions that may ease certain components
                    of the architecture, certain design decisions are already
                    made for you
                  </p>
                </div>
              </div>
            </div>
            <div class="tile is-parent">
              <div class="tile is-child box">
                <p class="title">Solution</p>
                <div class="has-text-left">
                  <p>
                    In order to deliver an offline solution under the
                    requirements described, a few major components were
                    developed:
                  </p>
                  <p>
                    1) <b>Hybrid Native Application</b> that can connect to a
                    ServiceNow server, download and persist a portion of the
                    SaaS database and download dynamic UI information
                  </p>
                  <p>
                    2) <b>Admin-facing Configuration Console</b> to support "No
                    Code" and "Low Code" configurability with regards to both
                    synchronization management as well as UI modification.
                    Thorough logging capabilities are also needed to track User
                    and Device data downloads, token management and data
                    synchronization analytics tools
                  </p>
                  <p>
                    3) <b>Developer APIs</b> to enable "Pro Code" developers to
                    snap together new UIs, program dynamic behavior and even
                    build custom components from scratch on the server without
                    ever needing to publish a new app to an App Store
                  </p>
                </div>
                <img
                  src="@/assets/mobile_platform.png"
                  v-on:click="reqFullscreen"
                />
                <p class="is-italic has-text-grey is-size-7">
                  Original sketch of Platform Architecture for Offline Mobile
                  capability. Left box represents items 2 and 3, Right box
                  represents the Mobile Application itself
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="columns">
        <div class="column">
          <h2>Space Desktop</h2>
          <div class="tile is-ancestor pad-right">
            <div class="tile is-6 is-vertical is-parent">
              <div class="tile is-child box">
                <p class="title">Why?</p>
                <div>
                  <p>
                    As businesses scale, so too must their workforce and with
                    it, the number of spaces a business must maintain.
                  </p>
                  <p>
                    Managing building safety information, tracking asset
                    locations or planning enterprise scale moves are just a few
                    of the critical use cases business face in the
                    <a
                      href="https://en.wikipedia.org/wiki/Facility_management"
                      target="blank"
                      >Facility Management</a
                    >
                    domain
                  </p>
                </div>
              </div>
              <div class="tile is-child box">
                <p class="title">Challenges</p>
                <div>
                  <p>
                    Most Facility Management organizations are fairly mature and
                    established in processes, however the nature of the business
                    means there can be a tremendous amount of
                    <b>unstructured data</b>. Historically, drawing tools such
                    as AutoCAD have been used as the application of record --
                    meaning operational data such as employee seat assigments,
                    electrical lines, fire exits and other critical information
                    would live in a drawing (CAD) file. This status quo can make
                    new client onboarding and data migrations particuarly tricky
                    as well.
                  </p>
                  <hr />
                  <p>
                    Furthermore, Facility Managers are
                    <b>used to very visual tools</b>
                    with a tremndous amount of functionality, and so visual,
                    easy to use solutions are expected as the default.
                  </p>
                  <hr />
                  <p>
                    Additionally -- different organizations track their
                    facilities to <b>varying degrees of specificity</b> -- some
                    may categorize by City and State, whereas others may decide
                    to organize around Regions and Countries. This challenge
                    also presents itself when moving down the hierarchy, some
                    organizations choosing to stop tracking at the room level
                    where others may drill down to the Cubicle or even Storage
                    Shelf level
                  </p>
                </div>
              </div>
            </div>
            <div class="tile is-parent">
              <div class="tile is-child box">
                <p class="title">Solution</p>
                <div class="has-text-left">
                  <p>
                    To overcome the challenges described, data model flexibility
                    as well as an extensible Floor Mapping capability were the
                    two major design principles used to build a suite of
                    applications:
                  </p>
                  <p>
                    1) A <b>Flexible Hierarchy Model</b> was designed around the
                    idea of using a single, static model to capture the shared
                    attributes of Spaces such as Area and Visual information
                    used during floor plan rendering, which could then be
                    extended to any other location concept such as Room, Floor
                    or Region
                  </p>
                </div>
                <img
                  src="@/assets/sd_data_model_design.png"
                  v-on:click="reqFullscreen"
                />
                <p class="is-italic has-text-grey is-size-7">
                  Rough diagramming of a Space data model (left) to address
                  flexibility requirements as well as integrate back to the
                  other product suites such as Asset Management (middle) and a
                  comparison to competing products (right)
                </p>
                <div class="has-text-left">
                  <p>
                    2) An <b>Extensible Floor Plan Renderer</b> built on web
                    technologies that could be extended to build different sorts
                    of applications to address any business use case. As an
                    example, the screen shown to the right is an example of a
                    Move Planning application, where Space Coordinators can
                    evaluate different scenarios when considering where to move
                    groups of people. Other applications built on a
                  </p>
                  <p>
                    3) A <b>CAD Import Pipeline</b> designed to simplify the
                    exercise of mapping unstructured CAD data into a normalized
                    database as well as introducing opportunities for
                    improvement such as data clean-up and drawing optimization,
                    resulting in improved performance on the front end
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <b-carousel :interval="10000">
            <b-carousel-item>
              <section class="hero is-medium">
                <img
                  class="space-desktop"
                  v-on:click="reqFullscreen"
                  src="@/assets/space_desktop.png"
                />
                <p class="is-italic has-text-grey is-size-7">
                  A Space Planning application used to evaluate how moving
                  groups of people to different locations might impact key
                  metrics
                </p>
              </section>
            </b-carousel-item>
            <b-carousel-item>
              <section class="hero is-medium">
                <img
                  class="space-desktop"
                  v-on:click="reqFullscreen"
                  src="@/assets/sd_editor.png"
                />
                <p class="is-italic has-text-grey is-size-7">
                  An editor application that allows users to modify room
                  geometry or room attributes visually
                </p>
              </section>
            </b-carousel-item>
          </b-carousel>
        </div>
      </div>
    </section>
    <section class="header-title">
      <h2>
        Miscelaneous Work Projects
      </h2>
      <div class="columns" style="margin:10px">
        <div class="column">
          <div class="box" style="background:#3498db">
            <p class="is-size-5 has-text-white has-text-weight-bold">
              Product Launch Playbook
            </p>
            <b-tag>AUTHOR</b-tag>
            <p class=" has-text-white">
              Led the development of a "Playbook" for product teams to use when
              building product, which includes minimally required standards such
              as i18n and a11y compatability as well as just-in-time help and
              other documentation. The goal of this Playbook is to ensure
              stability and consistency across product lines while maintaining
              autonomy across teams
            </p>
          </div>
        </div>
        <div class="column">
          <div class="box" style="background:#9b59b6">
            <p class="is-size-5 has-text-white has-text-weight-bold">
              Knowledge Overflow
            </p>
            <b-tag>ARCHITECT</b-tag>
            <b-tag>AUTHOR</b-tag>
            <p class=" has-text-white">
              Built to address a knowledge sharing gap at Nuvolo, Knowledge
              Overflow is an internal tool inspired by Stack Overflow to offer
              Nuvolo employees a common place to search for, ask and answer
              questions related to our products
            </p>
          </div>
        </div>
        <div class="column">
          <div class="box" style="background:#27ae60">
            <p class="is-size-5 has-text-white has-text-weight-bold">
              nuux
            </p>
            <b-tag>LEAD</b-tag>
            <b-tag>REVIEWER</b-tag>
            <b-tag>ARCHITECT</b-tag>
            <p class=" has-text-white">
              nuux is Nuvolo's "batteries included" component library, designed
              to be i18n and a11y standards compliant and provide the Nuvolo
              development team rapid access to mature UI Components designed to
              work seamlessly with ServiceNow and adhere to Nuvolo branding
            </p>
          </div>
        </div>
      </div>
      <div class="columns" style="margin:10px">
        <div class="column">
          <div class="box" style="background:#f39c12">
            <p class="is-size-5 has-text-white has-text-weight-bold">
              Sincronia
              <a
                class="button is-small"
                href="https://github.com/nuvolo/sincronia"
                target="_blank"
                ><b-icon icon="open-in-new" size="is-small"> </b-icon
              ></a>
            </p>
            <b-tag>LEAD</b-tag>
            <b-tag>REVIEWER</b-tag>
            <p class=" has-text-white">
              Reviewer for Sincronia - an Open Source Tool built at Nuvolo
              designed to enable developers working within the ServiceNow
              ecosystem to take development work out of ServiceNow and into more
              traditional professional development tools
            </p>
          </div>
        </div>
        <div class="column">
          <div class="box" style="background:#7f8c8d">
            <p class="is-size-5 has-text-white has-text-weight-bold">
              ServiceNow CI/CD
            </p>
            <b-tag>LEAD</b-tag>
            <p class=" has-text-white">
              Lead initiatives to build automated deployment pipelines using
              Azure DevOps and automated testing for ServiceNow based products.
              Due to the proprietary nature of the platform, off-the-shelf
              products to rapidly enable CI/CD for ServiceNow based projects are
              not available
            </p>
          </div>
        </div>
        <div class="column">
          <div class="box" style="background:#80B6A1">
            <p class="is-size-5 has-text-white has-text-weight-bold">
              SN Devs Community
            </p>
            <b-tag>MODERATOR</b-tag>
            <p class=" has-text-white">
              Facilitate and grow the ServiceNow Devs Slack community, an
              informal community where dev-minded folk working within ServiceNow
              congregate
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'WorkProjects',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section.header-title {
  background: #34495e;
}
p a {
  font-weight: 800;
}
section {
  background: #ecf0f1;
}
section.header-title h2 {
  color: white;
}
.pad-right {
  margin: 10px;
}
.video-container {
  position: relative;
  width: 300px;
  margin: auto;
}
.video-container video {
  width: 100%;
  background: black;
  padding: 10px;
}
.video-container img {
  width: 100%;
  z-index: 2;
  display: block;
  position: relative;
}
.phone-wrapper {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 2;
  width: 100%;
  height: 100%;
  padding: 19.3% 0.9%;
}
.space-desktop {
  max-width: 90%;
  min-width: 80%;
  margin: auto;
}
</style>
