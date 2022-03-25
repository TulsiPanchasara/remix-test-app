import { ActionFunction, redirect, useLoaderData } from "remix";
import { addToDo } from "~/db";

export const action: ActionFunction = async ({
  request,
}) => {
    const form = await request.formData();
    console.log('request ==== ', request)
  const name = form.get("name");
  const description = form.get("description");
  // we do this type check to be extra sure and to make TypeScript happy
  // we'll explore validation next!
  if (
    typeof name !== "string" ||
    typeof description !== "string"
  ) {
    throw new Error(`Form not submitted correctly.`);
  }

    const fields = { name, description, id: Math.random() };
    console.log('fields', fields)

    const newToDO = await addToDo(fields);
  return redirect(`/to-do-list/${newToDO}`);
};


export default function NewToDo() {
    const allToDo = useLoaderData();
    console.log('All to do ', allToDo);
  return (
    <div className=" p-8" >
      <p>Add your own to do</p>
      <form method="post">
        <div className="mb-5" >
          <label>
            Name: <input className="border border-black" type="text" name="name" />
          </label>
        </div>
        <div className="mb-5" >
          <label>
            Content: <textarea name="description" className="border border-black"/>
          </label>
        </div>
        <div>
          <button type="submit" className="px-8 py-2 bg-customBlue-8 text-white">
            Add To Do
                  </button>
                  <a href="." className="px-8 py-2 ml-5 bg-customGray-1 text-white ">
            Cancel 
          </a>
        </div>
      </form>
    </div>
  );
}

export function ErrorBoundary({ error }: any) {
    console.log('error', error)
    return (
        <div>
            <h1>Error</h1>
            <p>{error.message}</p>
            <p>The stack trace is:</p>
            <pre>{error.stack}</pre>
        </div>
    );
}