const setupPosts = (data)=>{
  if (data.length){
    data.forEach(doc =>{
      const post = doc.data();

      console.log(post.course);
      console.log(post.prerequisites);
    })
  }

}

fs.collection('posts').get().then(snapshot => {
  setupPosts(snapshot.docs);
})
