import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export class PersonList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      persons: [],
      persons2: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(res => {
      this.setState({ persons: res });
    });
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      this.setState({ persons2: res.data });
    });
  }

  render() {
    const { persons, persons2 } = this.state;
    return (
      <div className="row">
        <div className="col-6">
        <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {persons.map(person => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.username}</td>
              <td>{person.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
        <div className="col-6">
        <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {persons2.map(person => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.username}</td>
              <td>{person.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<PersonList />, document.getElementById("app-root"));
