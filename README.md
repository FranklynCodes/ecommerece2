# Tech Center
Will be updating documentation everything will be updated by july 4th.

Redux variation of an e-commerce website instead of using useContext.

Website Production - <https://techcenter-ecommerce.herokuapp.com/>

If you want to run website locally or hosting it rename `.env.example` to `.env`.

Then add your mongoDB connection api key.  If no api key are stored the program will not run.

## Available Scripts

In the root project directory, you can run:

### `npm run data:import` must be run first

Use `npm run data:import` to send your backend data from `backend\data\DataProducts.js` directly to your mongoDB database. To initalize ecommerce merchandise.

### `npm run start`

To run the backend server at ``localhost:5000``.

### `npm run server`

To run backend server in nodemon at ``localhost:5000``.

### `npm run client`

To run frontend/client at ``localhost:3000``

### `npm run dev`

Runs two npm commands concurrently. Make sure to run `npm run data:import` before using this command.
