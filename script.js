
const model=document.querySelector('.model');
const overlay=document.querySelector('.overlay');
const btnCloseModel=document.querySelector('.close-model');
const showModel=document.querySelectorAll('.showModel');

for(let i=0;i<showModel.length;i++){
    showModel[i].addEventListener('click',function(){
        console.log('Button Clicked');
        model.classList.remove('hidden');
    });
}