const express = require('express');

const app = express();
const port = 3000;
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImFwcCIsInBvcnQiLCJ1c2UiLCJzdGF0aWMiLCJnZXQiLCJyZXEiLCJyZXMiLCJzZW5kIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUF2Qjs7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLE9BQU8sRUFBbkI7QUFDQSxNQUFNRyxJQUFJLEdBQUcsSUFBYjtBQUVBRCxHQUFHLENBQUNFLEdBQUosQ0FBUUosT0FBTyxDQUFDSyxNQUFSLENBQWUsUUFBZixDQUFSO0FBRUFILEdBQUcsQ0FBQ0ksR0FBSixDQUFRLEdBQVIsRUFBYSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUN6QkEsRUFBQUEsR0FBRyxDQUFDQyxJQUFKLENBQVMsY0FBVDtBQUNELENBRkQ7QUFJQVAsR0FBRyxDQUFDUSxNQUFKLENBQVdQLElBQVgsRUFBaUIsTUFBTTtBQUNyQlEsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEscUNBQW9DVCxJQUFLLEVBQXREO0FBQ0QsQ0FGRCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJylcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuY29uc3QgcG9ydCA9IDMwMDBcblxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJykpXG5cbmFwcC5nZXQoJy8nLCAocmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmQoJ0hlbGxvIFdvcmxkIScpXG59KVxuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYEFwcCBsaXN0ZW5pbmcgYXQgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9YClcbn0pIl19