import { Exo } from 'next/font/google'

export const exo = Exo({ subsets: ['latin'] })

export default function HeroArea({text}) {
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className={exo.className}>{text}</h1>
                </div>
            </div>
            <hr/>
        </div>
    );
}