import { LoaderFunction, useLoaderData } from "remix";
import { getToDoById } from "~/db";

export const loader: LoaderFunction = async ({ params }) => {
    console.log('toDoId', Number(params.toDoId));
    const currentToDo = await getToDoById(Number(params.toDoId));
    console.log('currentToDo',currentToDo)
    return currentToDo || null;
}



export default function ToDoListIndexById() {
    const params = useLoaderData();
    console.log('PARAMS ', params);
    return (
        <div>
            <div className="text-center mt-10" style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
                <div className="font-bold text-black text-2xl underline" >Welcome to Remix + Redux Test</div>
                <div className="text-xl text-red-500 my-5" >ID: {params.id} </div>
                <div>Name: {params.name}</div>
                <div className="mb-5">Desc.: {params.description} </div>
                <a href="/to-do-list"  >CLICK TO GO TO TO DO LIST</a>
            </div>
        </div>

    );
}

export function ErrorBoundary({ error }: any) {
    console.log('error', error)
    return (
        <div className="text-customRed-1 " >
            <h1>Error</h1>
            <p>Oops! Something went wrong!!!</p>
            {/* <p>The stack trace is:</p>
            <pre>{error.stack}</pre> */}
        </div>
    );
}