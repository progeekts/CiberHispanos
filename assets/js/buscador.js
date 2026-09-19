const INDEX=[
["Me amenazan y tengo miedo","amenaza peligro agresión pegar encontrar casa colegio","casos/amenaza-inmediata.html","Urgente"],
["Me chantajean con imágenes íntimas","sextorsión chantaje desnudo foto vídeo pagar","casos/sextorsion.html","Prioritario"],
["Han creado un perfil falso","suplantación identidad cuenta perfil hacerse pasar","casos/perfil-falso.html","Cuenta"],
["Deepfake o desnudo falso","ia inteligencia artificial deepfake desnudo falso sexual","casos/deepfake-intimo.html","IA"],
["Me atacan en el grupo de clase","colegio instituto whatsapp clase compañeros bullying","casos/grupo-clase.html","Centro educativo"],
["Me da vergüenza contarlo","miedo vergüenza contar padres adulto ayuda","casos/me-da-verguenza.html","Apoyo"],
["Ciberacoso","insultos humillación rumores burlas mensajes acoso","guias/ciberacoso.html","Guía"],
["Grooming","adulto menor sexual quedar regalos secreto","guias/grooming.html","Prioritario"],
["Difusión íntima","foto vídeo audio sexual sin permiso retirada","difusion-intima.html","Prioritario"],
["Guardar evidencias","capturas pruebas url fecha mensajes conservar","guardar-pruebas.html","Herramienta"],
["Proteger mis cuentas","contraseña hackeada sesión correo 2fa acceso","seguridad-cuentas.html","Seguridad"],
["Ayuda oficial","017 anar policía guardia civil aepd 112","recursos.html","Recursos"],
["Familias","padre madre familia hijo menor ayudar","ruta-familias.html","Familias"],
["Centros educativos","profesor tutor orientador protocolo coordinador bienestar","ruta-centros.html","Educación"],
["Marco legal","ley delito denuncia lopivi código penal","marco-legal.html","Información"]
];const input=document.querySelector("#site-search"),out=document.querySelector("#search-results");function norm(s){return s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function draw(q=""){const terms=norm(q).trim().split(/\s+/).filter(Boolean);const rows=INDEX.map(x=>[x,terms.reduce((n,t)=>n+(norm(x[0]+" "+x[1]+" "+x[3]).includes(t)?1:0),0)]).filter(x=>!terms.length||x[1]>0).sort((a,b)=>b[1]-a[1]).slice(0,12);out.innerHTML=rows.map(([x])=>'<a class="search-hit" href="'+x[2]+'"><span><b>'+x[0]+'</b><small>'+x[3]+'</small></span><i>→</i></a>').join("")||'<p>No encuentro una coincidencia clara. Prueba con palabras sencillas como “amenazas”, “fotos”, “cuenta”, “adulto” o “clase”.</p>'}input.addEventListener("input",()=>draw(input.value));draw();