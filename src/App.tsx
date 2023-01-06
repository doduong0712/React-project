import { useState, useEffect, ChangeEvent } from "react";
import CardListComponent from "./components/card-list/card-list.component";

// import logo from "./logo.svg";
import "./App.css";
import SearchBoxComponent from "./components/search-box/search-box.component";
import { getData } from "./utils/data.utils";

export type Monster = { //Những tên thuộc tính sử dụng phải khai báo
  id:number
  name:string
  email:string
}

const App = () => {
  console.log("rendered"); //Mỗi khi useState thay đổi thì component re-render, và chạy lại toàn bộ function
  const [searchField, setSearchField] = useState(""); //hook [value,setValue]
  const [monsters, setMonsters] = useState<Monster[]>([]);
  console.log(monsters);
  
  const [title, setTitle] = useState("Monsters Rolodex");
  const [fielteredMonsters, setFielteredMonsters] = useState(monsters);
  // const [stringField, setStringField] = useState("");
  // console.log(searchField);
  // console.log(monsters);
  useEffect(() => {
    // Chạy ngay lần đầu khi được mount
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((users) => {
    //     setMonsters(users);
    //   });

    const fetchUsers = async () => {
      const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users")
      setMonsters(users)
    }
    fetchUsers()
  }, []);

  useEffect(() => {
    const newFielteredMonsters = monsters.filter((monster, idx) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );
    setFielteredMonsters(newFielteredMonsters);
  }, [monsters, searchField]);

  //   componentDidMount() {
  //     //Sẽ chạy sau khi render để có dữ liệu gắn vào DOM(mount)
  //     // console.log("componentDidMount");
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((users) => this.setState({ monsters: users }));
  //   }

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    // console.log(e.target.value);
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    // console.log(e.target.value);
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  };

  /*  const onStringChange = (e) => {
    setStringField(e.target.value);
  }; */

  /* console.log(
      this.state.monsters.filter((monster, idx) =>
        monster.name.toLocaleLowerCase().includes("")
      )
    ); */

    return (
      <div className="App">
        <h1 className="app-title">{title}</h1>
        <SearchBoxComponent
          className="monsters-search-box"
          onChangeHandler={onSearchChange}
        />
        <br />
        <SearchBoxComponent
          className="title-search-box"
          onChangeHandler={onTitleChange}
        />
        {/* <SearchBoxComponent onChangeHandler={onStringChange} /> */}
        <CardListComponent monsters={fielteredMonsters} />
      </div>
    ) 
    
  
};

// class App extends Component {
//   constructor() {
//     //constructor luôn được chạy trước và tạo trước
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//     // console.log("constructor");
//   }

//   componentDidMount() {
//     //Sẽ chạy sau khi render để có dữ liệu gắn vào DOM(mount)
//     // console.log("componentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((users) => this.setState({ monsters: users }));
//   }

//   render() {
//     // console.log("render");

//     const { monsters, searchField } = this.state;

//     const filteredMonsters = monsters.filter((monster, idx) =>
//       monster.name.toLocaleLowerCase().includes(searchField)
//     );
//     /* console.log(
//       this.state.monsters.filter((monster, idx) =>
//         monster.name.toLocaleLowerCase().includes("")
//       )
//     ); */

//     const onSearchChange = (e) => {
//       // console.log(e.target.value);
//       const searchField = e.target.value.toLocaleLowerCase();

//       this.setState(() => {
//         return { searchField: searchField };
//       });
//     };

//     //render sẽ chạy tiếp theo (mount component vào trang)
//     // và sẽ đc re-render lại khi cập nhật state
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBoxComponent onChangeHandler={onSearchChange} />
//         <CardListComponent monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

// Object.assign(); //Tạo ra một đối tượng hoàn toàn mới , và ko trỏ cùng memory
// Update setState phải luôn cùng 1 giá trị

export default App;
