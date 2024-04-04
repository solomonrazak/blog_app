"use client" // because we are using an event handler so makes it client side.
import {usePathname, useRouter, useSearchParams} from 'next/navigation';

import Link from "next/link";


const  NavigationTestPage = () => {


    // CLIENT SIDE NAVIGATION
const router = useRouter() // this is a hook
const pathname = usePathname() // a hook
const searchParams = useSearchParams()

const q = searchParams.get("q")

console.log(pathname);
   
// CLIENT SIDE NAVIGATION
    const handleClick = () => {
        console.log("clicked");
        router.push("/"); // we can use this to push the user to the homepage.
        // router.replace("/")
        // router.refresh()
        // router.back() // to open up the previous page
        // router.forward() // go to next page

        // const searchParams = useSearchParams();

        // const q = searchParams.get("q")
        // console.log(q)

    }
  return (
    <div>
        <Link href="/">Click me</Link> {/*  next link will pre-fetch our home page and renders it much faster*/}
        <Link href="/" prefetch={false}>Click me - no prefetch</Link> {/*if you have many links in comp. disable prefetch to avoid issues.*/}
        <button onClick={handleClick}>Write and Redirect</button>
    </div>
  )
}

export default NavigationTestPage;