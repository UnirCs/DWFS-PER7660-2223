const darkButton = document.getElementById('buttonDark');
let cont = 1
darkButton.addEventListener('click', () => {
    cont++;
    const body = document.body;
    body.classList.remove('dark', 'light');
    const style = cont % 2 == 0 ? 'dark' : 'light';
    body.classList.add(style);

    const principal = document.getElementById('principal');
    principal.classList.remove('principalDark', 'principal');
    const stylePrincipal = cont % 2 == 0 ? 'principalDark' : 'principal';
    principal.classList.add(stylePrincipal);

    const section1 = document.getElementById('section1');
    section1.classList.remove('section1Dark', 'section1');
    const styleSection1Dark = cont % 2 == 0 ? 'section1Dark' : 'section1';
    section1.classList.add(styleSection1Dark);

    const section2 = document.getElementById('section2');
    section2.classList.remove('section2Dark', 'section2');
    const styleSection2Dark = cont % 2 == 0 ? 'section2Dark' : 'section2';
    section2.classList.add(styleSection2Dark);

    const icon = document.getElementById('iconL');
    const iconDark = document.createElement("i");
    const icono = cont % 2 == 0 ? "light_mode" : "dark_mode";
    icon.remove();
    iconDark.textContent = icono;
    iconDark.id = "iconL";
    iconDark.classList.add("material-icons");
    const sectionIcon = document.getElementById('buttonDark');
    sectionIcon.appendChild(iconDark);
});