import { json, LoaderFunction, Outlet, Scripts, ScrollRestoration, useLoaderData } from "remix";
import FirstComponent from "~/components/FirstComponent";
import { getAllToDos, ToDos } from "~/db";

export const loader: LoaderFunction = async () => {
    const defaultData = await getAllToDos();
    return json(defaultData);
}

export default function ToDoListIndex() {
    const allToDo: ToDos[] = useLoaderData();
    console.log('All to do ', allToDo);
    return (


        <div className="text-center mt-10" style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
            <div className="font-bold text-black text-2xl underline" >Welcome to Remix + Redux Test</div>

            <div className="mt-8" >
                {allToDo.map((todo: ToDos, index: number) => {
                    return <div key={index} className="mb-3" > <a href={`/to-do-list/${todo.id}`} >{todo.name}</a> </div>
                })}
            </div>

            {/* MY TO DO FORM */}
            <a href="/to-do-list/newToDo" className="text-customPink-1 underline" >Add New To Do</a>
<br />
            <br/>
            <FirstComponent/>
            <br />
            <a href="/" className="text-customBlue-4 underline" >GO TO HOME PAGE</a>
            
            <Outlet />
            <ScrollRestoration />
            <Scripts />
        </div>


    );
}
