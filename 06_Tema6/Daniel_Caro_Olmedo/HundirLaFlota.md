## API Hundir la flota
#### Recursos
- Partida: contendrá dos jugadores. Sus estados son "en progreso" o "finalizada"
- Jugador: cada uno tiene una serie barcos asignados y 100 casillas (10x10).
- Barco: ocupan una serie de casillas en el tablero. Pueden estar "bien" o "hundido".
- Casilla: cada una esta asignada a un jugador y puede o no estar ocupada por un barco. Sus estados son "atacada" o "nada" dependiendo de si ha sido alcanzada por un ataque
- Ataque: realizado por un jugador, representa cada turno de juego. Apunta a una casilla concreta que debe de ser del jugador contrario al que pertenece el ataque. Su resultado puede ser "agua" o "tocado".

##### Relaciones
- Cuando un Barco tenga todas sus Casillas asignadas en el estado "atacada", el Barco pasará a estar "hundido"
- Cuando una Casilla sea marcada por un Ataque, su estado pasará de "nada" a "atacada". Una Casilla "atacada" no puede ser marcada de nuevo por un Ataque. Además se debe informar si la Casilla estaba ocupada por un Barco.
- Si todos los Barcos de un Jugador tienen el estado "hundido", la Partida se dará por "finalizada" y el ganador será el Jugador que aún tenga barcos "bien".

#### API REST

| Método HTTP  | URI  | Body  | Respuesta |
| ------------ | ------------ | ------------ | ------------ |
| POST  | /partida   | {jugador1: "Manuel", jugador2:"Antonio"}  |200 OK, 400 BR |
| DELETE  | /partida/{idpartida}  | N/A |200OK, 404 NF, 400 BR |
| PUT  | /partida/{idpartida}  | {jugador1: "Manuel", jugador2:"Antonio", estado:"finalizado", ganador"Antonio"}  |200OK, 404 NF, 400 BR |
| GET  | /datosgenerales/{idpartida}  |  N/A |200OK, 404 NF |
| POST  | /barco  | {jugador: "Antonio", casillas: ["C1", "C2"]}  |200OK, 400 BR |
| PUT  | /casilla/{idcasilla}  | {atacada: true}  |200OK, 404 NF, 400 BR |
| GET  | /jugador/{idpartida}/{idjugador}  | N/A  |200OK, 404 NF, 404 NF |
| POST  | /ataque  | {jugador: "Antonio", casilla: "C1"}  | 200OK, 400 BR |
| POST  | /jugador  | {jugador: "Paco"}  | 200OK, 400 BR |
| GET  | /jugador/{idjugador}  | N/A  | 200OK, 404 NF |
| DELETE  | /jugador/{idjugador}  | N/A  | 200OK, 404 NF |

Anotaciones:
- Para empezar una partida basta con crearla. Si los nombres no existen, se genera un jugador asociado. A cada jugador se le asignan 100 casillas, los barcos deben colocarse haciendo peticiones.
- Se puede finalizar una partida en cualquier momento modificando sus datos.
- Utilizando la actualización de casillas se puede automatizar la eliminación de barcos y la finalización de partida.
- La información de un jugador en una partida retorna todos los barcos en su propiedad, cada barco lleva asociada a su vez las casillas que ocupa.
- Al hacer un ataque se devuelve una respuesta que indica si esa casilla contenia o no un barco del jugador contrario.
- La información de jugador retorna datos como su nombre o sus estadísticas (por ejemplo)