import pool from "./pool";

const insertDataIntoTable = () => async (req, res) => {
  try {
    const { Name, Email, Phone_Number, iam, help, Message } = req.body;
    const data = {
      Name,
      Email,
      Phone_Number,
      iam,
      help,
      Message,
    };

    pool.query("INSERT INTO contact_us set ?", data, (err, rows, fields) => {
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
