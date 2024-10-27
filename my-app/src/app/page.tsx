import Image from "next/image";

export default function Home() {
  return (
   <div className="bg-slate-100 h-screen flex justify-center items-center ">
    <div  className=" text-3xl w-1/2 px-10">
      <Image src="/pictures/Facebook logo.svg" 
    width={300}
     height={200} alt="facebook logo"/> 
     <p className="ml-8 -mt-3"> Facebook helps you connect and share with the people in your life.</p>
    </div>
    {/* Right side */}
    <div className="bg-white flex flex-col p-5  rounded-xl shadow-2xl w-1/3 ">
      <input className=" rounded-lg my-1 border border-1 border-gray-200 focus:outline-1 outline-blue-600 p-4" type="text" placeholder="Email address or phone number"></input>
      <input className=" rounded-lg my-2 border border-1 border-gray-200   focus:outline-1 outline-blue-600 p-4" type="password" placeholder="Password"></input>

      <button className="bg-blue-600  hover:bg-blue-700 p-2 font-bold  text-xl text-white items-center rounded-md">Login</button>

      <p className=" cursor-pointer text-sm text-blue-500 text-center p-3 my-2 hover:underline">Forgotten Password</p>
     <span className="my-2">
      <hr/>
     </span>
      <button className="bg-green-500 hover:bg-green-600 text-center text-white font-bold text-lg my-2 w-fit px-2 mx-auto rounded-xl py-2">Create new account</button>

    </div>
   </div>
  );
}
