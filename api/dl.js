export default function handler(request, response) {
    const targetUrl = process.env.TAPP_URL;

    if (!targetUrl) {
        return response.status(404).json({ error: 'Configuration missing' });
    }

    // output a simple redirect
    response.redirect(307, targetUrl);
}
