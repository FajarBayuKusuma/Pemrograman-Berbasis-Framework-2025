import { useState } from "react";

function ToDoList() {
  const [name, setName] = useState("");
  const [cond, setCond] = useState("");
  const [status, setStatus] = useState("");
  const [tasks, setTasks] = useState([]); // Menyimpan daftar tugas

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCondChange = (e) => {
    setCond(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  // Fungsi untuk menambahkan tugas baru
  const handleAddTask = () => {
    if (name && cond && status) {
      const newTask = { name, cond, status };
      setTasks([...tasks, newTask]); // Menambahkan ke daftar tasks
      setName(""); // Reset input setelah menambahkan tugas
      setCond("");
      setStatus("");
    } else {
      alert("Harap isi semua bidang sebelum menambahkan tugas!");
    }
  };

  // Fungsi untuk menghapus tugas berdasarkan indeks
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input type="text" placeholder="Nama Tugas" value={name} onChange={handleNameChange} />
      
      <label>Kondisi: </label>
      <select value={cond} onChange={handleCondChange}>
        <option value="">Pilih Kondisi</option>
        <option value="Urgent">Urgent</option>
        <option value="Semi Urgent">Semi Urgent</option>
        <option value="Tidak Urgent">Tidak Urgent</option>
      </select>

      <label>Status: </label>
      <select value={status} onChange={handleStatusChange}>
        <option value="">Pilih Status</option>
        <option value="sudah">Sudah</option>
        <option value="belum">Belum</option>
        <option value="progres">Progres</option>
      </select>

      <button onClick={handleAddTask}>Tambah Tugas</button>

      <h3>Daftar Tugas</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>{task.name}</strong> - {task.cond} - {task.status}
            <button onClick={() => handleDeleteTask(index)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
