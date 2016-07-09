// simple server
import path from 'path';

import Koa from 'koa';
import Static from 'koa-static';

import convert from 'koa-convert';

const app = new Koa();
let httpPort = 2828;

app.use(convert(Static(path.join(__dirname, '/'))));

app.listen(httpPort);

console.log(`server listening on ${httpPort}`);
