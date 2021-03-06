module.exports = {
  up: (queryInterface, sequelize) => {
    return queryInterface.bulkInsert(
      "ngos",
      [
        {
          id: "37eb0690-c63c-4bcb-a41e-ac50915aa91a",
          name: "APAD",
          email: "contato@apad.com.br",
          whatsapp: "5531989575463",
          city: "Rio do Sul",
          fu: "SC",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, sequelize) => {
    return queryInterface.bulkDelete("ngos", {}, {});
  },
};
