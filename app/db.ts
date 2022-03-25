
export type ToDos = {
  id: number;
  name: string;
  description: string;
};

export async function getAllToDos(): Promise<Array<ToDos>> {
  return [
    {
      id: 1,
      name: "To Do Number 1",
      description: "This is going to be my default to do 1",
    },
    {
      id: 2,
      name: "To Do Number 2",
      description: "This is going to be my default to do 2",
    },
  ];
}

export async function getToDoById(id: number) {
  const toDos = await getAllToDos();
  return toDos.find((toDo) => toDo.id === id);
}

export async function addToDo(data: ToDos) {
  const toDos = await getAllToDos();
    toDos.push(data);
    return data.id;
}
