const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.get('/login', (req, res) => {
console.log("URL:\t " + req.originalUrl);
console.log("Protocol: " + req.protocol);
console.log("IP:\t " + req.ip);
console.log("Path:\t " + req.path);
console.log("Host:\t " + req.host);
console.log("Method:\t " + req.method);
console.log("Query:\t " + JSON.stringify(req.query));
console.log("Fresh:\t " + req.fresh);
console.log("Stale:\t " + req.stale);
console.log("Secure:\t " + req.secure);
console.log("UTF8:\t " + req.acceptsCharset('utf8'));
console.log("Connection: " + req.get('connection'));
console.log("Headers: " + JSON.stringify(req.headers,null,2));
 res.send(`
<center><h1 style="color:green">RVRJCCE LOGIN PAGE</h1>
<form method="POST" action="/login" autocomplete="off">
<br><label>Name:</label><input type="text" name="username" placeholder="Username" required autooff/><br>
<br><label>Password:</label><input type="password" name="password" placeholder="Password" required /><br>
<br><br>
<button type="submit">Login</button>
</form></center>
  `);
});
app.post('/login', (req, res)=>{
  const { username, password,regd } = req.body;
  if (username === 'Mohith' && password === 'Allu') {
    res.send('Login successful'+username);
  } else {
    res.send('Invalid username or password:'+username);
  }
});
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
