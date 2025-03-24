"use client";
import React from "react";
import Link from "next/link";
import { UnderDevelopmentAlert } from "./libs/components/underDevelopmentAlert";
import { useSession } from "next-auth/react";
const WelcomePage = () => {
  const {data : sessionData , status : sessionStatus} = useSession();
  console.log(sessionData)
  return (
    <div className="grid place-items-center pb-16 text-gray-500 text-lg">
      <UnderDevelopmentAlert />
      <h1>神奈川大学会計学研究部</h1>
      {sessionStatus === "unauthenticated" ? (
        <>
          <Link
            href="/member/borrow"
            className="btn btn-wide mb-7 bg-green-600"
          >
            Login なしで続ける
          </Link>
          <Link
            href="/api/auth/signin"
            className="btn btn-wide mb-7 bg-sky-300"
          >
            Log In
          </Link>
          <Link href="/member/register" className="btn btn-wide bg-green-300">
            入部登録
          </Link>
        </>
      ) : sessionStatus === "authenticated" ? (
        <>
        <div className="mockup-window border-base-300 border">

          <div className="flex text-2xl flex-auto align-middle">ようこそ{sessionData.user?.name}さん</div>
          <div className="flex text-2xl flex-auto align-middle">ナビゲーションバーで操作をしてください↑↓</div>
          </div>
        </>
      ) : (
        <div className="loading-dots bg-black font-black flex-auto ">.........</div>
      )}
    </div>
  );
};

export default WelcomePage;
