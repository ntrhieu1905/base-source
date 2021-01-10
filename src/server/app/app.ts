import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import nocache from 'nocache';
import passport from 'passport';
import qs from 'qs';

// import errorHandler from './middlewares/errorHandler';
// import notFoundHandler from './middlewares/notFoundHandler';
// import { jwtAuthenticate, strategy } from './passport';
// import router from './routers';
// import authRoute from './routes/preLogin';

const app = express();
app.use(passport.initialize());
app.set('query parser', (str: any) =>
  qs.parse(str, {
    arrayLimit: 1000,
    parseArrays: true,
    allowDots: false,
    allowPrototypes: true,
  })
);
// app.use(express.static(`${__dirname}/../../public`));

const options: cors.CorsOptions = {
  origin: '*',
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
    'Authorization',
  ],
  credentials: false,
  methods: ['GET', 'HEAD', 'OPTIONS', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(cors(options));
app.use(helmet());
app.use(nocache());
app.use(helmet.referrerPolicy({ policy: 'no-referrer' }));
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
    },
  })
);
const SIXTY_DAYS_IN_SECONDS = 5184000;
app.use(
  helmet.hsts({
    maxAge: SIXTY_DAYS_IN_SECONDS,
    includeSubDomains: false,
  })
);

app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));

// app.use('/v1/', authRoute);

// passport.use(strategy);
// routers
// app.use('/v1/', jwtAuthenticate, router);
// app.use('/api/', router);

app.use('/check/', (_, res) => {
  res.send('OK');
});

// 404
// app.use(notFoundHandler);

// error handlers
// app.use(errorHandler);

export default app;
