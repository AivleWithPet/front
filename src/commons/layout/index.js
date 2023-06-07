import NavBar from "../../components/navBar/navBar.js"

export default function Layout(props) {
    return (
        <>
            <NavBar />
            <div>{props.children}</div>
        </>
        )
}