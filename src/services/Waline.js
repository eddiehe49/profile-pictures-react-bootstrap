import Waline from '@waline/client';
const waline = Waline({
    el: '#waline',
    serverURL: 'https://eddiehe-avatars-waline.vercel.app',
    dark: 'auto',
    lang: 'en',
});
export default waline
