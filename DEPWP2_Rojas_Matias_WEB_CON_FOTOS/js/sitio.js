// Interacciones locales: no se envían ni almacenan respuestas.
document.querySelectorAll('[data-case]').forEach(button => {
  button.addEventListener('click', () => {
    const good = button.dataset.case === 'good';
    document.getElementById('casoResultado').textContent = good
      ? 'Correcto. Verifica la fuente original. Si la cita no se puede comprobar, elimínala o reemplázala por una referencia real.'
      : 'Conviene revisarlo. Una cita convincente puede ser inventada; busca la fuente original antes de utilizarla.';
  });
});
const form = document.getElementById('revisionForm');
if (form) {
 const result = document.getElementById('resultado');
 const tasks = ['Contrasta los datos con fuentes originales.','Elimina datos personales innecesarios.','Revisa el lenguaje, la representación y los efectos en otras personas.','Añade las fuentes y declara el apoyo de IA según las reglas de tu actividad.','Estudia el resultado hasta poder explicarlo sin ayuda.'];
 form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  result.replaceChildren();
  const pending = tasks.filter((_,i)=>!document.getElementById('revision'+i).checked);
  const heading = document.createElement('h3'); heading.className='fs-5';
  heading.textContent = pending.length ? 'Tu revisión tiene '+pending.length+' pendiente'+(pending.length===1?'':'s') : 'Completaste los cinco puntos de revisión'; result.append(heading);
  if(pending.length) { const list=document.createElement('ul');list.className='content-list mb-0';pending.forEach(task=>{const li=document.createElement('li');li.textContent=task;list.append(li);});result.append(list); }
  else {const p=document.createElement('p');p.className='mb-0';p.textContent='Buen avance. Comprueba también las reglas de la actividad y conserva tus fuentes. Esta revisión no es una certificación.';result.append(p);}
  result.classList.remove('d-none');result.focus();
 });
 form.addEventListener('reset',()=>{result.replaceChildren();result.classList.add('d-none');});
}
