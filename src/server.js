import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  return createServer({
    environment,

    models: {
      course: Model,
    },

    seeds(server) {
      server.create('course', {
        id: 1,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab culpa veniam cumque temporibus quia? Harum iure facilis quaerat expedita. Nulla nesciunt obcaecati explicabo consequatur in et natus eum reprehenderit tempora.",
      });
      server.create('course', {
        id: 2,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab culpa veniam cumque temporibus quia? Harum iure facilis quaerat expedita. Nulla nesciunt obcaecati explicabo consequatur in et natus eum reprehenderit tempora.",
      });
      server.create('course', {
        id: 3,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab culpa veniam cumque temporibus quia? Harum iure facilis quaerat expedita. Nulla nesciunt obcaecati explicabo consequatur in et natus eum reprehenderit tempora.",
      });
      server.create('course', {
        id: 4,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab culpa veniam cumque temporibus quia? Harum iure facilis quaerat expedita. Nulla nesciunt obcaecati explicabo consequatur in et natus eum reprehenderit tempora.",
      });
      server.create('course', {
        id: 5,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab culpa veniam cumque temporibus quia? Harum iure facilis quaerat expedita. Nulla nesciunt obcaecati explicabo consequatur in et natus eum reprehenderit tempora.",
      });
      server.create('course', {
        id: 6,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab culpa veniam cumque temporibus quia? Harum iure facilis quaerat expedita. Nulla nesciunt obcaecati explicabo consequatur in et natus eum reprehenderit tempora.",
      });
    },

    routes() {
      this.namespace = 'api';

      this.get('/courses', (schema) => {
        return schema.courses.all();
      });
    },
  });
}