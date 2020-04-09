<template>
  <div>
    <Summary class="anchor" id="overview" />
    <Resume class="anchor" id="resume" />
    <WorkProjects class="anchor" id="workprojects" />
    <PersonalProjects class="anchor" id="personalprojects" />
    <!-- <JourneyMap /> -->
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Built by standing on shoulders of giants -
          <a href="https://buefy.org/" target="_blank">buefy</a> and
          <a href="https://vuejs.org/" target="_blank">VueJS</a> 🙏
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import JourneyMap from '@/components/JourneyMap';
import Summary from '@/components/Summary';
import WorkProjects from '@/components/WorkProjects';
import PersonalProjects from '@/components/PersonalProjects';
import Resume from '@/components/Resume';

export default {
  name: 'Portfolio',
  components: { JourneyMap, Summary, Resume, WorkProjects, PersonalProjects },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
