import { useParams } from "react-router";

export default function User() {
    const { userId } = useParams();
  return (
    <div className="text-3xl bg-gray-500 text-red-500 text-center w-full h-100 flex items-center justify-center">
      <h1>User : {userId}</h1>
    </div>
  );
}