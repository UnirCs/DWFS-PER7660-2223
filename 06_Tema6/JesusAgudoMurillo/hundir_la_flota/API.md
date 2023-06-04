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
| POST  | /partida  | { jugador_1: number, jugador_2: number } | 200 OK { id: number, jugador_1: number, jugador_2: number, fecha: datetime }, 400 BR { message: string }
| GET  | /partida/:id  | N/A | 200 OK { id: number, jugadores: usuario[], barcos: barco[], disparos: disparo[], ganador: number }, 404 NF
| PUT  | /partida/:id | { estado: string } | 200 OK, 404 NF
| DELETE  | /partida/:id  | N/A | 200 OK, 404 NF

| POST | /partida/:partida/jugador/:jugador/barco | { coordenadas: number[] } | 200 OK { id: number, jugador: number, coordenadas: number[], fecha: datetime }, 400 BR { message: string }

| GET  | /partida/:partida/jugador/:jugador/barco | N/A | 200 OK { id: number, jugador: number, barcos: barco[] }, 404 NF
| DELETE  | /partida/:partida/jugador/:jugador/barco/:barco  | N/A | 200 OK, 404 NF
|
 POST | /partida/:partida/jugador/:jugador/disparo | { coordenadas: number[] } | 200 OK { id: number, jugador: number, coordenadas: number[], fecha: datetime }, 400 BR { message: string }

| POST  | /usuario  | { nombre: string, contrasena: string, correo: string } | 200 OK { id: number }, 400 BR { message: string }
| GET  | /usuario/:id  | N/A | 200 OK { id: number, nombre: string, correo: string, fecha: datetime }, 404 NF
| PUT  | /usuario/:id | { nombre: string, contrasena: string, correo: string } | 200 OK, 404 NF