import { init } from '@waline/client';
import '@waline/client/dist/waline.css';

const locale = {
    placeholder: "For a healthy network environment, comments will be displayed after review."
}
const waline = init({
    el: '#waline',
    serverURL: 'https://eddiehe-profile-pictures-waline.vercel.app',
    dark: 'auto',
    lang: 'en',
    locale,
});
export default waline
