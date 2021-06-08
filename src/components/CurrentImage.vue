<template>
  <img :src="picture" alt="">
</template>

<script>

import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'

export default ({
  setup() {
    return {
      picture: computed(() => AppState.currentImage.url)
    }
  }
})

</script>
