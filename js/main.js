const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_x1lbqpj';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

function fetchPokemon(){
  const nombrePokemon = document.getElementById("pokemonName").value.toLowerCase();

  if(nombrePokemon ===""){
      alert("por favor, ingresa el nombre del pokemon")
      return;
  }

  fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
  .then((res)=>{
      if(!res.ok){
          throw new Error("Pokemon no encontrado")
      }
      return res.json();
  })
  .then((data)=> displayPokemon(data))
  .then((data)=>
      displayPokemon(data).catch(error=>
          console.error("error atrapando el pokemon: ",error))
)
}


function displayPokemon(pokemon){
  const pokemonInfo = document.getElementById("PokemonInfomation");
  pokemonInfo.innerHTML = `
  <div class: "container">
    <p><b>Nombre:</b> ${pokemon.name}</p>
    <p><b>ID:</b> ${pokemon.id}</p>
    <!--<p>Altura: $//{pokemon.height}</p>-->
    <!--<p>Ancho: $//{pokemon.weight}</p>-->
    <p><img style="width: 130px; height: auto;" src="${pokemon.sprites.front_default}" alt="${pokemon.name}"></p>
  </div>
  `
}