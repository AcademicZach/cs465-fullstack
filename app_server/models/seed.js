const mongoose = require('mongoose');
const Trip = require('./travlr');
const tripsData = require('../../data/trips.json');

const seedDatabase = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1/travlr', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    await Trip.deleteMany({});

    await Trip.insertMany(tripsData);
    console.log('Database seeded successfully');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
    mongoose.connection.close();
  }
};

seedDatabase();