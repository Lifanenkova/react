import React, { useState, useEffect } from 'react';
import { loadUsers } from '../../api';

function UserLoaderH () {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const load = () => {
    setIsFetching(true);

    loadUsers({ page: currentPage })
      .then(data => {
        setUsers(data.results);
      })
      .catch(error => {
        setIsError(true);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  useEffect(() => {
    load();
  }, [currentPage]);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {isError && <div>!!!ERROR!!!</div>}
      {isFetching && <div>Loading...</div>}
      {/* Реализовать обработчики */}
      <button onClick={prevPage}>{'<'}</button>
      <button onClick={nextPage}>{'>'}</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{JSON.stringify(user)}</li>
        ))}
      </ul>
    </>
  );
}

export default UserLoaderH;

// componentDidMount () {
//     this.load();
//   }

//   componentDidUpdate (prevProps, prevState) {

//     if (prevState.currentPage !== currentPage) {
//       this.load();
//     }
//   }

//   const load = () => {
//     const { currentPage } = this.state;
//     this.setState({ isFetching: true });

//     loadUsers({ page: currentPage })
//       .then(data => {
//         this.setState({ users: data.results });
//       })
//       .catch(error => {
//         this.setState({ isError: true });
//       })
//       .finally(() => {
//         this.setState({ isFetching: false });
//       });
//   };

//   prevPage = () => {
//     const { currentPage } = this.state;
//     if (currentPage > 1) {
//       this.setState({ currentPage: currentPage - 1 });
//     }
//   };

//   nextPage = () => {
//     const { currentPage } = this.state;
//     this.setState({ currentPage: currentPage + 1 });
//   };

//   render () {
//     const { users, isError, isFetching } = this.state;

//     // if (isError) {
//     //   return <div>!!!ERROR!!!</div>;
//     // }
//     // if (isFetching) {
//     //   return <div>Loading...</div>;
//     // }
//     return (
//       <>
//         {isError && <div>!!!ERROR!!!</div>}
//         {isFetching && <div>Loading...</div>}
//         {/* Реализовать обработчики */}
//         <button onClick={this.prevPage}>{'<'}</button>
//         <button onClick={this.nextPage}>{'>'}</button>
//         <ul>
//           {users.map((user, index) => (
//             <li key={index}>{JSON.stringify(user)}</li>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }

// export default UsersLoader;
