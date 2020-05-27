<template>
  <div class="container">
    <h1>Ordspråk och citat</h1>
    <p>Dela med dig av ditt favoritcitat.</p>
    <div class="create-post">

    <label for="name">Namn</label>
    <br>
    <input type="text" id="name" v-model="name" placeholder="Namn..">
    <br>
    <label for="create-post">Citat</label>
    <br>
    <textarea id="create-post" v-model="text" placeholder="Ditt citat.."/>
    <br>
    <button class="create-btn" v-on:click="createPost">Skapa</button>
    </div>



    <p class="error" v-if="error">{{ error }}</p>

    <div class="posts-container">
      <div class="post"
      v-for="(post, index) in posts"
      v-bind:item="post"
      v-bind:index="index"
      v-bind:key="post._id"
      >

      <div class="text" v-if ="!post.editmode">
  
         "{{ post.text }}"

      </div>

      <textarea class="input-field" v-else v-model="post.text" />
      <p class="name">
        by 
        <span class="post-name" v-if ="!post.editmode" v-on:click="enterEditmode(post)"> 
          {{ post.name }}
        </span>
        <input type="text" class="input-field" v-else v-model="post.name" />
      </p>

      <p class="text-date"> {{`${post.createdAt.getDate()}/${post.createdAt.getMonth()+1}/${post.createdAt.getFullYear()}`}}</p>



      <button class="delete-button" v-on:click="deletePost(post._id)">Radera</button>
      <button class="update" v-on:click="enterEditmode(post)">Ändra</button>
      <button class="update-button" v-on:click="updatePost(post._id, post.name, post.text)">Spara</button>



      </div>
    </div>

  </div>
</template>

<script>
import PostService from'../PostService';

export default {
  name: 'PostComponent',
data() {
  return {
    posts: [],
    error: '',
    name: '',
    text: ''
  }
},
async created() {
  try {
    this.posts = await PostService.getPosts();
  } catch(err) {
    this.error = err.message;
  }
},
methods: {
  async createPost() {
    await PostService.insertPost(this.name, this.text);
    this.posts = await PostService.getPosts();
  },
  async deletePost(id) {
    await PostService.deletePost(id);
    this.posts = await PostService.getPosts();
  },
  async updatePost(id, name, text) {
      await PostService.updatePost(id, name, text);
      this.posts = await PostService.getPosts();
    },
        enterEditmode(post) {
      post.editmode = true;
      this.posts = [...this.posts];
    }
}
};
</script>


<style>
h1 {
  margin: 1rem;
  margin-block-end: 0;
}
.create-post {
  padding-bottom: 1.5rem;
}
p {
  font-weight: 700;
  margin-block-start: 0;
}
input[type=text], textarea {
  font-style: italic;
  height: 1.5rem;
  font-size: 1rem;
  border-radius: 2px;
  border: none;
  background-color:rgba(255, 255, 255, 0.61);
}
input[type=text]#name {
  margin-bottom: 1rem;
}
textarea.input-field {
  text-align: center;
  width: 80%;
  padding: 1rem;
}
::placeholder {
  color: rgb(73, 72, 72);
}
textarea {
  border-radius: 2px;
  font-size: 1rem;
  width: 300px;
  height: 100px;
  border: none;
}
.text, .name, .text-date {
  margin: auto;
  overflow: auto;
  width: 80%;
  padding: 1rem;
  font-weight: 100;
  font-style: italic;
}
.text {
  color:rgb(0, 0, 0);
  font-weight: 400;
}
.name, .text-date {
  margin-top: 0;
  padding: 0;
}

.create-btn {
  height: 1.5rem;
  width: 10%;
  font-size: 0.9rem;
    background-color: rgba(0, 139, 139, 0.637);
    border: none;
}
.create-btn:hover {
  box-shadow: 1px 1px 7px #535353;
}

.delete-button, .update-button, .update {
  margin-top: 1rem;
  margin-right: 1px;
  height: 1.5rem;
  background-color:rgb(116, 194, 194);
  border: none;
}

button:hover {
cursor: pointer;
color: rgb(54, 52, 52);
 border-bottom: 0.5px solid rgb(87, 85, 85);
}
div.post {
  width: 30%;
  display: block;
  margin: auto;
  margin-top: 1%;
  padding: 2%;
  font-weight: 700;
  border-top: 0.5px solid rgb(87, 85, 85);

}
</style>
