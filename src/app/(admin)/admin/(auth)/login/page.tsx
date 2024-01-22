import { StyledButton } from "@/components/ui/button";
import { Password, UserCircle } from "@phosphor-icons/react/dist/ssr";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession();
  console.log(session)
    return (
        <main className="flex-grow w-full flex flex-col ">
            <div className="m-auto w-full max-w-sm flex flex-col gap-4 items-center">
                <h1 className="font-space text-2xl font-bold text-center text-adaptive-invert bg-adaptive-invert px-2">
                    {session?.user?.name}
                </h1>
                <div className={`relative block mx-2 w-full`}>
                    <UserCircle
                        className="absolute m-auto bottom-0 top-0 start-0 flex ms-3 w-5"
                        size={32}
                        weight="bold"
                    />
                    <input
                        className="bg-surface-adaptive text-adaptive rounded-md p-2 ps-10 text-lg w-full text-ellipsis"
                        placeholder="Username"
                    />
                </div>
                <div className={`relative block mx-2 w-full`}>
                    <Password
                        className="absolute m-auto bottom-0 top-0 start-0 flex ms-3 w-5"
                        size={32}
                        weight="bold"
                    />
                    <input
                        className="bg-surface-adaptive text-adaptive rounded-md p-2 ps-10 text-lg w-full text-ellipsis"
                        placeholder="Password"
                    />
                </div>
                <StyledButton className="mx-2  w-full"style="primary" type="link" href="/api/auth/signin">Login</StyledButton>
            </div>
        </main>
    );
};

export default page;
