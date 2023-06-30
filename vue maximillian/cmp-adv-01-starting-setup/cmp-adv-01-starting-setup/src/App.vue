
<template>
  <div>
   <TheHeader />
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <template #default="slotProps">
         <h2>{{ slotProps.item }}</h2> -->
         
         <!-- <p>{{ slotProps['another-prop']}}</p>  -->
         <!-- this doesnt work for a reason so i used camelcase -->
         <!-- <p>{{ slotProps['anotherProp']}}</p> -->
      <!-- </template>
    </course-goals> -->
    <button @click="setSelectedComponent('active-goals')">Active Goal</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
  <!--this is reduntant-->
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals  v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
    <!--doing it dynamically-->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
    
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals'
import ManageGoals from './components/ManageGoals'

export default {
  data() {
    return {
      selectedComponent : 'active-goals' ,
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp){
      this.selectedComponent = cmp

    }
  },
  components: {
      TheHeader,
      // BadgeList,
      // UserInfo,
      // CourseGoals
      ManageGoals,
      ActiveGoals
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>