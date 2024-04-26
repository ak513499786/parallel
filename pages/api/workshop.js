import pool from "./pool";

const insertDataIntoTable = () => async (req, res) => {
  try {
    const { Name, College_Name, College_Email, Designation } = req.body;
    const data = {
      Name,
      College_Name,
      College_Email,
      Designation,
    };

    pool.query("INSERT INTO workshop set ?", data, (err, rows, fields) => {
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
