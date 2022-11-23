const tabs = document.querySelectorAll('.tabcontent')
const tabItems = document.querySelectorAll('.tabheader__item')
const tabParent = document.querySelector('.tabheader__items')

let index =0
const hideContent =()=>{
    tabs.forEach((item)=>{
       item.style.display = 'none'
    })
    tabItems.forEach((item)=>{
        item.classList.remove('tabheader__item_active')
    })
}

const showContent =(i=0)=>{
    tabs[i].style.display ='block'
    tabItems[i].classList.add('tabheader__item_active')
}
hideContent()
showContent()

const settime = setInterval(()=>{
    index++
   if(index<4){
    hideContent()
    showContent(index)
   }else{
    index=0
    hideContent()
    showContent(index)
   }
},1000)

tabParent.addEventListener('click',(e)=>{
    if(e.target.classList.contains('tabheader__item')){
        tabItems.forEach((item,i)=>{
            if(e.target===item){
                clearInterval(settime)
                hideContent()
                showContent(i)
            }
    })
    }
})




const modal = document.querySelector('.modal')
const btnOpen = document.querySelector('.btn_white')
let coutnModal = 0
const openModal =()=>{
    coutnModal++
    modal.classList.add('show')
    document.body.style.overflow = 'hidden'
}
const closeModal=()=>{
    modal.classList.remove('show')
    document.body.style.overflow = ''
}
btnOpen.addEventListener('click',openModal)
modal.addEventListener('click',(e)=>{
    if(e.target.classList.contains('modal') || e.target.classList.contains('modal__close')){
        closeModal()
    }
})



    window.addEventListener('scroll', () => {

        const documentHeight = document.documentElement.scrollHeight;
        const currentHeight = window.pageYOffset + document.documentElement.clientHeight;
        const isScrollEnd = Math.abs(documentHeight - currentHeight) <1;
       
        if(isScrollEnd && coutnModal===0){
            openModal()
        }
      
    }
)

setTimeout(()=>{
    if(coutnModal===0){
        openModal()
    }
},50000)