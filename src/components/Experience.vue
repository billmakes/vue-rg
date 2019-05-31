<template functional>
  <div class="Experience">
    <div class="Experience__Container">
      <div class="Experience__Title">
        <h2>{{ props.item.title }}</h2>
      </div>
      <div class="Experience__Details">
        <span>{{ props.item.company }}</span>
        <span>{{ props.item.time }}</span>
        <span>{{ props.item.location }}</span>
      </div>
      <div class="Experience__Desc">
        <span>{{ props.item.desc }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.Experience {
  margin-bottom: 2em;
  &__Container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @include sm {
      flex-wrap: wrap;
    }
  }
  &__Title {
    flex: 0 0 100%;
    @include sm {
      flex: 0 0 60%;
    }
  }
  &__Details {
    display: flex;
    flex-direction: column;
    @include sm {
      padding-bottom: 1em;
      font-size: 0.9rem;
    }
  }
  &__Desc {
    max-width: 30rem;
  }
}
</style>
