<template>
    
        <base-card>
  <!-- it is automatically added to Button in the BaseButton component(the @click) -->
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode"> 
        Stored Resources
        </base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">
        Add Resources
        </base-button>
  
  </base-card>
  <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
    import StoredResources from './StoredResources';
    import AddResource from './AddResource';

export default {
    components : {
        StoredResources,
        AddResource
    },
    computed:{
        storedResButtonMode(){
            return this.selectedTab === 'stored-resources' ? null : 'flat'
        },
        addResButtonMode(){
           return this.selectedTab === 'add-resource' ? null : 'flat'
        }

    },

    data(){
        return{
            selectedTab : 'stored-resources',
            storedResources : [
                {
                    id : 'official-guide',
                    title : 'Official Guide',
                    description : 'The Official Vue.js Documentation',
                    link : 'https://vuejs.org'
                },
                {
                    id : 'google',
                    title : 'Google',
                    description : 'Learn to google..',
                    link : 'https://google.org'
                }
            ]
        }
    },
    provide(){
        return{
            resources : this.storedResources,
            addResource : this.addResource,
            deleteResource : this.removeResource
        }
    },
    methods: {
        setSelectedTab(tab){
            this.selectedTab = tab
        },
        addResource(title,description, url){
            const newResource = {
                id : new Date().toISOString(),
                title : title,
                description : description,
                link : url
            }
            this.storedResources.unshift(newResource)
            this.selectedTab = 'stored-resources'
        },
        removeResource(resId){
            //wont work
            // this.storedResources = this.storedResources.filter(resource => resource.id !== resId )
            // console.log(this.storedResources.length)

            const resourceIndex = this.storedResources.findIndex(res => res.id === resId)
              this.storedResources.splice(resourceIndex, 1)
        }
    }

}
</script>

<style>

</style>