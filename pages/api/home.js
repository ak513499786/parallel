import pool from "./pool";

const insertDataIntoTable = () => async (req, res) => {
  try {
    const { Name, Email, Phonenumber, Role } = req.body;
    const data = {
      Name,
      Email,
      Phonenumber,
      Role,
    };

    pool.query("INSERT INTO home set ?", data, (err, rows, fields) => {
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
