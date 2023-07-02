| Método HTTP  | URI | Body | Respuesta |
| ------------- | ------------- | ------------- | ------------- |
| GET  | /partidas/:id  | N/A | 200 OK { jugadores: Usuario[], barcos: Barco[], disparos: Disparo[], estado: string, ganador: Usuario }, 404 NOTFOUND, 401 UNAUTHORIZED
| POST  | /partidas  | { jugadores: Usuario[] } | 201 CREATED { id: number }, 400 BADREQUEST { message: string }, 401 UNAUTHORIZED
| PUT  | /partidas/:id  | { jugadores: Usuario[] } | 200 OK { jugadores: Usuario[] }, 400 BADREQUEST { message: string }, 404 NOTFOUND, 401 UNAUTHORIZED
| PATCH  | /partidas/:id  | { jugadores: Usuario[] } | 200 OK { jugadores: Usuario[] }, 400 BADREQUEST { message: string }, 404 NOTFOUND, 401 UNAUTHORIZED
| DELETE  | /partidas/:id  | N/A | 200 OK, 404 NOTFOUND, 401 UNAUTHORIZED
| PATCH  | /partidas/:id  | { estado: string } | 200 OK, 404 NOTFOUND, 412 PRECONDITIONFAILED, 401 UNAUTHORIZED
| GET  | /partidas/:id/barcos  | N/A | 200 OK { barcos: Barco[] }, 404 NOTFOUND, 401 UNAUTHORIZED
| POST  | /partidas/:id/barcos  | { barco: Barco } | 200 OK, 400 BADREQUEST { message: string }, 404 NOTFOUND, 401 UNAUTHORIZED
| DELETE  | /partidas/:id/barcos  | { barco: Barco } | 200 OK, 404 NOTFOUND, 401 UNAUTHORIZED
| GET  | /partidas/:id/disparos  | N/A | 200 OK { id: number, estado: string }, 400 BADREQUEST { message: string }, 404 NOTFOUND, 401 UNAUTHORIZED
| POST  | /partidas/:id/disparos  | { disparo: Disparo } | 201 CREATED { id: number, resultado: string }, 400 BADREQUEST { message: string }, 404 NOTFOUND, 401 UNAUTHORIZED
| GET  | /usuarios/:id  | N/A | 200 OK { usuario: Usuario }, 404 NOTFOUND, 401 UNAUTHORIZED
| POST  | /usuarios  | { nombre: string, contrasena: string, correo: string } | 201 CREATED { id: number }, 400 BADREQUEST { message: string }
| DELETE  | /usuarios/:id  | N/A | 200 OK, 404 NOTFOUND, 401 UNAUTHORIZED

Recursos
 - Partidas  { id: number, jugadores_id: number[], estado: string, ganador_id: number }
 - Barcos    { id: number, partida_id: number, jugador_id: number, posicion_x: number, posicion_y: number, longitud: number, orientacion: string }
 - Disparos  { id: number, partida_id: number, jugador_id: number, posicion_x: number, posicion_y: number, estado: 'agua' | 'tocado' | 'hundido' }
 - Usuarios  { id: number, nombre: string, contrasena: string, correo: string }

Nota: el usuario_id en donde sea requerido no se toma del cuerpo de la petición sino de la cookie de sesión o token de autenticación