// import React from 'react'

// const Exemple = () => {
//   const [value, setValue] = React.useState('');
//   const [items, setItems] = React.useState([]) // [user1, user2, ...]



//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     setItems([...items, value])
//   }

//   const handleDelete = (value) => {
//     setItems(items.filter((item) => item !== value))
//   }
//   return (
//     <div>
//     <form onSubmit={handleFormSubmit}>
//       <input 
//       type='text' 
//       value={value} 
//       onChange={(e) => setValue(e.target.value)}
//       />
//       <button type='submit'>Create</button>
//       </form>
//       <ul>
//         {items.map((item) => 
//         <li key={item}>
//         <p>{item}</p><button onClick={() => handleDelete(item)}>Delete</button>
//         </li>)}
//       </ul>
//     </div>

//   )
// }

// export default Exemple
