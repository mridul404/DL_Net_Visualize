import Image from "next/image";
import ThemeChange from "@/app/themeChange/ThemeChange";
export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-base-100">
      <>
        <ThemeChange />
      </>

      <span className="loading loading-spinner loading-xs"></span>
      <span className="loading loading-spinner loading-sm"></span>
      <span className="loading loading-spinner loading-md"></span>
      <span className="loading loading-spinner loading-lg"></span>

      <h1> Hello </h1>
      
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Cookies!</h2>
          <p>We are using cookies for no reason.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-ghost">Deny</button>
          </div>
        </div>
      </div>
    </main>
  );
}

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
