import "./App.css";

// import ConditionStatus from "./components/ConditionStatus";
// import CounterUseReducer from "./components/CounterUseReducer";
// import EventProps from "./components/EventProps";
// import Greet from "./components/Greet";
// import Loggedin from "./components/Loggedin";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";
// import Styleprops from "./components/Styleprops";

// import Box from "./components/context/Box";
// import ThemeContextProvider from "./components/context/ThemeContextProvider";
// import User from "./components/context/User";
// import UserProvider  from "./components/context/User.Context";
// import DomRef from "./components/ref/DomRef";
// import MutableRef from "./components/ref/MutableRef";

// import Counter from "./components/class/Counter";

// import Private from "./components/auth/Private";
// import Profile from "./components/auth/Profile";
import List from "./components/generic/List";

function App() {
  //  const person = {
  //   firstName:"Dakshay",
  //   lastName:"Bishnoi"
  //  }
  //  const list =[{
  //   firstName:"Dakshay",
  //   lastName:"Bishnoi"
  //  },{
  //   firstName:"Aditya",
  //   lastName:"Garhwal"
  //  },{
  //   firstName:"Bruce",
  //   lastName:"Wayne"
  //  }]

 
  return (
    <>
      {/* <Greet name="Dakshay" numType={11} boolType={false} />
      <ConditionStatus status="error" />
   
      <Person>
        <PersonList> Here I am adding sending an element in props .</PersonList>
      </Person>

      <EventProps buttonhandler={(event) =>{
        console.log("you clicked this button, Why?" ,event);
      }} />

      <Styleprops styles={{border:"1px solid green",color:"grey"}} />

      <Loggedin />
      <CounterUseReducer/> */}

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserProvider>
         <User/>
      </UserProvider>
      <MutableRef/>
      <DomRef/> */}

      {/* <Counter message="THis is class component" /> */}

      {/* <Private isLoggedIn={true} component={Profile} /> */}

      {/* <List
        items={["dakshay", "bishnoi", "adi", "deepak", "ru"]}
        onClick={(value) => {
          console.log(value);
        }}
      /> */}
      <List
        items={[{
          id:1,
          name:"dakshay"
        },
        {
          id:2,
          name:"Rup"
        },
        {
          id:3,
          name:"Aditya"
        },
        {
          id:4,
          name:"Yogi"
        }]}
        onClick={(value) => {
          console.log(value);
        }}
      />
    </>
  );
}

export default App;
