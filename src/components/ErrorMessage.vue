<template>

  <section class="src-components-error-message">
    <div v-if="error" class="error-modal">
      <div class="error-modal-content">
        <h2>Error</h2>
        <p>{{errorMessage}}</p>
        <button class="btn btn-warning" @click="dismissError">Close</button>
      </div>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-error-message',
    props: ["error", "errorMessage"],
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {
      dismissError() {
        this.$emit("dismiss")
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.error-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.error-modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}

.error-modal h2 {
  margin-top: 0;
}

.error-modal p {
  margin-bottom: 10px;
}
</style>
