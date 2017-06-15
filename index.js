import express from 'express';
import consign from 'consign';

const app = express();

consign()
  .include('libs/middlewares.js')
  .then('routes')
  .include('libs/boots.js')
  .into(app);
