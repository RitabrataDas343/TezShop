import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { connectWallet, setup } from "./tezos/connection";
import { getValue, setAll, addDonation } from "./tezos/modules";

const App = () => {
    const [Tezos, setTezos] = useState(undefined);
    const [status, setStatus] = useState("No Operations Performed");
    const [value, setValue] = useState(0);
    const [loader, setLoader] = useState(true);
    // const [toggler, setToggler] = useState(false);
  
    useEffect(() => {
      console.log("run");
      setup().then(setTezos).catch(console.error);
    }, []);
  
    useEffect(() => {
      if (Tezos === undefined) return;
      getValue(Tezos)
        .then(setValue)
        .then(() => setLoader(false))
        .catch(console.error);
      const timer = setInterval(() => {
        getValue(Tezos).then(setValue).catch(console.error);
      }, 60000);
  
      return () => {
        clearInterval(timer);
      };
    }, [Tezos]);
  
    const handleEvent = async (e, func, params) => {
      e.preventDefault();
      try {
        const wal = await connectWallet();
        Tezos.setWalletProvider(wal);
        setLoader(true);
        await func(Tezos, params, setStatus);
        await getValue(Tezos)
          .then(setValue)
          .then(() => setLoader(false));
      } catch (err) {
        console.error(err);
        alert("Couldn't connect wallet");
      }
    };
}  

function App() {
    return (
            <div className="App">
              <body>
              <div class = "counter">
                <h4>Donate and make change - </h4>
                </div>
                <div class = "bgrid">
                  <div class="options">
                    <p class="added">Hello i am robotan</p>
                    </div> 
                  <div class="venue">
                    <form action="/" class="decor"
                      onSubmit={async (e) => {
                        await handleEvent(e, setAll, {
                          name: e.target.name.value,
                          cause: e.target.cause.value,
                          price: e.target.price.value,
                        });
                      }} 
                    >
                      <div class="form-inner">
                        <h1>Contact us</h1>
                        <input type="text" name="name" step="1" placeholder="Username"/>
                        <input type="number" name="price" step="1" placeholder="Email"/>
                        <textarea name="cause" step="1" placeholder="Message..." rows="5"></textarea>
                        <button type="submit" className="submitBtn" value="Transfer data">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </body>
            </div>

    );
}

export default App;
