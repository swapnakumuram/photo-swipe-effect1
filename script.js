// alert('hello')  //working chesthunda cheyatleda see
const panels = document.querySelectorAll('.panel')
//console.log(panels)  //5pics select avuthai =console see =code kanapaduthundi
//console.log(panels[o]) // 0,1,2,3,4 any no esthe 1 pic matrame select avuthundi

panels.forEach((panel) => {  //anni pics select avuthai
   // console.log(panel)
  // console.log(123)

  panel.addEventListener('click', () => {
    //console.log('working....')   //working avuthunda leda
    removeActiveClass()// edi custom maname type cheyali
panel.classList.add('active')  // anniti paina click chesthe expand avuthundi

  })
})

function removeActiveClass() { //active html ekkada rasamo theledu so remove cheyadaniki+
    panels.forEach((panel) => {  //picpeddaga kanapadi anni small avuthai
        panel.classList.remove('active')
    })
}





































