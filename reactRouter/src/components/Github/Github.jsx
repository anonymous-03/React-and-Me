import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router"

export async function loader({ params }) {
    const { userId } = params;
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }
    const data = await response.json();
    return data;
}
export default function Github(){
    const data=useLoaderData();
    if (!data) {
        return <div className="text-3xl bg-gray-500 text-red-500 text-center w-full h-100 flex items-center justify-center">Loading...</div>;
    }
    return (
        <div className="text-3xl bg-gray-500 text-red-500 text-center w-full h-100 flex items-center justify-center">
            <img src={data.avatar_url} alt="Github Avatar" className="w-20 h-20 rounded-full mb-4"/>
            <h1 className="mb-4">Github User : {data.login}</h1>
            <h1>Github Followers : {data.followers}</h1>
        </div>
    )
}