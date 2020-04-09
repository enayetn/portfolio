<template>
  <section>
    <div class="columns">
      <div class="column container is-fluid info-section">
        <h2>
          Resume
          <b-tooltip label="Open in Drive" position="is-right">
            <a
              class="button"
              href="https://drive.google.com/open?id=19k6agIaPZJCFXOKBheQP8LbDVG9oH5La"
              target="_blank"
              ><b-icon icon="open-in-new"> </b-icon
            ></a>
          </b-tooltip>
        </h2>
      </div>
      <div class="column is-three-quarters">
        <b-steps size="is-small">
          <b-step-item
            :label="job.title"
            :clickable="true"
            v-for="(job, index) in resumeData"
            :key="`job-${index}`"
          >
            <h2>{{ job.title }}</h2>
            <div
              class="columns align-left role-container"
              v-for="(role, index) in job.roles"
              :key="`role-${index}`"
            >
              <div class="column is-three-quarters">
                <h3 class="role-title">{{ role.title }}</h3>
                <span
                  class="role-subtitles"
                  v-for="(tag, index) in role.tags"
                  :key="`tag-${index}`"
                >
                  <b-icon :icon="tag.icon" size="is-small"> </b-icon
                  >{{ tag.title }}
                </span>
                <p style="margin:10px;" v-html="role.description"></p>
              </div>
              <div class="column align-right">
                {{ role.date }}
                <b-icon icon="calendar" size="is-small"> </b-icon>
              </div>
            </div>
          </b-step-item>
        </b-steps>
      </div>
    </div>
  </section>
</template>

<script>
const Nuvolo = {
  title: 'Nuvolo',
  roles: [
    {
      title: 'Director - Platform Engineering',
      date: 'Dec 2017 - Present',
      description: `Currently serving as the Director of the Platform Engineering team at Nuvolo. 
      Today, the team is made up of 14 Engineers ranging from Junior Software Engineers all the way up to 
      Senior Architects spread across the planet (US - Remote; Pune, India; Sofia, Bulgaria)<br/><br/>
      Primarily responsible for horizontal architectural components and tooling to enable the 
      Product teams as well as brand new Product Line development`,
      tags: [
        {
          title: 'Remote',
          icon: 'map',
        },
        {
          title: 'Leader',
          icon: 'account',
        },
      ],
    },
    {
      title: 'Innovation Architect',
      date: 'Feb 2016 - Nov 2017',
      description: `Served as an Individual Contributor developing
        on the ServiceNow platform, building new modules and applications. 
        Primarily responsible for new, custom UI development. Additional project details below`,
      tags: [
        {
          title: 'Remote',
          icon: 'map',
        },
        {
          title: 'Individual Contributor',
          icon: 'account',
        },
      ],
    },
  ],
};
const EVG = {
  title: 'Evergreen Systems',
  roles: [
    {
      title: 'Senior Solutions Architect',
      date: 'Oct 2014 - Jan 2016',
      description: `Served as a technology and ITSM process consultant across numerous clients
  including Fox, NIST and Discovery Networks to optimize and implement process improvements. 
  More detailed projects listed <a 
  target="_blank" href="https://drive.google.com/open?id=19k6agIaPZJCFXOKBheQP8LbDVG9oH5La">here</a>
  `,
      tags: [
        {
          title: 'Washington, DC | Remote',
          icon: 'map',
        },
        {
          title: 'Individual Contributor',
          icon: 'account',
        },
      ],
    },
  ],
};

const ACN = {
  title: 'Accenture Federal',
  roles: [
    {
      title: 'Analyst',
      date: 'Oct 2012 - Oct 2014',
      description: `Served as an analyst for a large scale Supply Chain Management project at
      Department of State. Began role on Tier 3 Production Support, implementing bug fix and
      SQL Report generation, moved onto ServiceNow pilot program to implement a global Service Catalog
  `,
      tags: [
        {
          title: 'Washington, DC',
          icon: 'map',
        },
        {
          title: 'Individual Contributor',
          icon: 'account',
        },
      ],
    },
  ],
};

const SCHOOL = {
  title: 'Education',
  roles: [
    {
      title: 'Biomedical Engineering Undergraduate Student',
      date: 'Aug 2008 - May 2012',
      tags: [
        {
          title: 'Duke University | Durham, NC',
          icon: 'map',
        },
        {
          title: 'Student',
          icon: 'account',
        },
      ],
    },
  ],
};

const Resume = [Nuvolo, EVG, ACN, SCHOOL];

export default {
  name: 'Resume',
  data() {
    return {
      resumeData: Resume,
      today: new Date(),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  background: whitesmoke;
}
.align-right {
  text-align: right;
}
.align-left {
  text-align: left;
}
.role-title {
  font-weight: 800;
}
.role-container {
  margin: 10px;
  border: solid 1px #dbdbdb;
  border-radius: 2px;
}
.role-subtitles {
  font-size: 75%;
  background: #dbdbdb;
  margin-right: 8px;
  padding: 2px 8px 2px 8px;
  border-radius: 2px;
}
.button {
  cursor: pointer;
}
</style>
