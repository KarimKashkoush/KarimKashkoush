import './skills.css';


// @ts-ignore
import htmlLogo from '../../../public/images/icons8-html.svg'
// @ts-ignore
import cssLogo from '../../../public/images/icons8-css.svg'
// @ts-ignore
import sassLogo from '../../../public/images/icons8-sass.svg'
// @ts-ignore
import javascriptLogo from '../../../public/images/icons8-javascript.svg'
// @ts-ignore
import typescriptLogo from '../../../public/images/icons8-typescript.svg'
// @ts-ignore
import bootstrapLogo from '../../../public/images/icons8-bootstrap.svg'
// @ts-ignore
import tailwindLogo from '../../../public/images/icons8-tailwind-css.svg'
// @ts-ignore
import reactLogo from '../../../public/images/icons8-react-native.svg'
// @ts-ignore
import materialLogo from '../../../public/images/icons8-material-ui.svg'
// @ts-ignore
import gitLogo from '../../../public/images/icons8-git.svg'
// @ts-ignore
import githubLogo from '../../../public/images/icons8-github.svg'
// @ts-ignore
import firebaseLogo from '../../../public/images/icons8-firebase.svg'



export default function Skills() {
    return (
        <section className="skills" id='skills'>
            <h2 className="title-section">
                Skills
            </h2>
            <section className="content">
                <section className="skill">
                    <img src={htmlLogo} />
                </section>
                <section className="skill">
                    <img src={cssLogo} />
                </section>
                <section className="skill">
                    <img src={sassLogo} />
                </section>
                <section className="skill">
                    <img src={javascriptLogo} />
                </section>
                <section className="skill">
                    <img src={typescriptLogo} />
                </section>
                <section className="skill">
                    <img src={bootstrapLogo} />
                </section>
                <section className="skill">
                    <img src={tailwindLogo} />
                </section>
                <section className="skill">
                    <img src={reactLogo} />
                </section>
                <section className="skill">
                    <img src={materialLogo} />
                </section>
                <section className="skill">
                    <img src={gitLogo} />
                </section>
                <section className="skill">
                    <img src={githubLogo} />
                </section>
                <section className="skill">
                    <img src={firebaseLogo} />
                </section>
            </section>
        </section>
    )
}
