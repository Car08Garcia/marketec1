document.addEventListener("keyup", e =>{

    if (e.target.matches("#buscador")){
  
        if (e.key =="Enter")e.target.value = " ";
  
        document.querySelectorAll(".container").forEach( inicio =>{
            inicio.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            
              ?inicio.classList.remove("filtro")
              :inicio.classList.add("filtro")        
        } 
        )}
  })
