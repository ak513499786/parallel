import pool from "./pool";

const insertDataIntoTable = () => async (req, res) => {
  try {
    const { Name, Company_Name, Work_Email, Designation } = req.body;
    const data = {
      Name,
      Company_Name,
      Work_Email,
      Designation,
    };

    pool.query("INSERT INTO hire_from_us set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};

export default insertDataIntoTable();
