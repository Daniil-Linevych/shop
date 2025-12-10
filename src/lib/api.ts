
export const fakeApi = {
  
  async get(endpoint: string) {
    const response = await fetch(endpoint)
    return response.json()
  },

  async post(endpoint: string, data: any) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    return response.json()
  }
}
