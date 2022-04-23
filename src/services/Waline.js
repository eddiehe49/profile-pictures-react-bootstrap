import Waline from '@waline/client';
const locale = {
    placeholder: "For a healthy network environment, comments will be displayed after review."
}
const waline = Waline({
    el: '#waline',
    serverURL: 'https://eddiehe-avatars-waline.vercel.app',
    dark: 'auto',
    lang: 'en',
    locale,
});
export default waline
