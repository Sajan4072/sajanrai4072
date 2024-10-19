import { SiIonic } from "react-icons/si";
import { FaMapMarkedAlt } from 'react-icons/fa'
import { IoCall, IoSendSharp } from 'react-icons/io5'
export interface ContactInterface {
    title: string;
    value: string;
    icon: React.ReactNode;
}
const className: string = ' text-3xl m-2 ';
const color: string = '#00d187'
const contactData: ContactInterface[] = [{
    title: 'Name',
    value: 'Sajan Rai',
    icon: <SiIonic className={className} color={color} />
}, {
    title: "Location",
    value: 'Toronto,Ontario,Canada',
    icon: <FaMapMarkedAlt className={className} color={color} />
}, 
// {
//     title: "Call Me",
//     value: '9807590188/9840480757',
//     icon: <IoCall className={className} color={color} />
// },
 {
    title: "Email Me",
    value: 'rai4072@gmail.com',
    icon: <IoSendSharp className={className} color={color} />
}]

export default contactData;