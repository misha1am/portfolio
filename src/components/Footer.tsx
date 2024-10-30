import { name } from "../constants/";

export default function Footer() {
    return (
        <footer className="bottom-0 left-0 right-0 p-10 -mt-20 text-center text-sm text-white">
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </footer>
    )
}