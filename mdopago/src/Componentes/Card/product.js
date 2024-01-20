// SDK de Mercado Pago
import { MercadoPagoConfig } from 'mercadopago';
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: 'TEST-1491774a-9e77-47fb-85a5-93d1ba2e00c1' });

const preference = new Preference(client);
preference.create({
  body: {
    items: [
      {
        title: 'Mi producto',
        quantity: 1,
        unit_price: 85
      }
    ],
  }
})
.then(console.log)
.catch(console.log);

