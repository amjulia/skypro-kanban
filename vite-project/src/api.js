// const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

export async function getToDos({token}) {
  const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}
export async function postToDo({title, topic, description, date, token}) {
  const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
    method: "POST",
    body: JSON.stringify({
      title,
    topic,
    description,
    date,
  
    }),
    headers: {
      Authorization: `Bearer ${token}`,
    },

  });
  if (!response.ok) {
    const error = await response.json();
 throw new Error(error.error)
  }
  const data = await response.json();
  return data;
 
}

export async function deleteTodo({id, token}) {
  const response = await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (!response.ok) {
    const error = await response.json();
 throw new Error(error.error)
  }
  const data = await response.json();
  return data;
}

export async function authToDos(name, login, password) {
  const response = await fetch("https://wedev-api.sky.pro/api/user", {
    method: "POST",
    body: JSON.stringify({
      name,
      login,
      password,
    }),
  });
  if (!response.ok) {
 const error = await response.json();
 throw new Error(error.error)
  }
  
  // if (response.status === 500) {
  //   throw new Error("Ошибка сервера");
  // }
  // if (response.status === 400 ) {
  //   throw new Error("Пользователь с таким логином уже зарегистрирован")
    
  // }
  const data = await response.json();
  return data;
}
export async function loginToDos( login, password) {
    const response = await fetch("https://wedev-api.sky.pro/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        login,
        password,
      }),
    });
    if (response.status === 500) {
        throw new Error("Ошибка сервера");
      }
      if (response.status === 400 ) {
        throw new Error("Неверный логин или пароль")
      }
    const data = await response.json();
    return data;
  }
