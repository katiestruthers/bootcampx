const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
const queryString = `
  SELECT students.id, students.name, cohorts.name AS cohort_name
  FROM students
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name LIKE $1
  LIMIT $2;
  `;

pool.query(queryString, [`%${cohortName}%`, limit])
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
    });
  });