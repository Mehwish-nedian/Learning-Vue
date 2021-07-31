<template>
<div>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    contactLink() {
      if(this.$route.path === `/coaches/${this.selectedCoach.id}`){
        return this.$route.path  +'/contact';
        }
        return this.$route.path;
    },
    fullName() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    },
    description(){
        return this.selectedCoach.description;
    },
    areas(){
        return this.selectedCoach.areas;
    },
    rate(){
        return this.selectedCoach.hourlyRate;
    }
  },
  created() {
    this.selectedCoach = this.$store.getters["coaches/getCoaches"].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>