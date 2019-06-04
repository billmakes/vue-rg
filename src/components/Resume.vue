<template>
  <div class="Resume">
    <div class="Resume__Header SectionBlock">
      <Header :bio="bio" :social="social" />
    </div>
    <div class="Resume__Experience SectionBlock">
      <h4 class="Resume__BlockHeader">EXPERIENCE</h4>
      <div v-for="item in experience" :key="item.company">
        <Experience :item="item" />
      </div>
    </div>
    <div v-if="education" class="Resume__Education SectionBlock">
      <h4 class="Resume__BlockHeader">EDUCATION</h4>
      <div v-for="item in education" :key="item.company">
        <Experience :item="item" />
      </div>
    </div>

    <div class="Resume__Skills SectionBlock">
      <h4 class="Resume__BlockHeader">PROFICIENCIES</h4>
      <span class="tag" v-for="item in skills" :key="item">{{ item }}</span>
    </div>
    <div class="Resume__References SectionBlock">
      <hr class="divider" />
      <span>
        <a :href="'mailto:' + bio.email" target="_blank"
          >References available upon request</a
        >
      </span>
    </div>
  </div>
</template>

<script>
import { bio, social, experience, education, skills } from '../../config'
import Header from './Header'
import Experience from './Experience'
export default {
  name: 'Resume',
  components: { Header, Experience },
  data() {
    return {
      bio,
      social,
      experience,
      education,
      skills
    }
  }
}
</script>
<style lang="scss" scoped>
.Resume {
  margin: 4rem auto;
  box-shadow: $box-shadow;
  max-width: 8.5in;
  background-color: #fff;
  color: $content-text-color;
  &__BlockHeader {
    border-radius: 4px;
    padding: 0 0.75em;
    background-color: $primary-color;
    color: $header-text-color;
    height: 2em;
    display: flex;
    align-items: center;
  }
  @include sm {
    margin: 0;
    min-height: 100vh;
    min-width: 100vw;
  }
  &__Header {
    background-color: $primary-color;
  }
  &__References {
    a {
      color: $content-text-color;
      text-decoration: none;
    }
  }
}
.SectionBlock {
  padding: 2em;
  @include xs {
    padding: 1em;
  }
}
.tag {
  display: inline-flex;
  font-size: 0.75rem;
  align-items: center;
  border-radius: 4px;
  height: 2em;
  white-space: nowrap;
  margin: 0.5em;
  padding: 0 0.75em;
  background-color: #f5f5f5;
}
.divider {
  width: 8rem;
  border: 0.125rem solid $primary-color;
  margin: 1em 0;
}
</style>
