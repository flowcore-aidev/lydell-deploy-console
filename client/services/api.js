const BACKEND_URL = "https://deploybackend-rq7i.onrender.com/api/gpt";

export const sendPrompt = async (prompt) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/gpt`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    return await response.json();
  } catch (error) {
    console.error("Error connecting to backend:", error);
    return { error: "Failed to reach backend" };
  }
};
