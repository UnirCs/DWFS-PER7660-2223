| Método HTTP  | URI | Body | Respuesta |
| ------------- | ------------- | ------------- | ------------- |
| POST  | /adiciones  | { sumandos: number[] } | 200 OK { id: number, suma: number }, 400 BR { message: string }
| POST  | /substracciones  | { minuendo: number, sustraendos: number[] } | 200 OK { id: number, diferencia: number }, 400 BR { message: string }
| POST  | /divisiones  | { dividiendo: number, divisor: number } | 200 OK { id: number, cociente: number, resto: number }, 400 BR { message: string }
| POST  | /multiplicaciones  | { multiplicando: number, multiplicador: number } | 200 OK { id: number, id: number, producto: number }, 400 BR { message: string }
| POST  | /raices  | { indice: number, radicando: number } | 200 OK { id: number, raiz: number }, 400 BR { message: string }
| GET  | /adiciones/:id  | N/A | 200 OK { id: number, sumandos: number[], suma: number, fecha: datetime }, 404 NF
| GET  | /substracciones/:id  | N/A | 200 OK { id: number, minuendo: number, sustraendos: number[], diferencia: number, fecha: datetime }, 404 NF
| GET  | /divisiones/:id  | N/A | 200 OK { id: number, dividiendo: number, divisor: number, ociente: number, resto: number, fecha: datetime }, 404 NF
| GET  | /multiplicaciones/:id  | N/A | 200 OK { id: number, multiplicando: number, multiplicador: number, producto: number, fecha: datetime }, 404 NF
| GET  | /raices/:id  | N/A | 200 OK { id: number, indice: number, radicando: number, raiz: number, fecha: datetime }, 404 NF
