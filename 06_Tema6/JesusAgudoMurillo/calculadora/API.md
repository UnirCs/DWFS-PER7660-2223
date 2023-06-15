# Calculadora REST

# Nombre y descripción de los recursos identificados.

## Recurso: Suma.

### Descripción: Recurso que permite realizar la suma de un conjunto de sumandos.

## Recurso: Resta.

### Descripción: Recurso que permite realizar la resta de un minuendo y un conjunto de sustraendos.

## Recurso: Multiplicación.

### Descripción: Recurso que permite realizar la multiplicación de un multiplicando y un multiplicador.

## Recurso: División.

### Descripción: Recurso que permite realizar la división de un dividendo y un divisor.

## Recurso: Raíz.

### Descripción: Recurso que permite realizar la raíz de un radicando con un índice.

## Recurso: Potencia.

### Descripción: Recurso que permite realizar la potencia de una base con un exponente.

# API REST

| Método HTTP  | URI | Body | Respuesta |
| ------------- | ------------- | ------------- | ------------- |
| POST  | /sumas  | { sumandos: number[] } | 200 OK { id: number, suma: number }, 400 BR { message: string }
| POST  | /restas  | { resta: number[] } | 200 OK { id: number, resta: number }, 400 BR { message: string }
| POST  | /multiplicaciones  | { multiplicando: number, multiplicador: number } | 200 OK { id: number, multiplicacion: number }, 400 BR { message: string }
| POST  | /divisiones  | { dividendo: number, divisor: number } | 200 OK { id: number, division: number }, 400 BR { message: string }
| POST  | /raices  | { indice: number, radicando: number } | 200 OK { id: number, raiz: number }, 400 BR { message: string }
| POST  | /potencias  | { base: number, exponente: number } | 200 OK { id: number, potencia: number }, 400 BR { message: string }
| GET  | /sumas/:id  | N/A | 200 OK { id: number, sumandos: number[], suma: number, fecha: datetime }, 404 NF
| GET  | /restas/:id  | N/A | 200 OK { id: number, resta: number[], resta: number, fecha: datetime }, 404 NF
| GET  | /multiplicaciones/:id  | N/A | 200 OK { id: number, multiplicando: number, multiplicador: number, multiplicacion: number, fecha: datetime }, 404 NF
| GET  | /divisiones/:id  | N/A | 200 OK { id: number, dividendo: number, divisor: number, division: number, fecha: datetime }, 404 NF
| GET  | /raices/:id  | N/A | 200 OK { id: number, indice: number, radicando: number, raiz: number, fecha: datetime }, 404 NF
| GET  | /potencias/:id  | N/A | 200 OK { id: number, base: number, exponente: number, potencia: number, fecha: datetime }, 404 NF
    