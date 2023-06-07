# Hundir la flota

## Recursos

### Partida

#### Descripción

Recurso que permite gestionar una partida de hundir la flota.

### Barco

#### Descripción

Recurso que permite gestionar un barco de hundir la flota.

### Disparo

#### Descripción

Recurso que permite gestionar un disparo de hundir la flota.

### Usuario

#### Descripción

Recurso que permite gestionar un usuario de hundir la flota.

## API REST

| Método HTTP  | URI | Body | Respuesta |
| ------------- | ------------- | ------------- | ------------- |
| POST  | /partidas  | { jugador_1: number, jugador_2: number } | 200 OK { id: number, jugador_1: number, jugador_2: number, fecha: datetime }, 400 BR { message: string }
| GET  | /partidas/:id  | N/A | 200 OK { id: number, jugadores: usuario[], barcos: barco[], disparos: disparo[], ganador: number }, 404 NF
| PATCH  | /partidas/:id | { estado: string } | 200 OK, 404 NF
| DELETE  | /partidas/:id  | N/A | 200 OK, 404 NF

| POST | /partidas/:partida/jugadores/:jugador/barcos | { coordenadas: number[] } | 200 OK { id: number, jugador: number, coordenadas: number[], fecha: datetime }, 400 BR { message: string }

| GET  | /partidas/:partida/jugadores/:jugador/barcos | N/A | 200 OK { id: number, jugador: number, barcos: barco[] }, 404 NF
| DELETE  | /partidas/:partida/jugadores/:jugador/barcos/:barco  | N/A | 200 OK, 404 NF
|
 POST | /partidas/:partida/jugadores/:jugador/disparos | { coordenadas: number[] } | 200 OK { id: number, jugador: number, coordenadas: number[], fecha: datetime }, 400 BR { message: string }

| POST  | /usuarios  | { nombre: string, contrasena: string, correo: string } | 200 OK { id: number }, 400 BR { message: string }
| GET  | /usuarios/:id  | N/A | 200 OK { id: number, nombre: string, correo: string, fecha: datetime }, 404 NF
| PUT  | /usuarios/:id | { nombre: string, contrasena: string, correo: string } | 200 OK, 404 NF