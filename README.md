# <a href="https://platform.mediamind.com"><img src="http://www.sizmek.es/eb/users/javiegido_/__logos/HTML5.png" alt="Sizmek" width="26" height="36" /></a> HTML DCO Example <a href="https://platform.mediamind.com"><img src="http://www.sizmek.es/eb/users/javiegido_/__logos/logo-dark.png" alt="Sizmek" width="57" height="15" /></a>

Ejemplo de creatividad dinámica utilizando workspaces de Sizmek.

## Descripción

Para declarar elementos dinámicos debemos editar el fichero config.js. En este fichero nos encontraremos tres secciones: ITEMS, SV y AdditionalAssets.

### ITEMS
Declara elementos dinámicos que se inyectaran dentro de un div que tengamos en nuestro html.

### SV
Declara el valor de un ITEM, o crea una nueva variable donde almacenar una cadena de texto.

### ADDITONAL ASSETS
Permite declarar el id de los additional assets que tendrá la creatividad. Los additional assets son elementos que se utilizarán en la creatividad pero sólo se contabilizará el peso del más pesado de ellos. No es obligatorio declararlos en el fichero config ya que se pueden añadir a posteriori en la plataforma, pero de esta forma nos garantizamos que el id de additional asset sea uno que nosotros escojamos.

## Recuperar un valor dinámico
En el caso de los elementos declarados como ITEM, no es necesario recoger el valor ya que se inyectan de forma automática en el div que se haya configurado en el config.js. Para los elementos que se hayan declarado como SV, podemos recoger el valor dinámico mediante la siguiente línea de código. Es importante tener en cuenta que la librería adkit, debe haberse cargado correctamente.

```javascript
var data = adkit.getSVData("element_name");
```

Para más información acerca de como añadir elementos dinámicos a una creatividad, visita el siguiente enlace: <a href="https://support.sizmek.com/hc/en-us/articles/201511985-Add-Dynamic-Creative-Functionality-to-Your-HTML5-Ads-Using-Workspaces">AÑADIENDO ELEMENTOS DINÁMICOS A UN WORKSPACE</a>

## Ejemplo

HTML_DCO_Example_300x250 (57013275)

327561622,327561623,327561626,327561627,327561628,327561631,327561632,327561635

https://szmk.io/tools/mvcs/?needle=Z2plMDh4#mvcs

Recuerda que si tienes cualquier duda puedes ponerte en contacto con el equipo de <a href="mailto:creativesupport-spain@sizmek.com">Soporte Creativo de Sizmek</a>

***