Flor, primero que nada felicitarte por un excelente trabajo. El maquetado de tu pagina es excelente, cada detalle esta cuidado, todo funciona como se lo espera. Tu codigo ademas esta prolijo, bien tabulado, los nombres son claros y descriptivos, es muy facil de recorrer y entender como todo se ubica. A nivel archivos, todo esta bien organizado y claro. 

Me gusta mucho que hayas incorporado elementos del diseño mas complejo y lo bien que resolviste ciertos problemas. Me encanta el detalle del footer, suman muchisimo cosas asi. En definitiva, tu web se ve muy profesional, cuesta creer que esté hecha por alguien que aprendió hace menos de un año. Sentite muy orgullosa. 

Dejo algunas observaciones para que tomes en cuenta en este trabajo y en los proximos que emprendas:

- Tenes algunos warnings en la consola que estaria bueno corregir, ya que es algo a lo que uno presta atencion al mirar
codigo ajeno y queda bien que la consola este lo mas prolija posible. Son siempre lo mismo: estas importando Router pero no lo estas usando. 

- Como comentamos en clase, la API KEY es una contraseña y por lo tanto nunca debe estar subida a un repo publico. Si es solo para mostrar tu codigo en github, mi sugerencia es reemplazar el string que tiene la api key por un API_KEY y cualquier persona que te lea va a entender a que se refiere. Una mejor alternativa seria incluir una variable de entorno: no dejes de consultarme si te interesa hacerlo. 


- El substring "https://api.themoviedb.org/3/" se repite muchas, muchas veces a lo largo del codigo, y es logico ya que es la base de todas las url de nuestra api. Lo habitual y preferible en este caso es convertirla en una variable global. Por ejemplo en la carpeta /assets podemos hacer un archivo (lo usual es que se llame constants.js) y ahi asignarles una variable a estos strings que se usan siempre. Luego se lo exporta, y se lo importa en donde se necesite. 

Por ejemplo:


```js 
const API_URL = "https://api.themoviedb.org/3/";

export default API_URL
```

Y al usar la variable escribimos: 

```js
API URL + 'trending/movie/week?api_key=' + API_KEY 
```

- Muchas veces haces codigo muy repetitivo en tu conditional rendering, como en OnScope y DataContainer, donde tenes basicamente la misma estructura pero por algunos detalles que cambian. Seria preferible un solo codigo que se adapte a esos cambios. Te lo dejo comentando en esos componentes. 

