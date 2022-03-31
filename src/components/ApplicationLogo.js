import Image from 'next/image'
import PetraLogo from '../../public/petra_logo.png'

const ApplicationLogo = () => (
    <div className="bg-petra-blue w-24 rounded p-2">
        <Image
            src={PetraLogo}
            layout="responsive"
            width={100}
            height={20}
            alt="Petra Logo"
        />
    </div>
)

export default ApplicationLogo
