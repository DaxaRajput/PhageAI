// API base URL loaded from environment (Vercel / local)
// Fallback allows local backend testing
const API_BASE =
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000"

// Generic JSON POST helper
async function postJSON(endpoint, payload, timeoutMs = 15000) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMs)

  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })

    if (!response.ok) {
      const text = await response.text()
      throw new Error(
        `API error (${response.status}): ${text || "Unknown error"}`
      )
    }

    return await response.json()
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Request timed out. Backend may be unavailable.")
    }
    throw error
  } finally {
    clearTimeout(timeout)
  }
}

// Predict phage–bacteria interaction
export async function predictInteraction(phageSeq, bacteriaSeq) {
  return postJSON("/api/predict", {
    phage_sequence: phageSeq,
    bacteria_sequence: bacteriaSeq,
  })
}