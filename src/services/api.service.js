const BASE_URL = "http://localhost:3001/";

export default {
  async show() {
    const resp = await fetch("http://localhost:3001/people");
    return resp.json();
  },
};
