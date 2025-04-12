const backendUrl = import.meta.env.VITE_BACKEND_API_URL 
export const sendMessage = async (data) => {
    try {
        const response = await fetch(`${backendUrl}contact/send-message`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Failed to send message: ${response.statusText}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};
