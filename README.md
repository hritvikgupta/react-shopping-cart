# MERN Stack E-Commerce Application 

This project is an E-Commerce application built using the MERN Stack (MongoDB, Express, React, Node.js) and TypeScript for static type checking. It demonstrates various functionalities of an online store, such as browsing products, adding items to the cart, and managing user authentication.

# Preview
Link To Demo: [https://shopping-ekart.netlify.app/](https://shopping-ekart.netlify.app/)  (Only Frontend will work in preview as its not a production deployment but a development. Clone it and make changes in MongoDB links so as to start the production).

https://github.com/hritvikgupta/react-shopping-cart/assets/60143996/ca8291ea-eaca-4a95-acc5-ed6b4298b61f

## Project Structure

### Frontend

The structure and a brief explanation of each frontend folder/file in the project:

- `src`: This is the root folder containing all the source code of the project.
- `api`: Contains `axios.tsx`, the configuration file for axios which is used to make HTTP requests.
- `components`: This folder includes all the reusable components used across the application.
    * `NavBar.tsx`: This component provides the navigation bar in the app.
    * `StoreItem.tsx`: A component representing a single item in the store.
    * `CartItem.tsx`: A component representing a single item in the shopping cart.
    * `ShoppingCart.tsx`: This component provides the shopping cart functionality.
- `contexts`: Includes context providers for managing global state.
    * `ShoppingCartContext.tsx`: Provides the context for managing the shopping cart.
    * `LoginPageProvider.tsx`: Provides the context for managing the login page state.
    * `AuthProvider.tsx`: Provides the context for managing authentication.
- `data`: Contains the `items.json` file which is the data source for the items in the store.
- `error`: Contains `ErrorMessageBar.tsx` component and `ErrorMessageBar.css` to handle and display error messages in the UI.
- `Forms`: Contains form components and their corresponding validation files.
    * `LoginForm.tsx & LoginValidation.tsx`: These files provide the login form and its validation respectively.
    * `RegistrationForm.tsx & SignUpValidation.tsx`: These files provide the registration form and its validation respectively.
- `hooks`: Contains custom hooks.
    * `useMultistepForm.tsx`: A custom hook for managing multi-step forms.
    * `useLocalStorage.tsx`: A custom hook for managing local storage.
- `Images`: Contains `shoppingCart.png` used in the project.
- `pages`: Includes different page components for the application.
    * `Home.tsx`: The home page component.
    * `Store.tsx`: The store page component.
    * `LoginPage.tsx`: The login page component.
    * `About.tsx`: The about page component.
- `utilities`: Contains utility functions and components.
    * `ProductStore.tsx`: Utility for managing product data.
    * `formatCurrency.tsx`: Utility function for formatting currency values.
- `App.css`: Contains global styles for the application.
- `App.tsx`: The main component that renders the application.

### Backend

Here is the structure and a brief explanation of each backend folder/file:

- `config`: This directory includes the `dbConnection.js` file for setting up the database connection and `constants.js` for application constants.
- `controllers`: This folder contains `userController.js` which handles the business logic for user related routes.
- `middleware`: This directory includes middleware functions such as `validTokenHandler.js` for verifying tokens and `errorHandler.js` for handling errors.
- `models`: Contains Mongoose schemas and models. Currently includes `user.model.js`.
- `Routes`: This folder contains all the application routes, which includes `userRoutes.js`.
- `server.js`: This is the entry point for the backend server.

## Running the Project

To run this project locally, follow these steps:

1. Clone the repository to your local machine using the command `git clone https://github.com/hritvikgupta/react-shopping-cart.git`.
2. Navigate into the project directory using `cd react-shopping-cart`.
3. Install all the necessary dependencies using the command `npm install`.
4. Start the application using the command `npm start`. The application will now be running on http://localhost:3000.

## Contributing

Contributions to the project are welcome. If you find a bug, please open an issue and describe the bug in detail. If you wish to add a new feature, feel free to fork the repository and create a pull request with your changes.
1. Bug In the signUp portal where active tab is not changing.
2. Adding items to cart but some items id is not rendering and therefore not adding inside cart.
3. Add the about section

## License

This project is licensed under the MIT License.
