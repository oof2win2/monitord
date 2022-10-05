import Fastify from 'fastify';

const server = Fastify({
  logger: true,
});

server.get('/', async (request, reply) => {
  reply.status(200).send({ pong: 'it works!' });
});

const start = async () => {
  try {
    await server.listen({port: 3000});

    const address = server.server.address();
    server.log.info(`server listening on ${address}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
