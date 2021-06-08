<template>
  <form @submit.prevent="findPictures">
    <input type="date" v-model="state.query">
    <button type="submit">
      Search
    </button>
  </form>
</template>

<script>

import { reactive } from '@vue/reactivity'
import { AppState } from '../AppState'
import { pictureService } from '../services/PicturesService'

export default ({
  setup() {
    const state = reactive({
      query: ''
    })

    return {
      state,
      findPictures() {
        console.log(state.query)
        AppState.currentQuery = state.query
        pictureService.findPictures()
        state.query = ''
      }
    }
  }
})
</script>
