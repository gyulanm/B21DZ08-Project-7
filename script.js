let saves = document.querySelectorAll('.save')

saves.forEach(function(save,index){
    save.onclick= function(){
    let bookmark = this.querySelector('svg path')
    console.log(bookmark)
    bookmark.classList.toggle('red')
}
})
