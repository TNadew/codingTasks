import './App.css';
import profilePic from './profilePic.jpg'
import UserInfoComponent from './components/UserInformation_Component'
import "bootstrap/dist/css/bootstrap.min.css";
import Stack from 'react-bootstrap/Stack';

//Defining current user constant
const currentUser = {
  name: "Super",
  surname: 'User',
  date_of_birth: '1999-09-09',
  address: 'Home',
  country: 'UK',
  email: 'SuperUserIs@Home.co.uk',
  telephone: '+4412346789',
  company: 'Chills',
  profile_picture: profilePic, 
  shopping_cart: ['Item 1', 'Item 2', 'Item 3'],
};

/** Function for main app  */
function App() {
  return (
    <Stack className="App">
      {/*Here we use a spread syntax to pass an object as a react props and to use on the custom component UserInfoComponent */}
      <UserInfoComponent   {...currentUser} />

      <div className='UserShoppingCart'>
      <h2>Shopping Cart:</h2>
      <ul>
        {currentUser.shopping_cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      </div>
    </Stack>
  );
}

export default App;
