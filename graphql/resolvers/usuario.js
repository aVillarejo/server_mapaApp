import { Usuarios } from "../../db";

export const resolvers = {
  Query: {
    getUsuarios: async () => {
      const res = await Usuarios.find();
      return res;
    },
    getUsuario: async (root, { id }) => {
      const res = await Usuarios.findById({ _id: id });
      if (!res) throw new Error("Usuario no encontrado");
      return res;
    },
    totalUsuarios: async root => {
      const res = await Usuarios.countDocuments({});
      if (!res) throw new Error("Ha ocurrido un error");
      return res;
    }
  },
  Mutation: {
    addUser: async (root, { input }) => {
      const res = await Usuarios.create(input);
      if (!res) throw new Error("Ha ocurrido un error");
      return res;
    },
    modUser: async (root, { input }) => {
      const res = await Usuarios.findOneAndUpdate({ _id: input.id }, input, {
        new: true
      });
      if (!res) throw new Error("Ha ocurrido un error");
      return await res;
    },
    deleteUser: async (root, { id }) => {
      const res = await Usuarios.findOneAndDelete({ _id: id });
      if (!res) throw new Error("Ha ocurrido un error");
      return `Registro eliminado correctamente`;
    }
  }
};
