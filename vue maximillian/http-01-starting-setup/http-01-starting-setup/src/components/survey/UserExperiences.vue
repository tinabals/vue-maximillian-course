<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading"> Loading...</p>
      <p v-else-if="isError && !isLoading"> {{ isError }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No Stored Experiences found. Add an experience</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
 
  components: {
    SurveyResult,
  },
  data(){
    return{
      results : [],
      isLoading :  false,
      isError : null
    }
  },
  methods:{
    loadExperiences(){
      this.isLoading = true
      fetch('https://vue-http-demo-b5837-default-rtdb.firebaseio.com/surveys.json')
      .then((response) => {
        if(response.ok){
          return response.json()
        }
      })
      .then(data => {
        this.isLoading = false
        this.isError = false
        const results = []
        for(const id in data){
          results.push({
            id: id,
            name : data[id].name, 
            rating : data[id].rating})
        }
        this.results = results
      })
      .catch(err => {
        this.isLoading = false
        this.isError = 'Failed to fetch data. Pls try again Later'
        console.log(err)
      })
    }
  },
  mounted(){
    this.loadExperiences()
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>