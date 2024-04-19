import { sayHello } from "@/lib/action";

const ServerActionTestPage = () => {

     const actionInComponet = async() => {

        "use server";
        console.log("it works")
     }
  return (
    <div>
        <form action={sayHello}>
            <button>TEst me</button>
        </form>
    </div>
  )
}

export default Server;