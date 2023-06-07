import NavBar from "../../components/navBar/navBar.js"
import NavBar2 from "../../components/navBar2/navBar2.js"
import {useRouter} from "next/router"

const Hidden = [
    "/"
]

export default function Layout(props) {
    const router = useRouter()
    const isHidden = Hidden.includes(router.asPath)
    return (
        <>
            {isHidden && <NavBar />}
            {!isHidden && <NavBar2 />}
            <div>{props.children}</div>
        </>
        )
}