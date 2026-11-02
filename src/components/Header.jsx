import Logo from "../assets/Logo.png";

export default function Header () {
    return(
        <header id="header">
 <img src={Logo} alt="Logo of Fra" />
<h1>React Investment Calculator</h1>
</header>
    );
}