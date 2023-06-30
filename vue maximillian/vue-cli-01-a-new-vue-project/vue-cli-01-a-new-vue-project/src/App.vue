<template>
    <section>
      <new-friend @add-contact="addContact">
      </new-friend>
       <header>
        <h2> My Friends </h2>
       </header>
        <ul>
           <friend-contact
           v-for="friend in friends"
           :id="friend.id"
           :key="friend.id"
           :name ="friend.name"
           :phone-number = "friend.phone"
           :email-address = "friend.email"
           :is-favorite = "friend.isFavorite"
           @toggle-favorite = "toggleFavoriteStatus"
           @delete = "deleteContact"
           ></friend-contact>
           <!-- <friend-contact  v-for="friend in friends" :key="friend.id" v-bind="friends"></friend-contact> -->
        </ul>
    </section>
</template>

<script>
export default {
    data(){
        return{
            friends : [
                {
                    id : 'manuel',
                    name : 'Manuel Lorenz',
                    phone : '012 345 6798',
                    email : 'manuel@localhost.com',
                    isFavorite : true
                },
                {
                    id : 'julie',
                    name : 'Julie Johnz',
                    phone : '013 995 56998',
                    email : 'julie@localhost.com',
                    isFavorite : false
                }
            ]
        }
    },
    methods: {
      toggleFavoriteStatus(friendId){
            const identifiedFriend = this.friends.find(friend => friend.id === friendId)
            console.log(identifiedFriend)
            identifiedFriend.isFavorite = !identifiedFriend.isFavorite
      },
      addContact(name,phone,email){
        const newFriendContact = {
          id : new Date().toISOString(),
          name : name,
          phone : phone,
          email : email,
          isFavorite : false
        }
        this.friends.push(newFriendContact)
      },
      deleteContact(friendId){
        console.log(friendId)
         this.friends = this.friends.filter(friend => friend.id !== friendId) //returning elements without the one found
      }
    }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #4fc08d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app, #app2 {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 , #app2  h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  /* color: #4fc08d; */
  margin: 0 0 1rem 0;
}

#app p , #app2 p {
  font-size: 1.25rem;
  font-weight: bold;
  border: 1px solid #4fc08d;
  background-color: #4fc08d;
  color: white;
  padding: 0.5rem;
  border-radius: 25px;
}

#app input , #app2 input{
  font: inherit;
  border: 1px solid #ccc;
}

#app input:focus , #app2 input:focus{
  outline: none;
  border-color: #1b995e;
  background-color: #d7fdeb;
}

#app button , #app2 button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>