import React from "react";
import Header from "./HOC/Header";
import List from "./Components/List";
import Button from '@material-ui/core/Button'


function App() {
  return (
    <div className="App" style={{ fontSize: "22px" }}>
      <Header className="header" />
      <List/>
      <Button variant="contained" color="secondary" style={{marginTop:'5px', marginRight:'5px',float:'right'}}>
        글쓰기
      </Button>

      </div>
  );
}

export default App;
