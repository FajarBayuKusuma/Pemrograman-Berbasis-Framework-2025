import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Counter from './Counter';
import Greeting from './Greeting';
import ToDoList from './ToDoList';

//komponen header
function Header(){
  return(
    <header>
      <h1>Aplikasi React Saya</h1>
    </header>
  );
}

//Komponen Main
function Main(){
  return(
    <main>
      <h2>Selamat Datang di Aplikasi React Saya</h2>
      <p>Ini adalah area Konten utama</p>
    </main>
  );
}

//Komponen Footer
function Footer(){
  return(
    <footer>
      <p>&copy; 2025 Aplikasi React Saya</p>
    </footer>
  );
}

//Komponen Example
function Example(){
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  const handleNameChange = (e) =>{
    setName(e.target.value);
  };
  
  const handleAgeChange = (e) =>{
    setAge(e.target.value);
  };
  const handleEmailChange = (e) =>{
    setEmail(e.target.value);
  };

  return(
    <div>
      <input type = "text" placeholder="Nama" value={name} onChange={handleNameChange} />
      <input type = "number" placeholder="Umur" value={age} onChange={handleAgeChange} />
      <input type = "email" placeholder="Email" value={email} onChange={handleEmailChange} />

      <p>{name} berumur {age} tahun dan emailnya adalah {email}. </p>
    </div>
  )

}

// function ToDoList(){

//   const [name, setName] = useState('');
//   const [cond, setCond] = useState(0);
//   const [status, setStatus] = useState('');

//   const handleNameChange = (e) =>{
//     setName(e.target.value);
//   };
  
//   const handleCondChange = (e) =>{
//     setCond(e.target.value);
//   };
//   const handleStatusChange = (e) =>{
//     setStatus(e.target.value);
//   };
//   return(
//     <div>
//       <input type = "text" placeholder="Nama" value={name} onChange={handleNameChange} />
//       <label>Kondisi: </label>
//       <select value={kondisi} onChange={handleCondChange}>
//         <option value="">Pilih Salah Satu</option>
//         <option value="">Pilih Status</option>
//         <option value="Urgent">Sudah</option>
//         <option value="Semi Urgent">Belum</option>
//         <option value="Tidak Urgent">Progres</option>
//       </select>
//       <label>Status: </label>
//       <select value={status} onChange={handleStatusChange}>
//         <option value="">Pilih Status</option>
//         <option value="sudah">Sudah</option>
//         <option value="belum">Belum</option>
//         <option value="progres">Progres</option>
//       </select>
//       <p>Status dipilih: {status}</p>
//       <p>{name} berumur {age} tahun dan emailnya adalah {email}. </p>
//     </div>
//   )
// }

//Komponen App yang menggunkan Header, Main, dan Footer
function App(){
  return(
    <div>
      <Header />
      <Main />
      <Greeting name="John" />
      <Counter />
      <Example />
      <ToDoList/>
      <Footer />
      
    </div>
  );
}

export default App;