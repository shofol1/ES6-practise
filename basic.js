document.getElementById('btn-1').addEventListener('click',function(){
    const container=document.getElementById('container');
    container.style.border='2px solid red';
})
document.getElementById('btn-2').addEventListener('click',function(){
    const friends=document.getElementsByClassName('friend');
    for(let friend of friends){
        friend.style.background='green';
        friend.style.color='white';
        friend.style.padding='5px';
    }

})
document.getElementById('btn-3').addEventListener('click',function(){
    const container=document.getElementById('container');
    const divTag=document.createElement('div');
    divTag.classList.add('friend');
    divTag.innerHTML=`
            <h1>freien-4</h1>
            <p>Cum, beatae ipsum mollitia tempore commodi quaerat voluptatem fugit similique molestiae veniam perferendis tempora corporis, omnis ipsam aliquam porro, voluptate sequi quod necessitatibus. Laudantium, saepe inventore? Itaque esse consectetur aperiam?</p>
    `
    container.appendChild(divTag);
})