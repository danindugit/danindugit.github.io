import { Exo } from 'next/font/google'

export const exo = Exo({ subsets: ['latin'] })

export default function HeroArea({className, text}) {
    return(
        <div className={`${className}`}>
            <div className="row">
                <div className="col">
                    <h1 className={exo.className}>{text}</h1>
                </div>
            </div>
        </div>
    );
}