const getPosts = async () => {
    const response = await fetch('http://localhost:3000/posts')
    await new Promise(r => setTimeout(r, 1000)) // wait a second
    return response.json()
  };