const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.get('/add', (req, res) => {
  res.send(`
<center><h1 style="color:blue">ADDITION</h1>
<form method="POST" action="/add">
<br><label>Number N1:</label><input type="text" name="t1" placeholder="N1" required /><br>
<br><label>Number N2:</label><input type="text" name="t2" placeholder="N2" required /><br>
<br><br>
<button type="submit">ADD</button>&nbsp;&nbsp;&nbsp; <button type="reset">Clear</button>
</form></center>
  `);
});
app.post('/add', (req, res) => {
  const { t1, t2 } = req.body;
  var n1=Number(t1);
   var n2=Number(t2);
   var result=n1+n2;
    res.send('Addition of Two numbers:'+result+"<br><a style='color:red' href=./add>GoTo Home</a>");

});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
