const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cIytIPMKRVMpi3EVncOl/scores';

const submit = async (user, score) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user, score,
    }),
  });

  const data = await response.json();
  return data;
};

const get = async () => {
  const res = await fetch(url);
  let output = [];
  const data = await res.json();
  data.result.forEach((user, i) => {
    const newname = `<li class="${i}">${user.user}:${user.score}</li>`;

    output += newname;
  });
  const list = document.querySelector('ul');
  list.innerHTML = output;
};
export { submit, get };