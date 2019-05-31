<template functional>
  <div class="Header">
    <div class="Header__Name">
      <h1>{{ props.bio.name }}</h1>
      <span class="Header__Name--Title">{{ props.bio.title }}</span>
    </div>
    <div class="Header__Details">
      <span>{{ props.bio.phone }}</span>
      <span>
        <a :href="'mailto:' + props.bio.email" target="_blank">
          {{ props.bio.email }}
        </a>
      </span>
      <span>{{ props.bio.location }}</span>
    </div>
    <div class="Header__Container">
      <div v-if="props.social" class="Header__Social">
        <ul>
          <li v-for="item in props.social" :key="item.label">
            <span v-if="item.display">
              <a :href="item.url" target="_blank">{{ item.label }}</a>
            </span>
          </li>
        </ul>
      </div>
      <div class="Header__Desc">
        <p>{{ props.bio.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    bio: {
      type: Object,
      required: true
    },
    social: {
      type: Object
    }
  }
}
</script>
<style lang="scss" scoped>
.Header {
  display: flex;
  flex-wrap: wrap;
  color: $header-text-color;
  a {
    color: $header-text-color;
  }
  &__Name {
    margin-right: auto;
  }
  &__Container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__Social {
    margin-right: auto;
    margin: 0;
    padding-top: 1em;
    a {
      padding-right: 1em;
    }
    ul {
      padding: 0;
      display: flex;
      list-style: none;
    }
  }
  &__Details {
    display: flex;
    flex-direction: column;
    @include xs {
      margin-top: 1em;
    }
  }
  &__Desc {
    flex: 0 0 100%;
  }
}
</style>
