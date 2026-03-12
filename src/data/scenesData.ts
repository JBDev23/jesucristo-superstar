
export interface SceneData {
    title: string;
    synopsis: string;
    songs: { title: string }[];
    readings: { title: string }[];
    modalItems: {
        title: string;
        type: "song" | "reading";
        colorClass: string;
        content: string;
    }[];
}

export const escenasData: SceneData[] = [
    {
        title: "LLEGADA A JERUSALÉN",
        synopsis: "Jesús llega a Jerusalén aclamado por la multitud ('Hosanna'). Sin embargo, Judas ya muestra su profunda preocupación por el rumbo que está tomando el movimiento, temiendo las represalias de Roma y cuestionando la divinidad que Jesús parece aceptar ('Canción de Judas'). María Magdalena intenta calmar a Jesús ('Todo estará en paz'), provocando el enfado de Judas por lo que considera un gasto inútil.",
        songs: [
            { title: "Canción de Judas" },
            { title: "Todo estará en paz" },
            { title: "Hosanna" }
        ],
        readings: [
            { title: "Juan 12: 3, 7" },
            { title: "Marcos 11: 8-11" }
        ],
        modalItems: [
            {
                title: "Canción de Judas",
                type: "song",
                colorClass: "bg-[#ff8c00]",
                content: "Mi mente clara está\nPor fin descubrí donde todos vamos a parar\nSi quieres desnudar\nAl hombre de mito verás solo a un hombre quedar\n\n¡Jesús!\nYa empiezas a creer lo que dicen de ti\nYa crees de verdad en tu divinidad\nTodas tus ideas de nada servirán\nPorque solo importa tu personalidad\n\nOye Cristo sé porque te seguí\nY te pido que me escuches a mí\nNo lo olvides\nYo lucho por la libertad\nNo pensé que creerían que eras su nuevo Mesías\nY solo eres un libertador\n\nYo recuerdo cuando todo empezó\nTe llamábamos hombre y no Dios\nY te juro que aun cuentas con mi admiración\nPero a tu revolución todos le dan otra intención\nSi ven el error te matarán\n\nNazaret tu hijo es muy famoso como ves\nLástima que sea tan popular\nSi fuera heredero del padre carpintero\nA nadie asustaría, ni provocaría\n\nOye Cristo no te importa tu pueblo\nNo ves cómo pisotean mi suelo\nEs la ocupación\nY la total humillación\n\nYo temo a la multitud\nEl gritar es su virtud\nSu entusiasmo es nuestra perdición\nPara nuestra revolución\n\nOye Cristo yo te quiero pedir\nQue recuerdes que debemos vivir\nY ahora se que la victoria no es posible\nTus adeptos están ciegos\nSolo piensan en tus cielos\nTe seguí para una gran misión\nY ahora todo es decepción\n\nOye Cristo yo te quiero advertir\nQue recuerdes que debemos vivir\nOye Cristo yo te quiero advertir\nQue recuerdes que debemos vivir\n\n¡Cristo!\nQue me escuches\nQue me escuches a mí\nYo te quiero pedir\n\n¡Cristo!\nQue me escuches\nQue me escuches a mi\n\nNo me quiere escuchar\nNo me quiere escuchar\nNo me quiere escuchar\nNo me quiere escuchar\nNo me quiere escuchar"
            },
            {
                title: "Juan 12: 3, 7",
                type: "reading",
                colorClass: "bg-[#ffed00]",
                content: "María tomó una libra de perfume de nardo puro, muy caro, ungió los pies de Jesús y se los secó con sus cabellos; y la casa se llenó de la fragancia del perfume.\n\nJesús dijo: «Déjala; lo tenía guardado para el día de mi sepultura.»"
            },
            {
                title: "Todo estará en paz",
                type: "song",
                colorClass: "bg-[#00d800]",
                content: "[María Magdalena]\nBasta ya de angustias\nDeja los problemas\nOlvida las penas\nYo sé que nada va a pasar\nTodo estará en paz\n\nEsta noche debes descansar\nPues el mundo sin ti seguirá\nDuerme bien duerme bien\nCon el sueño podrás olvidar\n\nNada va a pasar\nTodo estará en paz\n\nVelaré tu sueño\nCalmaré tu fiebre\nCon ungüento te ungiré\nVerás que nada va a pasar\nTodo estará en paz\n\nPorque el agua apagará tu sed\nY el perfume aliviará tus pies\nDuerme bien duerme bien\nCon el sueño podrás olvidar\n\nNada va a pasar, todo estará en paz\n\n[Judas]\nMujer tu perfume\nEs un gasto inútil\nPara un inútil placer\nHubiera servido para muchos pobres\nQue no tienen que comer\n\nHay gente con hambre\nHay gente con sed\n¿No importan más que su frente y sus pies?\n\n[María Magdalena]\nBasta ya de angustias\nDeja los problemas\nOlvida las penas\nYo sé que nada va a pasar\nTodo estará en paz\n\nEsta noche debes descansar\nPues el mundo sin ti seguirá\nDuerme bien duerme bien\nCon el sueño podrás olvidar\n\nNada va a pasar\nTodo estará en paz\n\n[Jesús]\nNo intentes decirme\nQue tenemos medios\nPara a los pobres salvar\nPues siempre habrá pobres\nY habrá pobreza\nNo dejarán de luchar\n\nVed que aun me veis\nSeguid si aún me veis\nCuando me vaya\nSolos y perdidos estaréis\n\n[María Magdalena]\nVelaré tu sueño\nCalmaré tu fiebre\nCon ungüento te ungiré\nVerás que nada va a pasar\nTodo estará en paz\n\nPorque el agua apagará tu sed\nY el perfume aliviará tus pies\nDuerme bien duerme bien\nCon el sueño podrás olvidar\n\nDuerme bien duerme bien\nCon el sueño podrás olvidar\n\nDuerme bien duerme bien\nCon el sueño podrás olvidar\n\nDuerme bien duerme bien\nCon el sueño podrás olvidar\n\nDuerme bien duerme bien\nCon el sueño podrás olvidar\n\nDuerme bien duerme bien\nCon el sueño podrás olvidar\n\nDuerme bien duerme bien duerme bien\nDuerme bien duerme bien duerme bien\nDuerme bien\nDuerme bien duerme bien\nDuerme bien duerme bien duerme bien\nDuerme bien\nDuerme bien duerme bien\nDuerme bien duerme bien\nCon el sueño podrás olvidar"
            },
            {
                title: "Marcos 11: 8-11",
                type: "reading",
                colorClass: "bg-[#ff8c00]",
                content: "Muchos extendieron sus mantos por el camino; otros, ramas que habían cortado en el campo.\n\nLos que iban delante y los que seguían, gritaban: «¡Hosanna! ¡Bendito el que viene en nombre del Señor! ¡Bendito el reino que viene, el de nuestro padre David! ¡Hosanna en las alturas!»\n\nEntró en Jerusalén, en el Templo, y después de observar todo a su alrededor, como ya era tarde, salió con los Doce hacia Betania."
            },
            {
                title: "Hosanna",
                type: "song",
                colorClass: "bg-[#ffed00]",
                content: "[Coro]\nHosanna Hey, Sanna Sanna Ho\nSanna Hey Sanna Ho Sanna\nOh Jesús, Jesús, muéstrame tu luz\nSanna Ho Sanna Hey Superstar\n\n[Caifás]\nDi a esa gente que se calle\nSi no quieren perecer\nTanto clamor, es un error\nNo permitas su canción\nEs una manifestación\nDeben callar, no blasfemar\n\n[Coro]\nHosanna Hey, Sanna Sanna Ho\nSanna Hey Sanna Ho Sanna\nOh Jesús, Jesús, yo seré tu cruz\nSanna Ho Sanna Hey Superstar\n\n[Jesús]\nNo pretenderás al pueblo callar\nNadie podrá nunca detenerlos\nSi todas estas lenguas pudieras arrancar\nHasta las piedras querrían cantar\n\n[Coro]\nHosanna Hey, Sanna Sanna Ho\nSanna Hey Sanna Ho Sanna\nOh Jesús, Jesús, muéstrame tu luz\nSanna Ho Sanna Hey Superstar\n\n[Jesús]\nNo es mi canción\nEs vuestra canción\nSi cantáis tendréis mis bendiciones\nDe los que sufren será el reino de los cielos\nTodos podréis entrar\nSin excepción\n\n[Coro]\nHosanna Hey, Sanna Sanna Ho\nSanna Hey Sanna Ho Sanna\nOh Jesús, Jesús, muéstrame tu luz\nSanna Ho Sanna Hey Superstar"
            }
        ]
    },
    {
        title: "LA ÚLTIMA CENA",
        synopsis: "El Sanedrín, liderado por Caifás y Anás, decide que Jesús debe morir para evitar una revuelta y la intervención romana. Judas, atormentado, acuerda traicionar a Jesús por treinta denarios. Durante la cena con sus apóstoles, Jesús instituye la Eucaristía, pero también revela que uno de ellos le traicionará y otro le negará, enfrentándose abiertamente a Judas antes de que este parta a cumplir su destino.",
        songs: [
            { title: "Jesús Morirá" },
            { title: "Di que no me condenaré" },
            { title: "La última cena" }
        ],
        readings: [
            { title: "Juan 11: 47-53" },
            { title: "Marcos 14: 10-11" },
            { title: "Marcos 14: 22-25" },
            { title: "Marcos 14: 18-21" },
            { title: "Marcos 14: 27-30" }
        ],
        modalItems: [
            {
                title: "Juan 11: 47-53",
                type: "reading",
                colorClass: "bg-[#ff8c00]",
                content: "Entonces los sumos sacerdotes y los fariseos convocaron el Sanedrín y decían: «¿Qué hacemos? Porque este hombre realiza muchos signos. Si lo dejamos que siga así, todos creerán en él, vendrán los romanos y destruirán nuestro Lugar santo y nuestra nación.»\n\nPero uno de ellos, Caifás, que era sumo sacerdote aquel año, les dijo: «Vosotros no sabéis nada, ni comprendéis que os conviene que un solo hombre muera por el pueblo, y no que perezca toda la nación.»\n\nEsto no lo dijo por su propia cuenta, sino que, como era sumo sacerdote aquel año, profetizó que Jesús iba a morir por la nación; y no solo por la nación, sino también para reunir en uno a los hijos de Dios que estaban dispersos. Y desde aquel día decidieron darle muerte."
            },
            {
                title: "Jesús Morirá",
                type: "song",
                colorClass: "bg-[#ffed00]",
                content: "[Anás]\nOh gran Caifás, todos esperan ya\nLos Fariseos se han preparado ya\n\n[Caifás]\nTodos sabéis por qué estamos aquí\nHay un problema, hemos de decidir\n\n[Coro]\n¡Hosanna Superstar!\n¡Hosanna Superstar!\n¡Hosanna Superstar!\n¡Hosanna Superstar!\n\n[Anás]\nVed cómo el populacho está entregado a él\nDos trucos con leprosos y el pueblo está a sus pies\n\n[Todos]\n¡Peligro es!\n\n[Coro]\n¡Jesucristo Superstar!\n\n[Todos]\n¡Peligro es!\n\n[Coro]\n¡Diles que eres al que hay que amar!\n\n[Sacerdote 2]\nEste hombre a nuestro pueblo quiere revolucionar\n\n[Sacerdote 3]\nJesús es un peligro que debemos abortar\n\n[Todos]\n¡Peligro es!\n\n[Coro]\n¡Jesucristo Superstar!\n\n[Todos]\n¡Peligro es!\n\n[Sacerdote 2]\nOye Caifás, apunto están de entrar\n\n[Sacerdote 3]\nVamos Caifás, la guardia has de llamar\n\n[Caifás]\n¡Esperad!\nResolvamos para siempre este grave problema\n\n[Anás]\n¿Entonces que hacemos con el Nazareno?\nEl gran milagrero un ídolo es\n\n[Sacerdote 3]\nNi armas, ni luchas, ni guardias, ni slogans\n\n[Caifás]\nParece muy listo eso ya se ve\n\n[Anás]\nNo hay que dejarle que hable o que rece\nPorque no sabremos callar a sus fans\n\n[Sacerdote 3]\n¿Cómo detenerle si su fama crece?\nSi nos descuidamos, le coronarán\n\n[Caifás]\nVeo malos presagios\nSe que los romanos nos castigaran\nUna gran conmoción\nTambién nuestra propia eliminación\nSerá nuestra propia eliminación\n\n[Todos]\nSerá, será nuestra destrucción\n\n[Caifás]\nY por su culpa la eliminación\n\n[Todos]\nSerá, será la revolución, nuestra eliminación\n\n[Sacerdote 3]\n¿Cómo cortaremos la Jesusmanía?\n\n[Anás]\n¿Cómo detendremos a tan nuevo rey?\n\n[Sacerdote 3]\nEste hombre se hace profeta en un día\nY cómo el bautista impondrá su ley\n\n[Caifás]\nBasta! ¿no comprendéis?\nQue de nuestros cargos nos despojará\nDebemos destruirle\nIgual que el bautista Jesús morirá\nPor el bien de mi pueblo\nJesús morirá\n\n[Todos]\nJesús Jesús Jesús morirá\n\n[Caifás]\nIgual que el bautista Jesús morirá\n\n[Todos]\nJesús Jesús Jesús morirá morirá morirá"
            },
            {
                title: "Marcos 14: 10-11",
                type: "reading",
                colorClass: "bg-[#00d800]",
                content: "Judas Iscariote, uno de los Doce, fue a los sumos sacerdotes para entregárselo. Al oírlo, se alegraron y prometieron darle dinero. Y él andaba buscando una oportunidad oportuna para entregarlo."
            },
            {
                title: "Di que no me condenaré",
                type: "song",
                colorClass: "bg-[#ff8c00]",
                content: "[Judas]\nSi os ayudo con mi aclaración\nYo nunca fui capaz de la menor traición\nMe ha costado mucho tiempo decidir\nLo he pensado mucho antes de venir\nOs juro que no lo hago por mi voluntad\nTampoco por dinero ni por vanidad\nDi que no me condenaré\n\nLo hago porque creo que es mi deber\nPorque soy el único que sabe ver\nQue a Cristo de las manos se le escapara\nTodos nuestros planes no se cumplirán\nYo sé que el ha llegado a esa conclusión\nY sé que también que sabe lo de mi traición\nDi que no me condenaré\n\nAnás eres mi amigo lo comprenderás\nCaifás con tu experiencia lo entenderás\nComo los profetas vi la solución\nY así creo que cumplo con mi obligación\nOs juro que no lo hago por mi voluntad\nTampoco por dinero ni por vanidad\nDi que no me\nCondenare\n\n[Anás]\nBasta de excusas, no tengas cuidado\nDi lo que sepas, no tengas temor\n\n[Caifás]\nPodemos tener a ese falso rey\nTú sabes su vida, nosotros la ley\n\n[Anás]\nSi tú nos lo entregas habrá recompensa\n\n[Caifás]\nDenarios de plata yo te pagaré\nBasta que digas dónde se encuentra\n\n[Anás]\nA solas de noche\n\n[Caifás]\nY le prenderé\n\n[Judas]\nGuardad vuestro dinero\n\n[Caifás]\nOh, no te preocupes, tenemos de más\n\n[Judas]\nEs dinero maldito\n\n[Anás]\nPero debes cogerlo, te lo ganarás\n\n[Caifás]\nVerás lo que puedes hacer si lo coges\nLimosna a los pobres\nCualquier buena acción\nYo sé tus motivos\nYo sé lo que sientes\nNo es plata de sangre\nEs una pequeña gratificación\n\n[Judas]\nEl jueves de noche\nLe hallaréis orando\nLejos de todos en el huerto\nDe Getsemaní\n\n[Coro]\nMuy bien Judas\nPobre Judas"
            },
            {
                title: "Marcos 14: 22-25",
                type: "reading",
                colorClass: "bg-[#ffed00]",
                content: "Y mientras estaban comiendo, tomó pan, lo bendijo, lo partió y se lo dio, diciendo: «Tomad, este es mi cuerpo.»\n\nY tomando una copa, pronunció la acción de gracias, se la dio y bebieron todos de ella. Y les dijo: «Esta es mi sangre de la alianza, que es derramada por muchos. Os aseguro que ya no beberé del fruto de la vid hasta el día en que lo beba nuevo en el reino de Dios.»"
            },
            {
                title: "Marcos 14: 18-21",
                type: "reading",
                colorClass: "bg-[#00d800]",
                content: "Y mientras estaban a la mesa comiendo, Jesús dijo: «Os aseguro que uno de vosotros me va a entregar, uno que come conmigo.»\n\nEllos empezaron a entristecerse y a decirle uno tras otro: «¿Acaso seré yo?»\n\nÉl les respondió: «Uno de los Doce, el que moja conmigo en el mismo plato. El Hijo del hombre se va, como está escrito de él; pero ¡ay de aquel por quien el Hijo del hombre es entregado! Más le valdría a ese hombre no haber nacido.»"
            },
            {
                title: "Marcos 14: 27-30",
                type: "reading",
                colorClass: "bg-[#ff8c00]",
                content: "Jesús les dijo: «Todos vais a caer, porque está escrito: 'Heriré al pastor y se dispersarán las ovejas.' Pero cuando resucite, iré delante de vosotros a Galilea.»\n\nPedro le dijo: «Aunque todos caigan, yo no.»\n\nY Jesús le dijo: «Te aseguro que tú hoy, esta misma noche, antes de que el gallo cante por segunda vez, me habrás negado tres veces.»"
            },
            {
                title: "La última cena",
                type: "song",
                colorClass: "bg-[#ffed00]",
                content: "[Apóstoles]\nTodos los problemas se sumergen\nEn el vino al tiempo de cenar\nNo me molestéis veo las respuestas\nEsta noche nada malo va a pasar\n\nSiempre deseé ser un Apóstol\nY contar al mundo mi verdad\nEscribirla en los evangelios\nPara así pasar a la posteridad\n\n[Jesús]\nEl fin es aún más cruel\nViniendo de un amigo fiel\nTomad bebed, este vino es mi sangre\nTomad comed, este pan es mi cuerpo\nEl fin\nDe mi sangre bebed y de mi cuerpo comed\nY me recordareis cuando yo no esté\n\nDebo de estar loco si sigo creyendo\nQue me vais a recordar\nVeo en vuestras caras que no seré nada\nCuando me veáis marchar\n\nSé que uno me niega y otro me traiciona\n\n[Apóstoles]\n¡No! ¿Quién de nosotros? ¡No es posible!\n\n[Jesús]\nMe negará Pedro antes de tres horas\nNegará tres veces\nMás ha de llegar\nUno de vosotros de mis escogidos\nMe ha de traicionar\n\n[Judas]\nBasta de lamentos\nTú sabes bien quien es\n\n[Jesús]\n¡Ve a hacer lo que debes!\n\n[Judas]\n¿Quieres que lo haga?\n\n[Jesús]\n¡Te están esperando!\n\n[Judas]\nSabes mis motivos\n\n[Jesús]\nNo me importa el por qué\n\n[Judas]\nYo te admiraba y ahora te desprecio\n\n[Jesús]\n¡Tú mientes! ¡Tú Judas!\n\n[Judas]\n¿Quieres que lo haga?\nCristo si me arrepiento\n¿Que hay de tu martirio?\n¡No morirías!\n\n[Jesús]\n¡Vete a hacer lo que has que hacer!\nNo más palabras, no quiero saber\n¡¡Vete!!\n\n[Apóstoles]\nTodos los problemas se sumergen\nEn el vino al tiempo de cenar\nNo me molestéis veo las respuestas\nEsta noche nada malo va a pasar\n\nSiempre deseé ser un Apóstol\nY contar al mundo mi verdad\nEscribirla en los evangelios\nPara así pasar a la posteridad\n\n[Judas]\nJesús\nMíranos bien\nQué has hecho de nosotros\nDe nuestros ideales\nQue ya han muerto por ti\nY aun no es el final\nDejas que uno te entregue\nIgual que un criminal\nComo un ángel desvalido\nUn héroe perdido\nComo a un héroe perdido\nComo a un tonto ángel santo\nComo a un animal herido\n\n[Jesús]\nVe que te esperan\nVe que te esperan\n\n[Judas]\nCuanto más te miro menos puedo entender\nPor qué has dicho no a lo que supiste emprender\nHubieras podido realizar nuestro sueño\n\n[Apóstoles]\nTodos los problemas se sumergen\nEn el vino al tiempo de cenar\nNo me molestéis veo las respuestas\nEsta noche nada malo va a pasar\n\nSiempre deseé ser un Apóstol\nY contar al mundo mi verdad\nEscribirla en los evangelios\nPara así pasar a la posteridad"
            }
        ]
    },
    {
        title: "EL MONTE DE LOS OLIVOS",
        synopsis: "En el huerto de Getsemaní, Jesús afronta su destino en profunda agonía, cuestionando a Dios sobre la necesidad de su sacrificio antes de someterse finalmente a Su voluntad. Poco después, Judas llega y lo traiciona con un beso. A pesar del intento de defensa de los apóstoles, Jesús es arrestado y llevado ante el Sanedrín.",
        songs: [
            { title: "Getsemaní" },
            { title: "El arresto" }
        ],
        readings: [
            { title: "Marcos 14: 32-42" },
            { title: "Marcos 14: 44-49" }
        ],
        modalItems: [
            {
                title: "Marcos 14: 32-42",
                type: "reading",
                colorClass: "bg-[#ff8c00]",
                content: "Llegaron a una propiedad llamada Getsemaní, y dijo a sus discípulos: «Sentaos aquí mientras voy a orar.» Y se llevó consigo a Pedro, a Santiago y a Juan, y empezó a sentir pavor y angustia. Y les dijo: «Mi alma está triste hasta la muerte; quedaos aquí y velad.»\n\nAdelantándose un poco, cayó en tierra y oraba que, si era posible, pasara de él aquella hora. Y decía: «¡Abba, Padre!; todo es posible para ti; aparta de mí este cáliz; pero no sea lo que yo quiero, sino lo que quieres tú.»\n\nViene y los encuentra dormidos, y dice a Pedro: «Simón, ¿duermes?, ¿no has podido velar una hora? Velad y orad, para no caer en tentación; el espíritu está dispuesto, pero la carne es débil.» Y se alejó de nuevo y oró repitiendo las mismas palabras.\n\nVolvió y los encontró dormidos otra vez, porque sus ojos estaban cargados de sueño; y no sabían qué contestarle. Viene por tercera vez y les dice: «Dormid ya y descansad. ¡Basta! Ha llegado la hora; mirad, el Hijo del hombre va a ser entregado en manos de los pecadores. ¡Levantaos, vamos! Mirad, el que me entrega está cerca.»"
            },
            {
                title: "Getsemaní",
                type: "song",
                colorClass: "bg-[#ffed00]",
                content: "Yo quiero decir\nSi puedo pedir\nQue apartes de mí este cáliz\nYa no deseo su amargura\nAhora quema y yo he cambiado\nY no sé por qué he empezado\n\nYo tenía fe\nCuando comencé\nAhora estoy triste y cansado\nMi camino de tres años\nMe parece que son treinta\n¿Y qué más puede un hombre hacer?\n\nSi he de morir\nQue se cumpla todo lo que Tú quieres de mí\nDeja que me odien, que me claven en Su cruz\nYo quiero ver, yo quiero ver, mi Dios\nYo quiero ver, yo quiero ver, mi Dios\nQuiero saber, quiero saber, Señor\nQuiero saber, quiero saber, Señor\n\nSi he de morir\nDime si es por qué he de ser mejor de lo que fui\nDime si mi vida con la muerte he de cumplir\nYo quiero ver, yo quiero ver, mi Dios\nYo quiero ver, yo quiero ver, mi Dios\nQuiero saber, quiero saber, Señor\nQuiero saber, quiero saber, Señor\n\nCon morir, ¿qué voy a conseguir?\nAl morir, ¿qué voy a conseguir?\nQuiero saber, quiero saber, Señor\nQuiero saber, quiero saber, Señor\n\n¿Por qué he de morir?\n¿Por qué?\nDime por qué quieres que me claven en Su cruz\nMuéstrame el motivo, dame un poco de Tu luz\nDi que no es inútil Tu deseo y moriré\nMe enseñaste el cómo, el cuándo, pero no el porqué\n\nMuy bien, yo moriré\nPero, pero, por favor\nCuando muera, cuando muera, mírame\nPor favor, mira mi muerte\n\nY yo tenía fe\nCuando comencé\nAhora estoy triste y cansado\nMis tres años ya son miles\n¿Por qué entonces\nTengo miedo de que ya todo termine?\n\nDios, yo no empecé\nFue Tu voluntad\nDame el cáliz de amargura\nClava, azota, rompe, mata\nPero pronto, hazlo pronto\nO yo me voy a arrepentir"
            },
            {
                title: "Marcos 14: 44-49",
                type: "reading",
                colorClass: "bg-[#00d800]",
                content: "El que lo entregaba les había dado esta contraseña: «Aquel a quien yo dé un beso, ese es; prendedlo y llevadlo bien seguro.»\n\nY al llegar, se acercó a él inmediatamente y le dijo: «¡Maestro!», y le dio un beso. Ellos le echaron mano y lo prendieron.\n\nPero uno de los presentes, sacando la espada, hirió al siervo del sumo sacerdote y le cortó la oreja. Y Jesús, dirigiéndose a ellos, les dijo: «¿Como si fuera un bandido habéis salido a prenderme con espadas y palos? Todos los días estaba junto a vosotros enseñando en el Templo y no me prendisteis; pero esto es para que se cumplan las Escrituras.»"
            },
            {
                title: "El arresto",
                type: "song",
                colorClass: "bg-[#ff8c00]",
                content: "[Judas]\nEl ahí y sus amigos duermen\nJudas, con un beso me traicionas\nCuéntame di qué vamos a hacer, cuéntame\nDi qué vamos a hacer\n\n[Apóstoles]\nOh Señor (Cuéntanos di qué vamos a hacer)\nYo luchare (Cuéntanos di qué vamos a hacer)\nLuchare por ti (Cuéntanos di qué vamos a hacer)\nYo luchare por ti (Cuéntanos di qué vamos a hacer)\nOh Señor, yo te defenderé\nOh Señor, yo te defenderé\nOh Señor, yo te defenderé\nOh Señor, yo te defenderé\n\n[Jesús]\n¿Por qué queréis luchar?\nGuardad pronto las espadas\nTodo ya va a terminar\nLas luchas engendran luchas\nY tu misión será pescar\n\n[Coro]\n¿Dime Cristo qué vas a hacer?\n¿Luchar piensas por el poder?\nEstás solo y tienes temor\n¿Cuál ha sido tu gran error?\nTu carrera terminará\nY tu nombre se borrará\n¿Cómo ves lo que ha de venir?\nLos tuyos no te han de servir\n\nVamos, pues, a ver a Caifás\nVamos no tengas temor\nTe dará la pena mayor\nY por fin todo acabara\n\nVamos, Dios, tienes que ceder\nDinos que es lo que vas a hacer\nA tus gentes convencerás\nY al final te salvaras\n\n¿Dime Cristo qué vas a hacer?\n¿Luchar piensas por el poder?\nEstás solo y tienes temor\n¿Cuál ha sido tu gran error?\n\nVamos, pues, a ver a Caifás\nVamos no tengas temor\nTe dará la pena mayor\nY por fin todo acabara\n\n[Guardias]\nYa esta preso, lo tenemos\nYa esta preso, lo tenemos\nYa esta preso, lo tenemos\nYa esta preso, lo tenemos\nYa lo tenemos, lo hemos prendido\n\n[Caifás]\nCristo tienes que dar cuenta de una grave acusación\nDi si es cierto eso que dices\nQue eres el hijo de Dios\n\n[Jesús]\nTú lo dices\nTú dices quien soy\n\n[Caifás]\nYa lo oísteis caballeros\n¿Qué más pruebas necesitáis?\nJudas gracias por la entrega\nQuédate, lo verás sangrar\n\n[Guardias]\nYa esta preso, lo tenemos\nYa esta preso, lo tenemos\nYa esta preso, lo tenemos\nYa esta preso, lo tenemos\n\n[Coro]\nId a Pilatos\nId a Pilatos\nId a Pilatos\nId a Pilatos"
            }
        ]
    },
    {
        title: "NEGACIONES DE PEDRO",
        synopsis: "Mientras Jesús es juzgado, Pilatos es atormentado por un sueño profético sobre un hombre inocente y su propia culpa histórica. Paralelamente, Pedro, aterrado por las acusaciones, niega conocer a Jesús tres veces antes del amanecer, cumpliendo así la profecía de su maestro.",
        songs: [
            { title: "Sueño de pilatos" },
            { title: "Negaciones de Pedro" }
        ],
        readings: [
            { title: "Mateo 27: 19" },
            { title: "Marcos 14: 66-72" }
        ],
        modalItems: [
            {
                title: "Mateo 27: 19",
                type: "reading",
                colorClass: "bg-[#ff8c00]",
                content: "Mientras estaba sentado en el tribunal, su mujer le mandó a decir: «No te metas con ese justo, porque hoy he sufrido mucho en sueños por su causa.»"
            },
            {
                title: "Sueño de pilatos",
                type: "song",
                colorClass: "bg-[#ffed00]",
                content: "Soñé un sueño muy extraño\nQue no sé descifrar\nA un hombre hacían daño, ante mí\nLe iban a matar\n\nPregunté cuál era su crimen\nQue como sucedió\nÉl solo dulcemente me miró\nY no me contestó\n\nDe pronto, miles de hombres locos de furor\nCayeron sobre él\nY como apareció\nSe desvaneció\n\nPor fin, vi que el mundo entero\nEl mismo que le odió\nLlorando arrepentido, señaló\nPilatos lo mató"
            },
            {
                title: "Marcos 14: 66-72",
                type: "reading",
                colorClass: "bg-[#00d800]",
                content: "Estando Pedro abajo, en el patio, llega una de las criadas del sumo sacerdote, y al ver a Pedro calentándose, se le queda mirando y le dice: «Tú también estabas con Jesús el Nazareno.» Pero él lo negó diciendo: «Ni sé ni entiendo qué dices.» Y salió afuera, al vestíbulo; y cantó un gallo.\n\nLa criada, al verlo, empezó de nuevo a decir a los presentes: «Este es de ellos.» Pero él lo negó de nuevo. Un poco después, los presentes decían otra vez a Pedro: «Seguro que eres de ellos, pues eres galileo.»\n\nPero él empezó a echar maldiciones y a jurar: «¡No conozco a ese hombre del que habláis!» Y en seguida cantó un gallo por segunda vez. Y Pedro recordó las palabras que Jesús le había dicho: «Antes de que el gallo cante por segunda vez, me negarás tres veces.» Y rompió a llorar."
            },
            {
                title: "Negaciones de Pedro",
                type: "song",
                colorClass: "bg-[#ff8c00]",
                content: "[Mujer 1]\nYo creo haberte visto antes y ahora\nte recuerdo bien\nEse ... Jesús, tú siempre ibas con él\n\n[Pedro]\nTe has confundido yo no le conozco\nno sé ni quién es jamás le vi\nnunca fui con él\n\n[Hombre 1]\nEs claro porque yo también te he visto\ny estabas con él, no puedes negar\n\n[Pedro]\nTe juro que yo nunca fui su amigo\n\n[Hombre 2]\nTambién yo te vi, estabas allí\n\n[Pedro]\nNo le conozco\n\n[María Magdalena]\nQué has hecho Pedro no es verdad\nle acabas de negar\n\n[Pedro]\nTenía miedo hablar de él\nme iban a denunciar\n\n[María Magdalena]\nComo Jesús pudo saber\nlo que iba a suceder?"
            }
        ]
    },
    {
        title: "JUICIO DE CRISTO",
        synopsis: "Jesús es llevado primero ante Pilatos, quien, al enterarse de que es galileo, lo envía al rey Herodes. Herodes, esperando ver un espectáculo milagroso, se burla de Jesús y, al no obtener respuesta, lo rechaza. De vuelta ante Pilatos, la multitud exige su crucifixión. A pesar de no encontrarle culpa y de intentar razonar con él, Pilatos cede a la presión del pueblo y se lava las manos, condenándolo a morir.",
        songs: [
            { title: "Palacio de Pilatos" },
            { title: "Canción de Herodes" },
            { title: "Juicio ante Pilatos" }
        ],
        readings: [
            { title: "Lucas 23: 3-7" },
            { title: "Lucas 23: 8-11" },
            { title: "Marcos 15: 11-15" }
        ],
        modalItems: [
            {
                title: "Lucas 23: 3-7",
                type: "reading",
                colorClass: "bg-[#ff8c00]",
                content: "Pilato le preguntó: «¿Eres tú el rey de los judíos?» Él le respondió: «Tú lo dices.»\n\nPilato dijo a los sumos sacerdotes y a la gente: «No encuentro culpa alguna en este hombre.» Pero ellos insistían diciendo: «Solivianta al pueblo, enseñando por toda Judea, desde Galilea, donde empezó, hasta aquí.»\n\nAl oír esto, Pilato preguntó si aquel hombre era galileo. Y al enterarse de que era de la jurisdicción de Herodes, se lo remitió a Herodes, que estaba también en Jerusalén por aquellos días."
            },
            {
                title: "Palacio de Pilatos",
                type: "song",
                colorClass: "bg-[#ffed00]",
                content: "[Pilatos]\nQuién es y qué hace aquí\n¿Este pobre desgraciado?\n¿Quién es el acusado?\n\n[Soldado]\nUn tal Cristo dicen que es rey\n\n[Pilatos]\nOh tú eres Jesucristo\nEl que arma tantos líos\nTe llaman rey de los Judíos\nYa sé que eres popular\nPero ¿Eres rey, rey de verdad?\n\n[Jesús]\nTú lo dices\n\n[Pilatos]\n¿Qué quieres demostrar?\nEsa no es respuesta\nNo quieres admitir\nQue tal vez puedas morir\n\n¿Habéis visto de verdad?\nMe asombra su tranquilidad\nQué singular, no quiere hablar\nGalilea es tu región y no es de mi jurisdicción\nNo soy tu juez\nHerodes es\n\n[Coro]\nHo Sanna\nHey Sanna\nSanna sanna ho\nSanna hey sanna ho, Jesus\n\nPuedes explicar\nSi este es tu final\nSi viniste solo para morir"
            },
            {
                title: "Lucas 23: 8-11",
                type: "reading",
                colorClass: "bg-[#00d800]",
                content: "Herodes, al ver a Jesús, se alegró mucho; pues hacía bastante tiempo que quería verlo, porque oía hablar de él y esperaba verle hacer algún milagro. Le hizo muchas preguntas, pero él no le contestó nada.\n\nEstaban allí los sumos sacerdotes y los escribas acusándolo con gran vehemencia. Entonces Herodes, con sus soldados, lo trató con desprecio y, burlándose de él, le puso un vestido blanco y se lo devolvió a Pilato."
            },
            {
                title: "Canción de Herodes",
                type: "song",
                colorClass: "bg-[#ff8c00]",
                content: "Oh, Jesús, qué alegría tenerte aquí a mis pies\nTan famoso en pocos días y ahora ya lo ves\nCuras ciegos, devuelves la salud\nY eres Dios, y eres rey, eso te crees tú\n\nAsí que eres Cristo, el gran Jesucristo\nSi es verdad que eres divino\nHaz que el agua se haga vino\nY si lo consigues sabré la verdad\nTendrás tu libertad\n\nEn muy poco tiempo tú has causado sensación\nDicen que eres de este año gran revelación\n¡Ay, qué pena si nada es verdad!\nAunque sé que estando aquí lo vas a demostrar\n\nAsí que eres Cristo, el gran Jesucristo\nPrueba tu fuerza divina\nAnda sobre mi piscina\nY si lo consigues sabré la verdad\nVamos no esperes más\n\nQuiero solo que me pruebes que eres superstar\nY por qué los que te aclaman te han puesto un altar\nQuiero verlo, soy tu devoto fan\n¿Por qué no quieres convertir este palacio en pan?\n\nSi es verdad que eres Cristo, el gran Jesucristo\nY si eres más que rey vamos hazlo de una vez\n¿Qué es lo que pasa?\n¿No te gusta mi casa?\nVamos, no esperes más\n\nAcaso me temes, Cristo, señor Jesucristo\n¡Vaya timo! ¿Que eres Dios? ¡No me lo creo ni yo!\n¡Fuera de aquí!\n¡Con bromitas a mí!\n¡Fuera de aquí, falso! ¡Fuera de aquí, falso!\n¡Fuera de aquí, falso rey!\n¡Fuera! ¡Fuera! ¡Fuera!\n¡Yo soy la única superstar!"
            },
            {
                title: "Marcos 15: 11-15",
                type: "reading",
                colorClass: "bg-[#ffed00]",
                content: "Pero los sumos sacerdotes incitaron a la gente para que pidieran que más bien les soltara a Barrabás. Pilato tomó de nuevo la palabra y les preguntó: «¿Qué queréis, pues, que haga con el que llamáis rey de los judíos?»\n\nEllos gritaron de nuevo: «¡Crucifícalo!» Pilato les decía: «Pero ¿qué mal ha hecho?» Pero ellos gritaron con más fuerza: «¡Crucifícalo!»\n\nEntonces Pilato, queriendo complacer a la gente, les soltó a Barrabás y entregó a Jesús, después de haberlo azotado, para que fuera crucificado."
            },
            {
                title: "Juicio ante Pilatos",
                type: "song",
                colorClass: "bg-[#00d800]",
                content: "[Pilatos]\nAquí esta el rey\nEn mi casa otra vez\n¿Y qué pasó?\n¿Herodes no es su juez?\n\n[Caifás]\nRoma será\nQuien juzgue Nazareth\nPorque el matar no existe en nuestra ley\nHay que crucificar\nTú lo tienes que hacer\nQueremos verle en cruz\nTú lo debes hacer\n\n[Pilatos]\nHáblame, pues, Jesús\nTe han traído a mí\nManiatado por tu propio pueblo\nTú debes saber cuáles son los motivos\nÓyeme falso rey\n¿Dónde está tu Dios?\n¿Y tu reino dónde está?\n\n[Jesús]\nMi reino no es de este mundo\nNo, no, no\n\n[Coro]\nHáblanos, pues, Jesús\n\n[Jesús]\nMi reino no es de este mundo\nNo lo comprendéis, no\n\n[Pilatos]\nEres, pues, rey\n\n[Jesús]\nEso lo dices tú\nEstoy aquí buscando la verdad\n\n[Pilatos]\n¿Qué es la verdad?\n¿Acaso es una ley?\n¿Es mi verdad?\n¿O tu verdad lo es?\n\n[Coro]\n¡Crucifica, crucifica!\n\n[Pilatos]\n¿Y qué queréis?\n¿Matar a vuestro rey?\n\n[Coro]\nNo hay más rey que el Cesar\n\n[Pilatos]\nCreo que no ha roto vuestra ley\n\n[Coro]\nNo hay más rey que el Cesar\nCrucifica\n\n[Pilatos]\nNunca tuvisteis respeto al Cesar\n¿Porque motivó lo invocáis?\nQuien es Jesús\n¿Es diferente?\nFalsos mesías fabricáis\n\n[Coro]\nCrucifica, crucifica\nClávale, clávale, clávale\n1, 2, 3, 38, 39\n\n[Pilatos]\n¿De dónde vienes tú?\n¿Quién eres tú, Cristo?\nDime\nSi puedo hacer algo\nPara que no mueras\nDime\nTienes tu vida en mis manos\nY en mi poder\nNo te has defendido\n¿Es que no quieres comprender?\n\n[Jesús]\nEn tus manos nada está\nSi tienes poder\nTe viene del más allá\nTodo está dispuesto\nY no podrás cambiarlo\n\n[Pilatos]\nEstás loco Jesús\nTe quiero ayudar\n\n[Coro]\n¡Crucifícalo! ¡Pilatos ya!\nRecuerda al Cesar, es tu deber\nGuarda la paz de nuestro pueblo\nRecuerda al Cesar, si no lo matas\nTu puesto lo podrás perder\n¡Crucifica!\n\n[Pilatos]\nNo detendré esta destrucción\nMártir inútil\nSi quieres la muerte\nMuere por fin\nPero de esta acción\nLavo mis manos\nDe sangre inocente"
            }
        ]
    },
    {
        title: "CRUCIFIXIÓN Y SEPULCRO",
        synopsis: "La culminación de la historia. Jesús es crucificado, pronunciando sus últimas palabras de perdón, abandono y consumación antes de entregar su espíritu. Finalmente, es bajado de la cruz y depositado en un sepulcro nuevo en un huerto cercano.",
        songs: [
            { title: "Crucifixión" }
        ],
        readings: [
            { title: "Juan 19: 16-18" },
            { title: "Juan 19: 28-30" },
            { title: "Juan 19: 41" }
        ],
        modalItems: [
            {
                title: "Juan 19: 16-18",
                type: "reading",
                colorClass: "bg-[#ff8c00]",
                content: "Entonces se lo entregó para que fuera crucificado. Tomaron, pues, a Jesús; y, cargando con su cruz, salió hacia el lugar llamado Calavera, que en hebreo se llama Gólgota, donde lo crucificaron, y con él a otros dos, uno a cada lado, y Jesús en medio."
            },
            {
                title: "Crucifixión",
                type: "song",
                colorClass: "bg-[#ffed00]",
                content: "Padre, perdónalos porque no saben lo que hacen\nMadre ¿Dónde está mi Madre?\nDios mío, Dios mío, ¿por qué me has abandonado?\nTengo Sed\nTengo Sed\nTengo Sed\n¡Dios mío, tengo sed!\nTodo se ha cumplido\nPadre, en tus manos encomiendo mi espíritu"
            },
            {
                title: "Juan 19: 28-30",
                type: "reading",
                colorClass: "bg-[#00d800]",
                content: "Después de esto, sabiendo Jesús que ya todo estaba cumplido, para que se cumpliera la Escritura, dijo: «Tengo sed.»\n\nHabía allí una vasija llena de vinagre. Sujetaron a una rama de hisopo una esponja empapada en vinagre y se la acercaron a la boca.\n\nCuando tomó el vinagre, Jesús dijo: «Todo está cumplido.» E inclinando la cabeza, entregó el espíritu."
            },
            {
                title: "Juan 19: 41",
                type: "reading",
                colorClass: "bg-[#ff8c00]",
                content: "En el lugar donde lo habían crucificado había un huerto, y en el huerto un sepulcro nuevo en el que nadie había sido enterrado todavía."
            }
        ]
    }
];