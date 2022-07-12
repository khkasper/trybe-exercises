const bodyParser = require('body-parser');

const express = require('express');

const {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  createPatients,
  getPatientsAndSurgeriesNoDoctor,
} = require('./controllers/patientsController');
const getAllPlans = require('./controllers/plansController');
const getDoctorSurgeries = require('./controllers/surgeriesController');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', createPatients)
app.get('/all', getAllPatientsPlans);
app.get('/surgeries', getAllPatientsSurgeries);
app.get('/surgeries/nodoctor', getPatientsAndSurgeriesNoDoctor);
app.get('/surgeries/:name', getDoctorSurgeries);
app.get('/:id', getAllPlans);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});