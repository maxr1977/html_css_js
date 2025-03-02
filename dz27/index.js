const myList = document.querySelector('.myList')

if(myList.children.length>1){
    let newElemet = document.createElement('li')
    newElemet.innerText = 'новый элемент'
    
    myList.replaceChild(newElemet, myList.lastElementChild)
}

