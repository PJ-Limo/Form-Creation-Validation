    const fetchUserData = async (firstName, lastName) => {

        const apiURL = fetch('https://jsonplaceholder.typicode.com/users');
        const dataContainer = document.getElementById('api-data');
      
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          then(res => {
              return res.json();
          })
          .then( data => {
              data.forEach( user => {
                  const userList = '<li>${user.name}</li>';
      
                  document.querySelector('ul').insertAdjacentHTML('beforeend', userList)
              })
          })
        } catch (error) {
          console.log('Failed to load user data.', error);
        }
        
        dataContainer.innerHTML = '';
      
    };
